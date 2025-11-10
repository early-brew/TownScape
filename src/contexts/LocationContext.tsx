import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockLocations } from '../db/mockLocation';
import type { LocationRecord } from '../types/LocationRecord';

interface LocationContextType {
    locations: LocationRecord[];
    currentLocation: LocationRecord | null;
    setCurrentLocation: (loc: LocationRecord) => void;
    setLocationBySlug: (slug: string) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [locations] = useState<LocationRecord[]>(mockLocations);
    const [currentLocation, setCurrentLocation] = useState<LocationRecord | null>(mockLocations[0]);

    // Helper: set location using slug
    const setLocationBySlug = (slug: string) => {
        const found = locations.find((loc) => loc.slug === slug);
        if (found) setCurrentLocation(found);
    };

    // On first load, set default location from URL (if exists)
    useEffect(() => {
        const pathSlug = window.location.pathname.split('/')[1];
        if (pathSlug) {
            const found = locations.find((loc) => loc.slug === pathSlug);
            if (found) setCurrentLocation(found);
        }
    }, []);

    return (
        <LocationContext.Provider
            value={{
                locations,
                currentLocation,
                setCurrentLocation,
                setLocationBySlug,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};

export const useLocationContext = (): LocationContextType => {
    const ctx = useContext(LocationContext);
    if (!ctx) throw new Error('useLocationContext must be used within a LocationProvider');
    return ctx;
};
