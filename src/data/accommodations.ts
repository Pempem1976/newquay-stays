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
  images: string[];
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  amenities: string[];
  rating: number;
  reviewCount: number;
  size: string;
}

export const accommodations: Accommodation[] = [
  {
    id: 1,
    name: "Newquay Fistral Beach View with pool",
    description: "Elegant two-bedroom apartment in Newquay with stunning sea views, sun terrace, and seasonal outdoor swimming pool. Features a garden, open-air bath, and free WiFi. Located just a 2-minute walk from Fistral Beach.",
    price: 150,
    currency: "£",
    images: [acc1, acc2, acc3, acc4, acc5],
    location: "Fistral Beach, Newquay",
    address: "15 Pentire Avenue, 15 Fistral Court, Newquay, TR7 1PD, United Kingdom",
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 5,
    amenities: [
      "Outdoor Swimming Pool",
      "Free Parking",
      "Free WiFi",
      "Sea View",
      "Balcony",
      "Fully Equipped Kitchen",
      "Washing Machine",
      "Garden",
      "Pet Friendly",
      "Family Rooms"
    ],
    rating: 8.8,
    reviewCount: 49,
    size: "40 m²"
  }
];
