import acc1 from '@/assets/accommodation-1.jpg';
import acc2 from '@/assets/accommodation-2.jpg';
import acc3 from '@/assets/accommodation-3.jpg';
import acc4 from '@/assets/accommodation-4.jpg';
import acc5 from '@/assets/accommodation-5.jpg';

export interface Accommodation {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  amenities: string[];
  rating: number;
}

export const accommodations: Accommodation[] = [
  {
    id: 1,
    name: "Blue Tides Hideaway by Fistral",
    description: "A charming coastal hideaway just moments from Fistral Beach. Perfect for surf lovers and beach enthusiasts.",
    price: 125,
    currency: "£",
    image: acc1,
    location: "Fistral Beach",
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ["WiFi", "Kitchen", "Parking", "Sea View"],
    rating: 4.9
  },
  {
    id: 2,
    name: "Sea View Studio by Fistral Beach",
    description: "Cozy studio apartment with stunning sea views. Ideal for couples seeking a romantic coastal getaway.",
    price: 95,
    currency: "£",
    image: acc2,
    location: "Fistral Beach",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ["WiFi", "Kitchen", "Sea View", "Balcony"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Beachfront Apartment with 180° Sea Views",
    description: "Spectacular beachfront apartment offering panoramic 180° ocean views. Wake up to the sound of waves.",
    price: 185,
    currency: "£",
    image: acc3,
    location: "Fistral Beach",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    amenities: ["WiFi", "Kitchen", "Panoramic Views", "Balcony"],
    rating: 5.0
  },
  {
    id: 4,
    name: "Bright Coastal Apartment near Fistral",
    description: "Light-filled modern apartment in a prime location near Fistral Beach. Contemporary comfort meets coastal charm.",
    price: 145,
    currency: "£",
    image: acc4,
    location: "Near Fistral Beach",
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ["WiFi", "Kitchen", "Parking", "Washer"],
    rating: 4.9
  },
  {
    id: 5,
    name: "Retro Ocean View Pad at Fistral Beach",
    description: "Unique retro-styled apartment with amazing ocean views. A quirky and stylish base for your Newquay adventure.",
    price: 135,
    currency: "£",
    image: acc5,
    location: "Fistral Beach",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ["WiFi", "Kitchen", "Ocean View", "Retro Decor"],
    rating: 4.8
  }
];
