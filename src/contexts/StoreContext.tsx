import React, { createContext, useContext, useState } from 'react';
import type { StoreRecord } from '/Users/florencefreund/Documents/my-biz-direct/src/types/StoreRecord.ts'

interface StoreContextType {
    currentStore: StoreRecord | null;
    setCurrentStore: (store: StoreRecord) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const useStore = () => {
    const ctx = useContext(StoreContext);
    if (!ctx) throw new Error('useStore must be used within StoreProvider');
    return ctx;
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentStore, setCurrentStore] = useState<StoreRecord | null>(null);

    return (
        <StoreContext.Provider value={{ currentStore, setCurrentStore }}>
            {children}
        </StoreContext.Provider>
    );
};
