import type { StoreRecord } from '../types/StoreRecord';
import bakery1 from '../img/BakeryBliss/bakery.jpg';
import blueberryMuffin from '../img/BakeryBliss/blueberry_muffin.jpg';
import chocolatine from '../img/BakeryBliss/chocolatine.jpg';
import sourdough from '../img/BakeryBliss/sourdough.jpg';

import carwash from '../img/ShinySuds/carwash.jpg';
import yoga from '../img/YogaRoom/yoga.jpg';
import gym from '../img/PulseFitness/gym.jpg';
import golf from '../img/GolfCourse/golf.jpg';
import giftshop from '../img/WillowLane/giftshop.jpg';
import latte from '../img/SweetBeanCafe/latte.jpg';
import jam from '../img/BakeryBliss/jam.jpg'
import itBanner from '../img/Florence/florence_and_friends.jpg'
import coffee from '../img/Florence/coffee_run.jpg'
import cabo from '../img/Florence/cabo.jpg'
import yamnuska from '../img/Florence/yamnuska_trail.jpg'
import physio from "../img/Physio/physio.jpg"

import teammate1 from '../img/DemoAboutUs/teammate1.jpg'
import owner from '../img/DemoAboutUs/owner.jpg'
import teammate2 from '../img/DemoAboutUs/teammate2.jpg'

import teammate3 from '../img/DemoAboutUs/teammate3.jpg'



