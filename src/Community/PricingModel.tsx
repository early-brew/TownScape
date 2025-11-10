import React from 'react';
import { Card, Row, Col, Typography, List, Divider } from 'antd';

const { Title, Text } = Typography;

export const pricingPlans = [
    {
        name: 'Basic',
        pages: '1–3 pages',
        maintenance: 'Monthly updates',
        announcements: 'Up to 3',
        price: '$100–$150 CAD',
        features: [
            'Basic SEO optimization',
            'Responsive design',
            'Standard analytics',
        ],
    },
    {
        name: 'Standard',
        pages: '4–5 pages',
        maintenance: 'Bi-weekly updates',
        announcements: 'Up to 5',
        price: '$150–$200 CAD',
        features: [
            'SEO optimization & analytics',
            'Custom design elements',
            'Interactive features (maps, downloads)',
            'Priority support',
        ],
    },
    {
        name: 'Premium',
        pages: '6+ pages, fully custom',
        maintenance: 'Full weekly updates + support',
        announcements: 'Unlimited',
        price: '$200–$250 CAD',
        features: [
            'Advanced SEO & analytics',
            'Custom branding & design',
            'Priority support',
            'Integration with tools (Shopify, email notifications)',
            'Interactive maps & downloadable resources',
        ],
    },
];



const extraRate = {
    description: 'Additional work beyond plan scope',
    price: '$140 CAD/hour',
};

const PricingTable: React.FC = () => {
    return (
        <div style={{ padding: '40px', background: '#f7f7f7' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
                Website Pricing Plans
            </Title>

            <Row gutter={[24, 24]} justify="center">
                {pricingPlans.map((plan) => (
                    <Col xs={24} sm={12} md={8} key={plan.name}>
                        <Card
                            title={plan.name}
                            bordered
                            style={{ borderRadius: 12, textAlign: 'center' }}
                        >
                            <Text strong>Pages:</Text> {plan.pages} <br />
                            <Text strong>Maintenance:</Text> {plan.maintenance} <br />
                            <Text strong>Announcements:</Text> {plan.announcements} <br />
                            <Text strong>Price:</Text> {plan.price}

                            <Divider />

                            <List
                                size="small"
                                dataSource={plan.features}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>

            <Divider />

            <Card
                title="Extra Work / Hourly Rate"
                bordered
                style={{ borderRadius: 12, textAlign: 'center', maxWidth: 400, margin: '40px auto' }}
            >
                <Text>{extraRate.description}</Text>
                <br />
                <Text strong>{extraRate.price}</Text>
            </Card>
        </div>
    );
};

export default PricingTable;
