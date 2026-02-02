import newquaySeaview from '@/assets/newquay-seaview.jpg';
import newquayPool from '@/assets/newquay-pool.jpg';
import newquayLivingTv from '@/assets/newquay-living-tv.jpg';
import newquayLivingSofa from '@/assets/newquay-living-sofa.jpg';
import newquayDining from '@/assets/newquay-dining.jpg';
import newquayKitchen from '@/assets/newquay-kitchen.jpg';
import newquayBedroomMaster from '@/assets/newquay-bedroom-master.jpg';
import newquayBedroomTwin from '@/assets/newquay-bedroom-twin.jpg';
import newquayBathroom from '@/assets/newquay-bathroom.jpg';

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
    images: [
      newquaySeaview,
      newquayPool,
      newquayLivingTv,
      newquayLivingSofa,
      newquayDining,
      newquayKitchen,
      newquayBedroomMaster,
      newquayBedroomTwin,
      newquayBathroom
    ],
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
  },
  {
    id: 2,
    name: "Newquay Rocklands Beach View",
    description: "Prime beachfront apartment in Newquay with private beach area, sun terrace, and stunning ocean views. Features a balcony, kitchenette, washing machine, and free WiFi. Tolcarne Beach is just steps away.",
    price: 120,
    currency: "£",
    images: [
      newquaySeaview,
      newquayLivingTv,
      newquayBathroom
    ],
    location: "Narrowcliff, Newquay",
    address: "Apartment 19 Rocklands, Narrowcliff, Newquay, TR7 2FD, United Kingdom",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: [
      "Beachfront",
      "Private Beach Area",
      "Free WiFi",
      "Balcony",
      "Terrace",
      "Kitchenette",
      "Washing Machine",
      "Non-smoking",
      "View",
      "Elevator"
    ],
    rating: 8.6,
    reviewCount: 29,
    size: "25 m²"
  },
  {
    id: 3,
    name: "Retro Ocean View Pad by Fistral Beach",
    description: "Unique retro-styled one-bedroom apartment with private pool and garden views. Features a fully equipped kitchen, terrace, and free WiFi. Just a 3-minute walk from Fistral Beach.",
    price: 135,
    currency: "£",
    images: [
      newquayPool,
      newquayLivingSofa,
      newquayKitchen,
      newquayBedroomMaster,
      newquayBathroom
    ],
    location: "Fistral Beach, Newquay",
    address: "18 Fistral Court, Pentire Avenue Trevisco, Newquay, TR7 1PD, United Kingdom",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: [
      "Private Pool",
      "Swimming Pool",
      "Free WiFi",
      "Garden View",
      "Terrace",
      "Fully Equipped Kitchen",
      "Flat-screen TV",
      "Washing Machine",
      "Dishwasher",
      "Air Conditioning"
    ],
    rating: 0,
    reviewCount: 0,
    size: "35 m²"
  },
  {
    id: 4,
    name: "Sea View Studio by Fistral Beach",
    description: "Cozy studio apartment with seasonal outdoor pool and private beach area. Features a kitchenette, dining area, and stunning sea views. Just a 2-minute walk from Fistral Beach with free on-site parking.",
    price: 95,
    currency: "£",
    images: [
      newquaySeaview,
      newquayDining,
      newquayBathroom
    ],
    location: "Fistral Beach, Newquay",
    address: "16 Fistral Court Pentire Avenue, Newquay, TR7 1PD, United Kingdom",
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    amenities: [
      "Outdoor Swimming Pool",
      "Free Parking",
      "Free WiFi",
      "Sea View",
      "Private Beach Area",
      "Kitchenette",
      "Terrace",
      "Garden",
      "Non-smoking",
      "Shower"
    ],
    rating: 7.0,
    reviewCount: 1,
    size: "23 m²"
  }
];
