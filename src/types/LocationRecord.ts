import type { Announcement } from "./Announcement";

export interface LocationRecord {
    id: number;
    name: string; // e.g., city or region
    slug: string; // e.g., "edmonton-ab"
}

export interface LocationEvent {
    id: number;
    title: string;
    description: string;
    date?: string;
    image?: string;
}

export interface LocationRecord {
    id: number;
    name: string;
    image?: string;
    imageBanner: string[];
    slug: string;
    announcements: Announcement[];
    logo: string;
}