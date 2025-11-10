
import React from 'react';
import { Row, Col, Card, Typography, Avatar, Divider } from 'antd';
import { useStore } from '../contexts/StoreContext';
import unknown_person from "../img/DemoAboutUs/Unknown_person.jpg"

const { Title, Paragraph } = Typography;

const AboutUs = ({ screens }: { screens: string }) => {
    const { currentStore } = useStore();

    // Example fallback data if store doesn't have custom about info
    const about = currentStore?.customViews?.aboutSection || {
        description:
            "We started with a simple mission — to bring people together over great coffee and conversation. Our team is passionate about quality, community, and connection.",
        owner: {
            name: "Alex Thompson",
            image: unknown_person,
            bio: "Founder & Head of Operations with 10+ years of experience.",
        },

    };

    return (
        <div style={{ padding: '15px 30px', background: '#f9f9f9' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
                About Us
            </Title>

            {/* Top section: Owner + Description */}
            <Row gutter={[32, 32]} align="middle" justify="center">
                <Col xs={24} md={10}>
                    <Card
                        bordered={false}
                        style={{
                            textAlign: 'center',
                            borderRadius: 12,
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                        }}
                    >
                        <Avatar
                            src={about.owner?.image}
                            size={160}
                            style={{
                                marginBottom: 16,
                                border: '4px solid #f0f0f0',
                            }}
                        />
                        <Title level={4}>{about.owner.name}</Title>
                        <Paragraph type="secondary" style={{ fontStyle: 'italic' }}>
                            {about.owner.bio}
                        </Paragraph>
                    </Card>
                </Col>

                <Col xs={24} md={12}>
                    <Paragraph style={{ fontSize: 16, lineHeight: 1.7, textAlign: 'left' }}>
                        {about.description}
                    </Paragraph>
                </Col>
            </Row>



            {/* Team members */}
            {about?.team && <Row gutter={[24, 24]} justify="center">
                <Divider style={{ margin: '60px 0 40px' }}>Our Team</Divider>
                {about.team.map((member, idx) => (
                    <Col xs={24} sm={12} md={8} key={idx}>
                        <Card
                            hoverable
                            style={{
                                textAlign: 'center',
                                borderRadius: 12,
                                boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                            }}
                        >
                            <Avatar
                                src={member.image}
                                size={120}
                                style={{
                                    marginBottom: 16,
                                    border: '4px solid #f0f0f0',
                                }}
                            />
                            <Title level={5}>{member.name}</Title>
                            <Paragraph type="secondary">{member.role}</Paragraph>
                        </Card>
                    </Col>
                ))}
            </Row>}

        </div>
    );
};

export default AboutUs;

