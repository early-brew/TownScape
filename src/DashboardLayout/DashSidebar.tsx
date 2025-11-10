import React, { useState } from 'react';
import { Menu, Input, Drawer, Grid } from 'antd';
import {
    ShopOutlined,
    CoffeeOutlined,
    GiftOutlined,
    HomeOutlined, PictureOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { mockStores } from '../db/mockStores';
import { useLocationContext } from '../contexts/LocationContext';
import type { MenuProps } from 'antd';

const { useBreakpoint } = Grid;
const { Search } = Input;

interface SidebarProps {
    drawerVisible: boolean;
    setDrawerVisible: (visible: boolean) => void;
}

const iconMap: Record<string, React.ReactNode> = {
    coffee: <CoffeeOutlined />,
    bakery: <GiftOutlined />,
    shop: <ShopOutlined />,
};

type MenuItem = Required<MenuProps>['items'][number];

const DashSidebar: React.FC<SidebarProps> = ({
    drawerVisible,
    setDrawerVisible,
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const screens = useBreakpoint();
    const { currentLocation } = useLocationContext();
    const [searchText, setSearchText] = useState('');

    // Group stores by category
    const storesByCategory = mockStores.reduce((acc, store) => {
        if (!acc[store.category]) acc[store.category] = [];
        acc[store.category].push(store);
        return acc;
    }, {} as Record<string, typeof mockStores>);

    // Sort categories and stores alphabetically
    const sortedStoresByCategory = Object.fromEntries(
        Object.entries(storesByCategory)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([category, stores]) => [
                category,
                stores.sort((a, b) => a.name.localeCompare(b.name)),
            ])
    );

    // Filter stores by search text
    const filteredStoresByCategory = Object.fromEntries(
        Object.entries(sortedStoresByCategory)
            .map(([category, stores]) => [
                category,
                stores.filter((s) =>
                    s.name.toLowerCase().includes(searchText.toLowerCase())
                ),
            ])
            .filter(([_, stores]) => stores.length > 0)
    );

    // Build menu items
    const menuItems: MenuItem[] = [
        {
            key: 'announcements',
            icon: <HomeOutlined />,
            label: 'Community',
            // “Peaks & Chatter.”

            // “Mountain Whispers.”

            // “Talk’s on the Rise.”

            // “Edson’s High Points.”

            // “Summit & Spill.”

            // “Gossip on the Uphill.”

            // “Trail Talk.”
            // “Mountains, Mugs & Musings.”
        },
        ...Object.entries(filteredStoresByCategory).map(
            ([categoryKey, stores]) => ({
                key: categoryKey,
                icon: iconMap[categoryKey] || <ShopOutlined />,
                label: categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1),
                children: stores.map((store) => ({
                    key: store.slug,
                    label: store.name,
                })),
            })
        ),
    ];

    // Determine selected key
    const pathParts = location.pathname.split('/').filter(Boolean);
    let selectedKey =
        pathParts.length === 0 ? 'announcements' : pathParts[pathParts.length - 1];

    // Handle navigation
    const handleMenuClick = (key: string) => {
        setDrawerVisible(false);
        const locationPrefix = currentLocation?.slug
            ? `/${currentLocation.slug}`
            : '';
        if (key === 'announcements') navigate(`${locationPrefix}`);
        else navigate(`${locationPrefix}/storefront/${key}`);
    };

    // Sidebar layout
    const sidebarContent = (
        <div
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#001529',
            }}
        >
            <div
                style={{
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    borderBottom: '1px solid #0b1a2b',
                }}
            >
                Businesses
            </div>

            <div style={{ padding: '12px' }}>
                <Search
                    placeholder="Search stores"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    allowClear
                    style={{
                        width: '100%',
                        backgroundColor: '#0b1a2b',
                        color: 'white',
                        border: 'none',
                    }}
                    inputStyle={{ color: 'white' }}
                />
            </div>

            <div
                style={{
                    flex: 1,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    backgroundColor: '#001529',
                }}
            >
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    defaultOpenKeys={Object.keys(sortedStoresByCategory)}
                    items={menuItems}
                    onClick={(e) => handleMenuClick(e.key)}
                    style={{
                        backgroundColor: '#001529',
                        borderRight: 0,
                    }}
                />
            </div>
        </div>
    );

    // Desktop sidebar
    if (screens.md) {
        // Adjust width dynamically based on breakpoints
        const sidebarWidth = screens.xl ? 280 : screens.lg ? 240 : 200;

        return (
            <div
                style={{
                    width: sidebarWidth,
                    position: 'fixed',
                    height: '100vh',
                    backgroundColor: '#001529',
                    zIndex: 1000,
                    boxShadow: '2px 0 6px rgba(0,0,0,0.2)',
                    transition: 'width 0.3s ease',
                }}
            >
                {sidebarContent}
            </div>
        );
    }


    // Mobile drawer
    return (
        <Drawer
            placement="left"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            style={{ backgroundColor: 'white' }}
            bodyStyle={{
                padding: 0,
                backgroundColor: '#001529',
                color: 'white',
            }}
            // 🔹 Remove default header
            title={null}
            headerStyle={{ display: 'none' }} // Hide AntD default header
        >
            {/* 🔹 Custom header */}
            <div
                style={{
                    backgroundColor: '#001529',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderBottom: '1px solid #0b1a2b',
                    height: 48,
                }}
            >
                <span
                    style={{
                        fontSize: 16,
                        fontWeight: 600, alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        // fontSize: 20,
                    }}
                >
                    View Services
                </span>
                <button
                    onClick={() => setDrawerVisible(false)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: 20,
                        cursor: 'pointer',
                        lineHeight: 1,
                    }}
                >
                    ×
                </button>
            </div>

            {sidebarContent}
        </Drawer>

    );


};

export default DashSidebar;
