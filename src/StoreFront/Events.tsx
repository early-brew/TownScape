import React from 'react';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

const Events: React.FC = () => (
    <div style={{ padding: '60px 80px', textAlign: 'center' }}>
        <Title level={2}>Events</Title>
        <Paragraph style={{ fontSize: 16, maxWidth: 700, margin: '0 auto' }}>
            Stay tuned for our upcoming coffee tastings, art nights, and local gatherings.
        </Paragraph>
    </div>
);

export default Events;
