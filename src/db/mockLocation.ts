import type { LocationRecord } from "../types/LocationRecord";
import GC_logo from '../img/GC/GC_logo.jpeg'
import golf from '../img/GolfCourse/golf.jpg'

// Example type


export const mockLocations: LocationRecord[] = [
    {
        id: 1,
        slug: 'edm',
        name: 'Edmonton', logo: GC_logo,
        imageBanner: ['https://images.unsplash.com/photo-1589394811721-158c5d4e4d7b?auto=format&fit=crop&w=1200&q=80'],
        announcements: [
            {
                id: 101,
                title: 'Downtown Winter Market',
                description: 'Enjoy local vendors and seasonal treats at Churchill Square every weekend.',
                date: '2025-12-10',
                image: 'https://images.unsplash.com/photo-1606761568499-6fcb1b9a8b2f?auto=format&fit=crop&w=800&q=80',
                storeSlug: 'coffee-hut'
            },
            {
                id: 102,
                title: 'New Store Opening',
                description: 'Our brand-new bakery on Whyte Ave is now open! Come for free samples all week.',
                image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80', storeSlug: 'coffee-hut'
            },
        ],
    },
    {
        id: 2,
        name: 'Calgary', slug: 'cgy', logo: GC_logo,
        imageBanner: ['https://images.unsplash.com/photo-1581581672078-5a1a5f987a5f?auto=format&fit=crop&w=1200&q=80'],
        announcements: [
            {
                id: 201,
                title: 'Coffee Festival',
                description: 'Celebrate Calgary’s coffee scene with roasters and baristas across the city.',
                date: '2025-11-05',
                image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80', storeSlug: 'coffee-hut'
            },
            {
                id: 202,
                title: 'Live Music Fridays',
                description: 'Join us at the Kensington market for live local bands every Friday evening.',
                image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', storeSlug: 'coffee-hut'
            },
        ],
    },
    {
        id: 3,
        name: 'Test Town', slug: 'gc',
        logo: GC_logo,
        imageBanner: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'],
        announcements: [
            {
                id: 301,
                title: 'Trail Cleanup Event',
                description: 'Join us at the golf course for our monthly cleanup and community BBQ.',
                date: '11/22/2025',
                category: 'community',
                image: golf, storeSlug: 'golf-course'
            },
            {
                id: 302,
                title: 'New Coffee Blend Launch',
                description: 'Try our new ethically sourced Pacific Roast, available at all coffee shops.', category: 'tastebuds',
                image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
                date: '11/25/2025', storeSlug: 'coffee-hut'
            },
        ],
    },
];
