import React from 'react';
import { Layout, Menu, Typography, Card, List } from 'antd';
import { CoffeeOutlined, GiftOutlined, ShopOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider, Content, Header } = Layout;
const { Title, Paragraph } = Typography;

const categories = [
    { key: 'coffee', icon: <CoffeeOutlined />, label: 'Coffee & Drinks', path: '/storefront/coffee' },
    { key: 'bakery', icon: <GiftOutlined />, label: 'Bakery', path: '/storefront/bakery' },
    { key: 'shop', icon: <ShopOutlined />, label: 'Shop Products', path: '/storefront/shop' },
];

const announcements = [
    { id: 1, title: 'Holiday Specials', content: 'Try our peppermint mocha all December!' },
    { id: 2, title: 'Extended Hours', content: 'We’re now open until 8PM on weekends.' },
    { id: 3, title: 'New Pastries', content: 'Introducing our almond croissant and berry tart.' },
];

const MainPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'row' }}>
            {/* Sidebar */}
            <Sider
                width={240}
                breakpoint="lg"
                collapsedWidth="0"
                style={{
                    backgroundColor: '#001529',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        height: 64,
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        lineHeight: '64px',
                    }}
                >
                    Sweet Bean Café
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    items={categories}
                    style={{ flex: 1 }}
                    onClick={(e) => {
                        const selected = categories.find((c) => c.key === e.key);
                        if (selected) navigate(selected.path);
                    }}
                />
            </Sider>

            {/* Main content area */}
            <Layout
                style={{
                    flex: 1,
                    backgroundColor: '#fafafa',
                    overflow: 'auto',
                }}
            >
                <Header
                    style={{
                        background: '#fff',
                        padding: '0 32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                >
                    <Title level={3} style={{ margin: 0 }}>
                        Announcements
                    </Title>
                </Header>

                <Content
                    style={{
                        padding: '32px 48px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                        maxWidth: 1200,
                        margin: '0 auto',
                        width: '100%',
                    }}
                >
                    <List
                        dataSource={announcements}
                        renderItem={(item) => (
                            <Card
                                title={item.title}
                                style={{
                                    background: '#fff',
                                    borderRadius: 12,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                }}
                            >
                                <Paragraph>{item.content}</Paragraph>
                            </Card>
                        )}
                    />
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainPage;
