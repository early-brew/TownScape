import React from 'react';
import { List, Typography, Divider, Layout } from 'antd';
import { useStore } from '../contexts/StoreContext';
import type { MenuItem } from '../types/StoreRecord';

const { Title, Text, Paragraph } = Typography;
const { Content, } = Layout;



const StoreMenu = ({ screens }: { screens: any }) => {
    const { currentStore } = useStore();
    if (!currentStore?.customViews?.menu) return null;

    // Flatten menu items
    const flatMenu: MenuItem[] = currentStore.customViews.menu.flatMap((section) => section.items);
    const contentPadding = screens.xs ? '10px 2px' : '20px 80px'
    return (
        <Content style={{ padding: contentPadding, background: '#fff' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 12 }}>
                {currentStore.customViews?.menuTitle || "Menu"}
            </Title>

            <List
                itemLayout="vertical"
                dataSource={flatMenu}
                renderItem={(item) => (
                    <List.Item style={{ padding: '12px 16px', borderBottom: '1px solid #f0f0f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <Text strong style={{ fontSize: 18, color: item?.titleColor || 'black' }}>
                                {item.name}
                            </Text>
                            <Text style={{ fontSize: 16 }}>{item.price}</Text>
                        </div>
                        {item.description && (
                            <Paragraph type="secondary" style={{ margin: '4px 0 0 0', textAlign: 'left', justifyContent: 'left' }}>
                                {item.description}
                            </Paragraph>
                        )}
                    </List.Item>
                )}
            />
        </Content>

    );
};

export default StoreMenu;
