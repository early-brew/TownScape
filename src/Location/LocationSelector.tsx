// components/LocationSelector.tsx
import { Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocationContext } from '../contexts/LocationContext';
import { AimOutlined } from '@ant-design/icons';

export const LocationSelector = () => {
    const { locations, currentLocation, setLocationBySlug } = useLocationContext();
    const navigate = useNavigate();
    const params = useParams<{ locationSlug?: string }>();

    // If user visits directly /:locationSlug, update context
    useEffect(() => {
        if (params.locationSlug) setLocationBySlug(params.locationSlug);
    }, [params.locationSlug]);

    const handleChange = (value: string) => {
        setLocationBySlug(value);
        navigate(`/${value}`);
    };

    return (
        <div>
            <AimOutlined />
            <span style={{ paddingRight: '5px' }}>Search Location </span>
            <Select
                size="small"
                value={currentLocation?.slug}
                style={{ width: 180 }}
                onChange={handleChange}
                options={locations.map(loc => ({
                    value: loc.slug,
                    label: loc.name,
                }))}
            /></div>
    );
};
