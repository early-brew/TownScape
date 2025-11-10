import React, { useState, useMemo } from 'react';
import { Layout, Row, Col, Card, Typography, Input, Select, Space } from 'antd';
import { useStore } from '../contexts/StoreContext';

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

export const Products = ({ screens }: { screens: any }) => {
    const { currentStore } = useStore();
    const products = currentStore?.customViews?.products || [];

    // 🔍 Local state for filters
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOption, setSortOption] = useState('alphabetical');

    // 🗂️ Generate unique categories
    const categories = useMemo(() => {
        const unique = Array.from(new Set(products.map((p) => p.category)));
        return ['all', ...unique];
    }, [products]);

    // ⚙️ Filter + Sort logic
    const filteredProducts = useMemo(() => {
        let filtered = products.filter((p) =>
            p.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (selectedCategory !== 'all') {
            filtered = filtered.filter((p) => p.category === selectedCategory);
        }

        if (sortOption === 'alphabetical') {
            filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === 'price-low') {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-high') {
            filtered = filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    }, [products, searchTerm, selectedCategory, sortOption]);

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
                {currentStore?.customViews?.productTitle || 'Our Products'}
            </Title>

            {/* 🔍 Search + Filter + Sort Controls */}
            <Space
                direction={screens.xs ? 'vertical' : 'horizontal'}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: 30,
                    width: '100%',
                }}
                size="middle"
            >
                <Search
                    placeholder="Search by name"
                    allowClear
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: screens.xs ? '100%' : 250 }}
                />

                <Select
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                    style={{ width: screens.xs ? '100%' : 200 }}
                >
                    {categories.map((cat) => (
                        <Option key={cat} value={cat}>
                            {cat === 'all' ? 'All Categories' : cat}
                        </Option>
                    ))}
                </Select>

                <Select
                    value={sortOption}
                    onChange={setSortOption}
                    style={{ width: screens.xs ? '100%' : 200 }}
                >
                    <Option value="alphabetical">Sort: A → Z</Option>
                    <Option value="price-low">Price: Low → High</Option>
                    <Option value="price-high">Price: High → Low</Option>
                </Select>
            </Space>

            {/* 🛍️ Product Grid */}
            <Row gutter={[24, 24]} justify="center">
                {filteredProducts.map((item) => (
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
                                title={
                                    <span style={{ fontSize: screens.xs ? 16 : 18 }}>
                                        {item.title}
                                    </span>
                                }
                                description={
                                    <span style={{ fontWeight: 'bold' }}>
                                        ${item.price.toFixed(2)}
                                    </span>
                                }
                            />
                        </Card>
                    </Col>
                ))}

                {filteredProducts.length === 0 && (
                    <Col span={24} style={{ textAlign: 'center', marginTop: 40 }}>
                        <Typography.Text type="secondary">
                            No products found.
                        </Typography.Text>
                    </Col>
                )}
            </Row>
        </Content>
    );
};
