import React from 'react';
import { Grid, Button, Carousel } from 'antd';
const { useBreakpoint } = Grid;

interface BannerTabsProps {
    tabs: string[];
    activeTab: string;
    handleTabClick: (tab: string) => void;
    currentLocation: { name: string; imageBanner: string[] };
}

export const BannerTabs: React.FC<BannerTabsProps> = ({
    tabs,
    activeTab,
    handleTabClick,
    currentLocation,
}) => {
    const screens = useBreakpoint();

    return (
        <div style={{ marginBottom: 24, position: 'relative' }}>
            {/* Buttons above carousel on small screens */}
            {screens.xs && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 12,
                        marginBottom: 12,
                        flexWrap: 'wrap', // <-- allows buttons to wrap to new line
                    }}
                >
                    {tabs.map((tab) => (
                        <Button
                            key={tab}
                            type={activeTab === tab ? 'primary' : 'default'}
                            onClick={() => handleTabClick(tab)}
                            style={{ marginBottom: 8 }} // optional: spacing between wrapped lines
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Button>
                    ))}
                </div>
            )}

            {/* Carousel */}
            <Carousel autoplay style={{ borderRadius: 8, overflow: 'hidden', height: 200 }}>
                {currentLocation.imageBanner.map((img, idx) => (
                    <div key={idx}>
                        <img
                            src={img}
                            alt={`${currentLocation.name} banner ${idx + 1}`}
                            style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 8 }}
                        />
                    </div>
                ))}
            </Carousel>

            {/* Buttons overlay on larger screens */}
            {!screens.xs && (
                <div
                    style={{
                        position: 'absolute',
                        top: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 12,
                        zIndex: 10,
                    }}
                >
                    {tabs.map((tab) => (
                        <Button
                            key={tab}
                            type={activeTab === tab ? 'primary' : 'default'}
                            onClick={() => handleTabClick(tab)}
                            style={{
                                backgroundColor: activeTab === tab ? '#14281d' : undefined, // custom primary color
                                borderColor: activeTab === tab ? '#14281d' : undefined,
                                color: activeTab === tab ? 'white' : undefined,
                            }}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Button>
                    ))}
                </div>
            )}
        </div>
    );
};
