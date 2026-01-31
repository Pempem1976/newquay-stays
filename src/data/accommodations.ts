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
    name: "Seaside Cottage",
    description: "Charming beachfront cottage with breathtaking ocean views. Perfect for couples or small families.",
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
    name: "Panorama Apartment",
    description: "Modern, elegant apartment with spacious balcony and panoramic sea views. Ideal for a city break.",
    price: 165,
    currency: "£",
    image: acc2,
    location: "Newquay Centre",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    amenities: ["WiFi", "Lift", "Balcony", "Washer"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Surfer's Lodge",
    description: "Cozy cabin with surf vibes, just minutes from the best waves. Board rental available on site!",
    price: 95,
    currency: "£",
    image: acc3,
    location: "Watergate Bay",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ["WiFi", "Board Storage", "Garden", "BBQ"],
    rating: 4.7
  },
  {
    id: 4,
    name: "Victorian B&B",
    description: "Elegant Victorian accommodation with English breakfast. Historic charm meets modern comfort.",
    price: 110,
    currency: "£",
    image: acc4,
    location: "Newquay Town",
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    amenities: ["Breakfast", "WiFi", "Garden", "Parking"],
    rating: 4.9
  },
  {
    id: 5,
    name: "Luxury Ocean Suite",
    description: "Premium suite with stunning ocean panorama. The perfect combination of luxury and tranquility.",
    price: 245,
    currency: "£",
    image: acc5,
    location: "Towan Head",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ["Jacuzzi", "Minibar", "Room Service", "Spa"],
    rating: 5.0
  }
];
