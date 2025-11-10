// src/types/StoreRecord.ts
export interface FeaturedItem {
    id: number;
    title: string;
    image: string;
    price: string;
}

export interface Products {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
}

export interface MenuItem {
    name: string;
    price: string;
    description: string;
    titleColor?: string
}

export interface MenuSection {
    section: string;
    icon?: string; // e.g., 'CoffeeOutlined', 'CakeOutlined'
    items: MenuItem[];
}
export interface StoreRecord {
    id: string;
    name: string;
    slug: string;
    logo?: string;
    bannerImages?: string[];
    description?: string;
    category: string;
    address?: string;
    theme?: {
        primaryColor?: string;
        accentColor?: string;
        font?: string;
    };
    features?: {
        announcements?: boolean;
        products?: boolean;
        about?: boolean;
        contact?: boolean;
    };
    templates?: {
        storefront?: string;
    };
    customViews?: {
        heroTitle?: string;
        heroText?: string;
        heroButtonText?: string;
        featuredTitle?: string;
        aboutTitle?: string;
        aboutText?: string;
        address?: string;
        phone?: string;
        hours?: string;
        featuredItems?: FeaturedItem[]; // <-- new array of featured cards
        products?: Products[];
        productTitle: string,
        menu?: MenuSection[],
        menuTitle?: string,
        aboutSection?: {
            title?: string,
            profilePic?: string,
            description: string,
            owner: { name: string, bio: string, image: string },
            team?: { name: string, image: string, role: string }[]
        }
    };

    tagline?: string;
    links?: {
        website?: string;
        instagram?: string;
        facebook?: string;
        linkedin?: string;
    };
}
