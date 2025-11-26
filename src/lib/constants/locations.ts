import type { LocationCardProps } from "../../types/locations";

export const LOCATIONS: LocationCardProps[] = [
    {
        image: {
            url: "public/images/locations/location-1.jpg",
            isLeft: true
        },
        title: "Aurum Downtown",
        address: "123 Main Street, Downtown",
        telephone: "+1 (555) 123-4567",
        schedule: "Monday - Sunday: 12:00 PM - 11:00 PM",
        email: "downtown@aurum.com"
    },
    {
        image: {
            url: "public/images/locations/location-2.jpg",
            isLeft: false
        },
        title: "Aurum Riverside",
        address: "456 River Avenue, Riverside District",
        telephone: "+1 (555) 234-5678",
        schedule: "Monday - Sunday: 11:00 AM - 11:30 PM",
        email: "riverside@aurum.com"
    },
    {
        image: {
            url: "public/images/locations/location-3.jpg",
            isLeft: true
        },
        title: "Aurum Uptown",
        address: "789 Elegance Boulevard, Premium Zone",
        telephone: "+1 (555) 345-6789",
        schedule: "Tuesday - Sunday: 6:00 PM - 12:00 AM (Closed Monday)",
        email: "uptown@aurum.com"
    }
];
