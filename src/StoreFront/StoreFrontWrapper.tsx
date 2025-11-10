import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useStore } from '../contexts/StoreContext';
import { getStoreBySlug } from '../db/mockStores';
import Storefront from './StoreFront';
import { useLocationContext } from '../contexts/LocationContext';

const StorefrontWrapper: React.FC = () => {
    const { locationSlug, storeSlug } = useParams<{ locationSlug: string; storeSlug: string }>();
    const { setCurrentStore } = useStore();
    const { setCurrentLocation, locations } = useLocationContext();

    useEffect(() => {
        // Set the location based on slug
        if (locationSlug && locations.length > 0) {
            const loc = locations.find(l => l.slug === locationSlug);
            if (loc) setCurrentLocation(loc);
        }

        // Set the store based on storeSlug
        if (storeSlug) {
            const store = getStoreBySlug(storeSlug);
            setCurrentStore(store);
        }
    }, [locationSlug, storeSlug, locations, setCurrentLocation, setCurrentStore]);

    return <div><Storefront />
        {/* <Outlet /> */}
    </div>;
};

export default StorefrontWrapper;