export const mockStores: StoreRecord[] = [
    {
        id: '1',
        name: 'Coffee Hut',
        slug: 'coffee-hut',
        // category: 'coffee',
        category: 'food',
        bannerImages: ['https://images.unsplash.com/photo-1504754524776-8f4f37790ca0', '/coffee2.jpg'],
        description: 'The best coffee in town!',
        theme: { primaryColor: '#fef6e4', accentColor: '#8b4513' },
        templates: { storefront: 'modern' },
        links: { website: 'https://coffeehut.com', instagram: 'https://instagram.com/coffeehut' },
        customViews: {
            heroTitle: 'Fresh Brews & Local Bites',
            heroText: 'A cozy café in the heart of the city — where every cup tells a story.',
            heroButtonText: 'View Our Menu',
            featuredTitle: 'Customer Favorites',
            aboutTitle: 'Visit Us',
            aboutText: 'We’re proud to serve locally sourced coffee and baked goods made fresh every morning. Come by and say hi!',
            address: '123 Bean Street, Edmonton, AB',
            phone: '(780) 555-1234',
            hours: 'Open Daily: 7am – 6pm',
            featuredItems: [
                { id: 1, title: 'Signature Latte', image: latte, price: '$4.50' },
                { id: 2, title: 'Fresh Croissant', image: chocolatine, price: '$3.00' },
                { id: 3, title: 'Homemade Jam', image: jam, price: '$6.00' },
            ],
        },
    },
    {
        id: '2',
        name: 'Bakery Bliss',
        slug: 'bakery-bliss',
        // category: 'coffee',        
        category: 'food',
        bannerImages: [bakery1, '/bakery2.jpg'],
        description: 'Fresh pastries every day!',
        theme: { primaryColor: '#fff0f0', accentColor: '#d2691e' },
        templates: { storefront: 'classic' },
        links: { website: 'https://bakerybliss.com', instagram: 'https://instagram.com/bakerybliss' },
        customViews: {
            heroTitle: 'Delicious Treats for Everyone',
            heroText: 'Handcrafted pastries and breads baked fresh daily.',
            heroButtonText: 'See Our Menu',
            featuredTitle: 'Most Loved Products',
            aboutTitle: 'Come Visit',
            aboutText: 'Experience the aroma of freshly baked delights and join us for a perfect morning.',
            address: '456 Dough Lane, Edmonton, AB',
            phone: '(780) 555-5678',
            hours: 'Open Daily: 6am – 5pm',
            featuredItems: [
                { id: 1, title: 'Chocolate Croissant', image: chocolatine, price: '$3.50' },
                { id: 2, title: 'Sourdough Loaf', image: sourdough, price: '$5.00' },
                { id: 3, title: 'Blueberry Muffin', image: blueberryMuffin, price: '$2.50' },
            ],
        },
    },
    {
        id: '3',
        name: 'Yoga Room',
        slug: 'yoga-fun',
        // category: 'yoga',
        category: 'recreation',
        bannerImages: [yoga, '/yoga2.jpg'],
        description: 'New moves every day for body and mind balance!',
        theme: { primaryColor: '#f0fff0', accentColor: '#4caf50' },
        templates: { storefront: 'classic' },
        links: { website: 'https://yogaroom.com', instagram: 'https://instagram.com/yogaroom' },
        customViews: {
            heroTitle: 'Find Your Balance',
            heroText: 'Daily yoga classes for every skill level in a calming environment.',
            heroButtonText: 'Join a Class',
            featuredTitle: 'Popular Classes',
            aboutTitle: 'About Us',
            aboutText: 'Relax, stretch, and strengthen with our expert instructors. Namaste.',
            address: '789 Harmony Ave, Edmonton, AB',
            phone: '(780) 555-6789',
            hours: 'Mon–Sat: 7am – 8pm',
            featuredItems: [
                { id: 1, title: 'Morning Flow', image: yoga, price: '$15' },
                { id: 2, title: 'Restorative Yoga', image: yoga, price: '$12' },
                { id: 3, title: 'Evening Stretch', image: yoga, price: '$10' },
            ],
        },
    },
    {
        id: '4',
        name: 'Shiny Suds Car Wash',
        slug: 'car-wash',
        category: 'auto services',
        bannerImages: [carwash, 'https://images.unsplash.com/photo-1563720223185-11002e76d4d7'],
        description: 'Premium touchless car wash with quick service, eco-friendly soaps, and an unbeatable shine.',
        theme: { primaryColor: '#e6f7ff', accentColor: '#1890ff' },
        templates: { storefront: 'modern' },
        links: { website: 'https://shinysuds.com', instagram: 'https://instagram.com/shinysuds' },
        customViews: {
            heroTitle: 'Drive Clean, Feel Fresh',
            heroText: 'Eco-friendly, fast, and spotless — experience the perfect shine every time.',
            heroButtonText: 'Book a Wash',
            featuredTitle: 'Popular Packages',
            aboutTitle: 'Visit Us',
            aboutText: 'We use top-tier equipment and products for a brilliant finish every visit.',
            address: '101 Sparkle Rd, Edmonton, AB',
            phone: '(780) 555-9999',
            hours: 'Open Daily: 8am – 8pm',

            featuredItems: [
                { id: 1, title: 'Express Wash', image: carwash, price: '$12' },
                { id: 2, title: 'Deluxe Wash', image: carwash, price: '$18' },
                { id: 3, title: 'Ultimate Shine', image: carwash, price: '$25' },
            ],

        },
    },
    {
        id: '5',
        name: 'Willow Lane Gift Shop',
        slug: 'gift-shop',
        category: 'retail',
        bannerImages: [giftshop],
        description: 'A cozy boutique with handmade gifts, local crafts, and unique decor.',
        theme: { primaryColor: '#fffaf0', accentColor: '#c68642' },
        templates: { storefront: 'classic' },
        links: { website: 'https://willowlane.com', instagram: 'https://instagram.com/willowlane' },
        customViews: {
            heroTitle: 'Gifts with Heart',
            heroText: 'Find something special for every occasion — made with love by local artisans.',
            heroButtonText: 'Shop Now',
            featuredTitle: 'Best Sellers',
            aboutTitle: 'Visit Us',
            aboutText: 'Stop by our cozy boutique and discover gifts that tell a story.',
            aboutSection: {
                description:
                    "We started with a simple mission — to bring people together over cute accessories, coffee, and conversation. Our team is passionate about quality, community, and connection.",
                owner: {
                    name: "Alex Thompson",
                    image: owner,
                    bio: "Founder & Head Barista with 10+ years of experience crafting coffee that tells a story.",
                },
                team: [
                    {
                        name: "Jamie Lee",
                        role: "Pastry Chef",
                        image: teammate1,
                    },
                    {
                        name: "Riley Chen",
                        role: "Store Manager",
                        image: teammate2,
                    },
                    {
                        name: "Taylor Brooks",
                        role: "Customer Experience",
                        image: teammate3,
                    },
                ],
            },
            address: '222 Maple St, Edmonton, AB',
            phone: '(780) 555-2222',
            hours: 'Mon–Sat: 10am – 6pm',
            featuredItems: [
                { id: 1, title: 'Handcrafted Candle', image: giftshop, price: '$25' },
                { id: 2, title: 'Ceramic Mug', image: giftshop, price: '$18' },
                { id: 3, title: 'Greeting Card Set', image: giftshop, price: '$12' },
            ],
            productTitle: 'Products for Everyone',
            products: [
                { id: 1, category: 'Home', title: 'Handcrafted Candle', image: giftshop, price: 25 },
                { id: 2, category: 'Home', title: 'Ceramic Mug', image: giftshop, price: 18 },
                { id: 3, category: 'Gift', title: 'Greeting Card Set', image: giftshop, price: 12 },
                { id: 4, category: 'Gift', title: 'Wrapping Paper', image: giftshop, price: 3 },
                { id: 5, category: 'Books', title: 'ACOTAR series', image: giftshop, price: 55 },
                { id: 6, category: 'Books', title: '2026 Journal', image: giftshop, price: 20 },
                { id: 7, category: 'Home', title: 'Cast Iron Crockpot', image: giftshop, price: 66 },
                { id: 8, category: 'Clothing', title: 'Gloves', image: giftshop, price: 18 },
                { id: 9, category: 'Clothing', title: 'Scarf', image: giftshop, price: 12 },

            ],
            menuTitle: '🍁 Menu 🎃',
            menu: [
                {
                    section: 'Drinks',
                    items: [
                        { name: 'Espresso', price: '$3.00', description: 'Rich and bold single shot.', titleColor: '#c86824ff' },
                        { name: 'Latte', price: '$4.50', description: 'Smooth espresso with steamed milk.', titleColor: '#c86824ff' },
                    ],
                },
                {
                    section: 'Pastries',
                    items: [
                        { name: 'Croissant', price: '$3.00', description: 'Buttery and flaky.' },
                        { name: 'Blueberry Muffin', price: '$2.50', description: 'Packed with fresh blueberries.' },
                    ],
                },
            ],

        },
    },
    {
        id: '6',
        name: 'Pulse Fitness Center',
        slug: 'gym',
        // category: 'health & wellness',
        category: 'recreation',
        bannerImages: [gym],
        description: 'Modern gym with trainers, group classes, and 24/7 member access.',
        theme: { primaryColor: '#f0f2f5', accentColor: '#ff4d4f' },
        templates: { storefront: 'modern' },
        links: { website: 'https://pulsefitness.com', instagram: 'https://instagram.com/pulsefitness' },
        customViews: {
            heroTitle: 'Train Hard, Live Strong',
            heroText: 'Your fitness journey starts here — with top equipment and motivating trainers.',
            heroButtonText: 'Join Now',
            featuredTitle: 'Member Favorites',
            aboutTitle: 'About Pulse',
            aboutText: 'We’re here to help you crush your goals with classes, weights, and cardio machines.',
            address: '345 Fit Blvd, Edmonton, AB',
            phone: '(780) 555-7777',
            hours: 'Open 24/7',
            aboutSection: {
                title: 'About Pulse',
                description: 'We’re here to help you crush your goals with classes, weights, and cardio machines.',
                profilePic: '',
                owner: { name: 'Bilbo', bio: 'Lives in Hobbits Ville', image: owner },
            },
            featuredItems: [
                { id: 1, title: 'Personal Training Session', image: gym, price: '$50' },
                { id: 2, title: 'Yoga Class', image: yoga, price: '$20' },
                { id: 3, title: 'Monthly Membership', image: gym, price: '$60' },
            ],
        },
    },
    {
        id: '7',
        name: 'Green Valley Golf Club',
        slug: 'golf-course',
        category: 'recreation',
        bannerImages: [golf],
        description: '18-hole championship course with breathtaking views and a top-rated clubhouse.',
        theme: { primaryColor: '#f6ffed', accentColor: '#52c41a' },
        templates: { storefront: 'classic' },
        links: { website: 'https://greenvalley.com', instagram: 'https://instagram.com/greenvalley' },
        customViews: {
            heroTitle: 'Play the Greens',
            heroText: 'Challenge yourself on our 18-hole course surrounded by nature.',
            heroButtonText: 'Book a Tee Time',
            featuredTitle: 'Popular Packages',
            aboutTitle: 'Clubhouse & Amenities',
            aboutText: 'Relax at our clubhouse after a game — enjoy fine dining and panoramic views.',
            address: '999 Fairway Dr, Edmonton, AB',
            phone: '(780) 555-4444',
            hours: 'Daily: 6am – 8pm',
            featuredItems: [
                { id: 1, title: '18-Hole Round', image: golf, price: '$45' },
                { id: 2, title: 'Driving Range Pass', image: golf, price: '$15' },
                { id: 3, title: 'Membership Package', image: golf, price: '$1200/yr' },
            ],
        },
    },
    {
        id: '8',
        name: 'Harbor Counseling & Wellness',
        slug: 'counseling',
        // category: 'health & wellness',
        category: 'services',
        bannerImages: [
            'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
            'https://images.unsplash.com/photo-1554774853-b414d2a2b345',
        ],
        description: 'Professional counseling for individuals, couples, and families.',
        theme: { primaryColor: '#f9f0ff', accentColor: '#722ed1' },
        templates: { storefront: 'modern' },
        links: { website: 'https://harborcounseling.com', instagram: 'https://instagram.com/harborcounseling' },
        customViews: {
            heroTitle: 'Your Safe Space to Heal',
            heroText: 'Confidential, compassionate, and personalized care for your well-being.',
            heroButtonText: 'Book a Session',
            featuredTitle: 'Our Services',
            aboutTitle: 'Meet Our Team',
            aboutText: 'We’re here to support your mental health journey with empathy and expertise.',
            address: '88 Serenity Way, Edmonton, AB',
            phone: '(780) 555-8888',
            hours: 'Mon–Fri: 9am – 6pm',
            featuredItems: [
                { id: 1, title: 'Individual Counseling', image: yoga, price: '$90' },
                { id: 2, title: 'Couples Therapy', image: yoga, price: '$120' },
                { id: 3, title: 'Group Workshops', image: yoga, price: '$60' },
            ],
        },
    },
    {
        id: '10',
        name: "Align Physio & Wellness",
        slug: 'align-physio',
        category: 'services',
        bannerImages: [physio], // replace with your physio image import
        description:
            'Professional physiotherapy and wellness treatments focused on restoring mobility, reducing pain, and helping you feel your best.',
        theme: { primaryColor: '#f0fff4', accentColor: '#2f855a' },
        templates: { storefront: 'modern' },
        links: {
            website: 'https://alignphysio.ca',
            instagram: 'https://instagram.com/alignphysio',
        },
        customViews: {
            heroTitle: 'Move Freely. Live Fully.',
            heroText:
                'Recover strength, restore movement, and regain balance with personalized physiotherapy sessions.',
            heroButtonText: 'Book an Appointment',
            featuredTitle: 'Our Treatments',
            aboutTitle: 'Visit Our Clinic',
            aboutText:
                'Our team of experienced therapists offers tailored treatment plans to help you recover and stay strong.',
            address: '432 Wellness Ave, Edmonton, AB',
            phone: '(780) 555-4321',
            hours: 'Mon–Fri: 8am – 6pm',
            featuredItems: [
                { id: 1, title: 'Sports Injury Rehab', image: physio, price: '$90 / session' },
                { id: 2, title: 'Posture Correction', image: physio, price: '$75 / session' },
                { id: 3, title: 'Massage Therapy', image: physio, price: '$80 / session' },
            ],
            menuTitle: 'Physiotherapy Services',
            menu: [
                {
                    section: 'Treatments',
                    items: [
                        {
                            name: 'Manual Therapy',
                            price: '$85 / session',
                            description: 'Hands-on techniques to relieve pain and improve mobility.',
                            titleColor: '#2f855a',
                        },
                        {
                            name: 'Dry Needling',
                            price: '$90 / session',
                            description: 'Targeted muscle treatment for tension and trigger points.',
                            titleColor: '#2f855a',
                        },
                    ],
                },
                {
                    section: 'Wellness Programs',
                    items: [
                        {
                            name: 'Strength & Mobility Coaching',
                            price: '$70 / session',
                            description: 'Personalized guidance to build stability and prevent injury.',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: '11',
        name: "Flo's IT Consulting",
        slug: 'nexedge-it',
        category: 'services',
        bannerImages: [itBanner], // replace with your IT image import
        description:
            'Strategic IT consulting to optimize your technology, streamline operations, and boost business growth.',
        theme: { primaryColor: '#f7fafc', accentColor: '#3182ce' },
        templates: { storefront: 'classic' },
        links: {
            website: 'https://nexedgeit.com',
            linkedin: 'https://linkedin.com/company/nexedgeit',
        },
        customViews: {
            heroTitle: 'Empowering Businesses Through Technology',
            heroText:
                'From IT infrastructure to cloud strategy, we help organizations innovate and thrive in a digital world.',
            heroButtonText: 'Get a Free Consultation',
            featuredTitle: 'Our Expertise',
            aboutTitle: 'Partner With Us',
            aboutText:
                'We combine business insight with technical excellence to deliver solutions that truly make an impact.',
            address: '101 Innovation Blvd, Edmonton, AB',
            phone: '(780) 555-1010',
            hours: 'Mon–Fri: 9am – 5pm',
            featuredItems: [
                { id: 1, title: 'Website Design', image: cabo, price: 'Custom Quote' },
                { id: 2, title: 'Marketing Consulting', image: yamnuska, price: 'Starting at $1200' },
                { id: 3, title: 'Brand Building', image: coffee, price: 'Custom Quote' },
            ],
            menuTitle: 'Consulting Services',
            menu: [
                {
                    section: 'Strategy',
                    items: [
                        {
                            name: 'Digital Strategy',
                            price: '$120 / hr',
                            description: 'Guidance on adopting new technologies for long-term growth.',
                            titleColor: '#3182ce',
                        },
                        {
                            name: 'Marketing & Beyond',
                            price: '$110 / hr',
                            description: 'Optimize your systems for reliability, performance, and scalability.',
                            titleColor: '#3182ce',
                        },
                    ],
                },
                {
                    section: 'Technical Services',
                    items: [
                        {
                            name: 'Logos Design',
                            price: '$100 / hr',
                            description: 'Comprehensive assessment and protection from cyber threats.',
                        },
                    ],
                },
            ],
        },


    },
];

// Helper
export const getStoreBySlug = (slug: string): StoreRecord | null =>
    mockStores.find((store) => store.slug === slug) ?? null;
