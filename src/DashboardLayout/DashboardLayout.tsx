import React, { ReactNode, useState } from 'react';
import { Layout, Button, Grid } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import DashSidebar from './DashSidebar';
import { useLocationContext } from '../contexts/LocationContext';

const { Header, Content } = Layout;
const { useBreakpoint } = Grid;

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const screens = useBreakpoint();
    const [drawerVisible, setDrawerVisible] = useState(false);
    const { currentLocation } = useLocationContext();

    // 🔹 Same width logic as in DashSidebar
    const sidebarWidth = screens.xl ? 280 : screens.lg ? 240 : 200;

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <DashSidebar
                drawerVisible={drawerVisible}
                setDrawerVisible={setDrawerVisible}
            />

            {/* 🔹 Match marginLeft to sidebarWidth dynamically */}
            <Layout
                style={{
                    marginLeft: screens.md ? sidebarWidth : 0,
                    transition: 'margin-left 0.3s ease',
                }}
            >
                <Header
                    style={{
                        background: '#fff',
                        padding: '0 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        position: 'sticky',
                        top: 0,
                        zIndex: 900,
                    }}
                >
                    {!screens.md && (
                        <Button
                            icon={<MenuOutlined />}
                            onClick={() => setDrawerVisible(true)}
                            type="text"
                        />
                    )}

                    {/* 🔹 Logo + Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        {currentLocation?.logo && (
                            <img
                                src={currentLocation.logo}
                                alt="Logo"
                                style={{ height: 32, width: 'auto' }}
                            />
                        )}
                        <span
                            style={{
                                fontSize: 25,
                                fontWeight: 600,
                                background:
                                    'linear-gradient(90deg, #0c356e 0%, #245dad 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {currentLocation?.name}
                        </span>
                    </div>
                </Header>

                <Content style={{ padding: '12px 24px', marginTop: 16 }}>
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: 12,
                            padding: 24,
                            minHeight: '70vh',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        }}
                    >
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
