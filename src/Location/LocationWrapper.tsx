// components/LocationWrapper.tsx
import React, { useState, useEffect } from 'react';
import { Button, Carousel, Grid } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { Announcements } from '../Announcements/Announcements';
import { Community } from '../Community/Community';
import { Profiles } from '../Profiles/Profiles';
import { MapView } from '../Map/Map';
import { useLocationContext } from '../contexts/LocationContext';
import { BannerTabs } from './BannerTabs';
import { Home } from '../HomePage/Home';
const { useBreakpoint } = Grid;





export const LocationWrapper: React.FC = () => {
    const navigate = useNavigate();
    const { currentLocation } = useLocationContext(); const breakpoints = useBreakpoint();
    const tabs = ['home', 'announcements', 'community', 'map'] as const;
    type Tab = typeof tabs[number];
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<Tab>('announcements');

    // Sync tab with URL on initial load or URL change
    useEffect(() => {
        const parts = location.pathname.split('/').filter(Boolean);
        const lastPart = parts[parts.length - 1];
        if (tabs.includes(lastPart as Tab)) {
            setActiveTab(lastPart as Tab);
        } else {
            // default to announcements if URL doesn't match
            setActiveTab('announcements');
        }
    }, [location.pathname]);

    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab);
        // update URL without reloading page
        const parts = location.pathname.split('/').filter(Boolean);
        // assume the last part is current tab or store slug
        const newPath = [...parts.slice(0, parts.length - 1), tab].join('/');
        navigate(`/${newPath}`);
    };

    // Render content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'announcements':
                return <Announcements />;
            case 'community':
                return <Community />;
            case 'profiles':
                return <Profiles />;
            case 'map':
                return <MapView />;

            default:
                return <Home />;
        }
    };

    return (
        <div style={{ padding: '16px' }}>
            {/* Tab buttons centered */}
            {/* <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24, gap: 12 }}>
                {tabs.map((tab) => (
                    <Button
                        key={tab}
                        type={activeTab === tab ? 'primary' : 'default'}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </Button>
                ))}
            </div>
            <Carousel autoplay style={{ marginBottom: 24, borderRadius: 8, overflow: 'hidden' }}>
                {currentLocation?.imageBanner.map((img, idx) => (
                    <div key={idx}>
                        <img
                            src={img}
                            alt={`${currentLocation.name} banner ${idx + 1}`}
                            style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 8 }}
                        />
                    </div>
                ))}
                    
            </Carousel> */}



            {/* Content */}
            <BannerTabs
                tabs={tabs}
                activeTab={activeTab}
                handleTabClick={setActiveTab}
                currentLocation={currentLocation}
            />

            {renderContent()}
        </div>
    );
};
