export interface Announcement {
    id: number;
    title: string;
    description: string;
    storeSlug: string; // <-- link to specific store's slug
    date: string;
    image?: string;
    category: string
}
