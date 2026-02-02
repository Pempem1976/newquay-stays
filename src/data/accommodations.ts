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
  }
];
