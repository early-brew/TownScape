import React from 'react';
import { Layout, Menu, Row, Col, Card, Button, Typography, Spin } from 'antd';
import { PhoneOutlined, EnvironmentOutlined, InstagramOutlined } from '@ant-design/icons';
import { useStore } from '../contexts/StoreContext';

const { Title, Paragraph } = Typography;

export const StoreFronBanner = () => {
    const { currentStore } = useStore();

    if (!currentStore) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <Spin size="large" tip="Loading store..." />
            </div>
        );
    }
    return (

        <div
            style={{
                position: 'relative',
                height: '40vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Background image */}
            <div
                style={{
                    background: `url(${currentStore.bannerImages?.[0] || 'https://via.placeholder.com/1200x600'}) center/cover`,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />

            {/* Dark gradient overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background:
                        'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))',
                    zIndex: 1,
                }}
            />

            {/* Foreground content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                <Title
                    level={1}
                    style={{
                        color: 'white',
                        marginBottom: 10,
                        textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                    }}
                >
                    {currentStore.customViews?.heroTitle || 'Fresh Brews & Local Bites'}
                </Title>
                <Paragraph
                    style={{
                        color: 'white',
                        fontSize: 18,
                        maxWidth: 600,
                        textShadow: '1px 1px 6px rgba(0,0,0,0.7)',
                    }}
                >
                    {currentStore.customViews?.heroText ||
                        'A cozy café in the heart of the city — where every cup tells a story.'}
                </Paragraph>
                <Button type="primary" size="large" style={{ backgroundColor: '#355834', marginTop: 20 }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#538b51ff';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#355834';
                    }}>
                    {currentStore.customViews?.heroButtonText || 'View Our Menu'}
                </Button>
            </div>
        </div>

    )
}