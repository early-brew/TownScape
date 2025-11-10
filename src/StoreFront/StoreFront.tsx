import React, { useEffect, useState } from 'react';
import { Layout, Menu, Button, Typography, Spin, Drawer, Grid } from 'antd';
import {
    PhoneOutlined,
    EnvironmentOutlined,
    InstagramOutlined,
    MenuOutlined,
} from '@ant-design/icons';
import { useStore } from '../contexts/StoreContext';
import { FeaturedItems } from './FeaturedItems';
import StoreMenu from './StoreMenu';
import { StoreFronBanner } from './StoreFrontBanner';
import { useLocation, useNavigate, useParams, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Events from './Events';
import { Products } from './Products';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Storefront: React.FC = () => {
    const { currentStore } = useStore();
    const navigate = useNavigate();
    const location = useLocation();
    const { locationSlug, storeSlug } = useParams();
    const screens = useBreakpoint();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const basePath = `/${locationSlug}/storefront/${storeSlug}`;

    let menuItems;


    if (currentStore?.customViews?.products) {
        menuItems =
            [{ key: 'home', label: 'Home', path: `${basePath}` },
            { key: 'products', label: 'Products', path: `${basePath}/products` },
            { key: 'about', label: 'About Us', path: `${basePath}/about` },
            { key: 'events', label: 'Events', path: `${basePath}/events` },]
    }
    else {
        menuItems = [{ key: 'home', label: 'Home', path: `${basePath}` },
        { key: 'about', label: 'About Us', path: `${basePath}/about` },
        { key: 'events', label: 'Events', path: `${basePath}/events` },]
    }

    // Determine active tab
    const { pathname } = location;
    const activeKey = pathname.endsWith('/about')
        ? 'about'
        : pathname.endsWith('/events')
            ? 'events'
            : pathname.endsWith('/products') ? 'products' :
                'home';

    // Dynamic page title
    useEffect(() => {
        if (!currentStore) return;
        const sectionTitle =
            activeKey === 'about'
                ? 'About Us'
                : activeKey === 'events'
                    ? 'Events' : activeKey === 'products' ? 'Products'
                        : 'Home';
        document.title = `${currentStore.name} | ${sectionTitle}`;
    }, [activeKey, currentStore]);

    if (!currentStore) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                }}
            >
                <Spin size="large" tip="Loading store..." />
            </div>
        );
    }

    return (
        <Layout>
            {/* Header */}
            <Header
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: '#14281d',
                    padding: screens.xs ? '0 12px' : '0 24px',
                }}
            >
                <div style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
                    {currentStore.name}
                </div>

                {/* Desktop Menu */}
                {!screens.xs && (
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[activeKey]}
                        style={{
                            background: 'transparent',
                            flex: 1,
                            justifyContent: 'flex-end',
                            borderBottom: 'none',
                        }}
                    >
                        {menuItems.map((item) => (
                            <Menu.Item
                                key={item.key}
                                onClick={() => navigate(item.path)}
                                style={{
                                    backgroundColor: activeKey === item.key ? '#355834' : 'transparent', // 👈 your custom color
                                    borderRadius: 6,
                                    marginInline: 4,
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {item.label}
                            </Menu.Item>
                        ))}
                    </Menu>
                )}


                {/* Mobile Menu Button */}
                {screens.xs && (
                    <Button
                        type="text"
                        icon={<MenuOutlined style={{ color: 'white', fontSize: 20 }} />}
                        onClick={() => setDrawerVisible(true)}
                    />
                )}
            </Header>

            {/* Mobile Drawer */}
            <Drawer
                title={currentStore.name}
                placement="right"
                closable
                onClose={() => setDrawerVisible(false)}
                open={drawerVisible}
            >
                <Menu
                    mode="vertical"
                    selectedKeys={[activeKey]}
                    items={menuItems}
                    onClick={(e) => {
                        const item = menuItems.find((i) => i.key === e.key);
                        if (item?.path) navigate(item.path);
                        setDrawerVisible(false);
                    }}
                />
            </Drawer>

            <StoreFronBanner />

            {/* Content */}
            <Content
                style={{
                    background: '#f7f7f7',
                    padding: screens.xs ? '40px 16px' : '30px 40px',
                    textAlign: 'center',
                }}
            >
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {currentStore.customViews?.menu && <StoreMenu screens={screens} />}
                                {currentStore.customViews?.featuredItems && <FeaturedItems screens={screens} />}
                                {/* {currentStore.customViews?.featuredItems && <FeaturedItems screens={screens} />} */}

                                <Title level={2} style={{ paddingTop: '12px' }}>
                                    {currentStore.customViews?.aboutTitle || 'Visit Us'}
                                </Title>
                                <Paragraph
                                    style={{
                                        fontSize: 16,
                                        maxWidth: 600,
                                        margin: '0 auto',
                                        alignContent: 'center',
                                        textAlign: screens.xs ? 'center' : 'center',
                                    }}
                                >
                                    {currentStore.customViews?.aboutText ||
                                        'We’re proud to serve locally sourced coffee and baked goods made fresh every morning. Come by and say hi — your table’s waiting.'}
                                </Paragraph>

                                <div style={{ marginTop: 30 }}>
                                    <Paragraph>
                                        <EnvironmentOutlined style={{ marginRight: 8 }} />
                                        {currentStore.customViews?.address ||
                                            '123 Bean Street, Edmonton, AB'}
                                    </Paragraph>
                                    <Paragraph>
                                        <PhoneOutlined style={{ marginRight: 8 }} />
                                        {currentStore.customViews?.phone || '(780) 555-1234'}
                                    </Paragraph>
                                    {currentStore.links?.instagram && (
                                        <Button
                                            icon={<InstagramOutlined />}
                                            type="link"
                                            href={currentStore.links.instagram}
                                            target="_blank"
                                        >
                                            Follow us on Instagram
                                        </Button>
                                    )}
                                </div>
                            </>
                        }
                    />
                    <Route path="/about" element={<AboutUs screens={screens} />} />
                    <Route path="/events" element={<Events screens={screens} />} />
                    <Route path="/products" element={<Products screens={screens} />} />

                </Routes>
            </Content>

            {/* Footer */}
            <Footer style={{ textAlign: 'center', background: '#355834' }}>
                <Paragraph style={{ margin: 0, color: 'white' }}>
                    {currentStore.customViews?.hours || 'Open Daily: 7am – 6pm'}
                </Paragraph>
                <Paragraph style={{ margin: 0, color: 'grey' }}>
                    ©{new Date().getFullYear()} {currentStore.name}
                </Paragraph>
            </Footer>
        </Layout>
    );
};

export default Storefront;
