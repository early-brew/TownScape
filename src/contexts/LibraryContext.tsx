// src/contexts/LibraryContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type LibraryType = 'default' | 'alternate'; // extend as needed

interface LibraryContextProps {
    library: LibraryType;
    setLibrary: (lib: LibraryType) => void;
    strings: Record<string, string>; // holds all the strings for current library
}

const libraries: Record<LibraryType, Record<string, string>> = {
    default: {
        welcome: 'Welcome to Sweet Bean Café',
        announcements: 'Announcements',
        storefront: 'hahaha',
    },
    alternate: {
        welcome: 'Hola! Bienvenido al Café Sweet Bean',
        announcements: 'Anuncios',
        storefront: 'Tienda',
    },
};

const LibraryContext = createContext<LibraryContextProps>({
    library: 'default',
    setLibrary: () => { },
    strings: libraries.default,
});

export const useLibrary = () => useContext(LibraryContext);

export const LibraryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [library, setLibrary] = useState<LibraryType>('default');

    const value = {
        library,
        setLibrary,
        strings: libraries[library],
    };

    return <LibraryContext.Provider value={value}> {children} </LibraryContext.Provider>;
};
