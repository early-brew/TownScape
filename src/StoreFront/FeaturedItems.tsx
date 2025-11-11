import { Layout, Row, Col, Card, Typography } from 'antd';
import { useStore } from '../contexts/StoreContext';

const { Content } = Layout;
const { Title } = Typography;

export const FeaturedItems = ({ screens }: { screens: any }) => {
    const { currentStore } = useStore();

    return (
        <Content
            style={{
                padding: screens.xs ? '20px 16px' : '20px 80px',
                background: '#fff',
            }}
        >
            <Title
                level={2}
                style={{
                    textAlign: 'center',
                    marginBottom: 40,
                    fontSize: screens.xs ? 20 : 28,
                }}
            >
                {currentStore?.customViews?.featuredTitle || 'Customer Favorites'}
            </Title>

            <Row gutter={[24, 24]} justify="center">
                {currentStore?.customViews?.featuredItems?.map((item) => (
                    <Col xs={24} sm={12} md={8} key={item.id}>
                        <Card
                            hoverable
                            cover={
                                <img
                                    alt={item.title}
                                    src={item.image}
                                    style={{
                                        height: screens.xs ? '25vh' : '25vh',
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '8px 8px 0 0',
                                    }}
                                />
                            }
                            style={{ borderRadius: 8 }}
                        >
                            <Card.Meta
                                title={<span style={{ fontSize: screens.xs ? 16 : 18 }}>{item.title}</span>}
                                description={<span style={{ fontWeight: 'bold' }}>{item.price}</span>}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Content>
    );
};
