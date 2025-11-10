// components/Announcements.tsx
import { useState, useMemo } from 'react';
import { Carousel, Card, Typography, Empty, Button, Space } from 'antd';
import { useLocationContext } from '../contexts/LocationContext';
import { useNavigate } from 'react-router-dom';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const Announcements = () => {
    const { currentLocation } = useLocationContext();
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

    if (!currentLocation) return <Empty description="No location selected" />;

    const announcements = currentLocation.announcements || [];

    // Extract unique categories
    const categories = Array.from(
        new Set(announcements.map((a) => a.category).filter(Boolean))
    );

    // Filter and sort announcements
    const sortedAnnouncements = useMemo(() => {
        let filtered = [...announcements];
        if (selectedCategory) {
            filtered = filtered.filter((a) => a.category === selectedCategory);
        }

        filtered.sort((a, b) => {
            const dateA = new Date(a.date || 0).getTime();
            const dateB = new Date(b.date || 0).getTime();
            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });

        return filtered;
    }, [announcements, selectedCategory, sortOrder]);

    return (
        <div >
            {/* Header */}
            <Title level={3} style={{ marginBottom: 16 }}>
                Peaks & Chatter
            </Title>

            {/* Category + Sort Toolbar */}
            <div
                style={{
                    backgroundColor: '#14281d',
                    padding: '12px 16px',
                    borderRadius: 8,
                    marginBottom: 24,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 8,
                }}
            >
                {/* Category Buttons */}
                <Space wrap>
                    <Button
                        type={!selectedCategory ? 'primary' : 'default'}
                        onClick={() => setSelectedCategory(null)}
                        style={{ backgroundColor: !selectedCategory ? '#355834' : undefined }}
                    >
                        All
                    </Button>
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            type={selectedCategory === cat ? 'primary' : 'default'}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                backgroundColor:
                                    selectedCategory === cat ? '#355834' : undefined,
                            }}
                        >
                            {cat}
                        </Button>
                    ))}
                </Space>

                {/* Sort Button */}
                <Button
                    type="default"
                    icon={
                        sortOrder === 'newest' ? (
                            <ArrowDownOutlined />
                        ) : (
                            <ArrowUpOutlined />
                        )
                    }
                    onClick={() =>
                        setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')
                    }
                    style={{
                        color: 'white',
                        borderColor: 'white',
                        background: '#355834',

                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.color = '#355834';
                        e.currentTarget.style.borderColor = '##355834';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#355834';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.borderColor = 'white';
                    }}
                >
                    Sort by {sortOrder === 'newest' ? 'Later' : 'Earliest'}
                </Button>
            </div>

            {/* Announcement Cards */}
            {sortedAnnouncements.length === 0 ? (
                <Empty description="No announcements found" />
            ) : (
                sortedAnnouncements.map((a) => (
                    <Card
                        key={a.id}
                        hoverable
                        style={{
                            marginBottom: 16,
                            borderRadius: 8,
                            overflow: 'hidden',
                        }}
                        onClick={() => {
                            navigate(`/${currentLocation.slug}/storefront/${a.storeSlug}`);
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={a.image || 'https://via.placeholder.com/120x120'}
                                alt={a.title}
                                style={{
                                    width: 120,
                                    height: 120,
                                    objectFit: 'cover',
                                    borderRadius: 8,
                                    marginRight: 16,
                                }}
                            />
                            <div style={{ flex: 1 }}>
                                <Title level={4} style={{ marginBottom: 4 }}>
                                    {a.title}
                                </Title>
                                <Paragraph type="secondary" style={{ margin: 0, fontSize: '16px' }}>
                                    {a.description}
                                </Paragraph>
                                {a.date && (
                                    <Paragraph style={{ margin: 0, marginTop: 4, color: '#1890ff' }}>
                                        {new Date(a.date).toLocaleDateString()}
                                    </Paragraph>
                                )}
                            </div>
                        </div>
                    </Card>
                ))
            )}
        </div>
    );
};
