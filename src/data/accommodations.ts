import newquaySeaview from '@/assets/newquay-seaview.jpg';
import newquayPool from '@/assets/newquay-pool.jpg';
import newquayLivingTv from '@/assets/newquay-living-tv.jpg';
import newquayLivingSofa from '@/assets/newquay-living-sofa.jpg';
import newquayDining from '@/assets/newquay-dining.jpg';
import newquayKitchen from '@/assets/newquay-kitchen.jpg';
import newquayBedroomMaster from '@/assets/newquay-bedroom-master.jpg';
import newquayBedroomTwin from '@/assets/newquay-bedroom-twin.jpg';
import newquayBathroom from '@/assets/newquay-bathroom.jpg';
import newquayterasz from '@/assets/Fistral520760841.jpg';
import retroLounge from '@/assets/retro-lounge.jpg';
import retroPool from '@/assets/retro-pool.jpg';
import retroStudioOverview from '@/assets/retro-studio-overview.jpg';
import retroLiving from '@/assets/retro-living.jpg';
import retroBedroomWide from '@/assets/retro-bedroom-wide.jpg';
import retroBathroom from '@/assets/retro-bathroom.jpg';
import retroBedroom from '@/assets/retro-bedroom.jpg';
import retroDining from '@/assets/retro-dining.jpg';
import retroKitchen from '@/assets/retro-kitchen.jpg';
import retroKitchenWide from '@/assets/retro-kitchen-wide.jpg';
import rocklandsBalconyBeach from '@/assets/rocklands-balcony-beach.jpg';
import rocklandsBathroomBath from '@/assets/rocklands-bathroom-bath.jpg';
import rocklandsBathroomShower from '@/assets/rocklands-bathroom-shower.jpg';
import rocklandsBalconySea from '@/assets/rocklands-balcony-sea.jpg';
import rocklandsKitchen from '@/assets/rocklands-kitchen.jpg';
import rocklandsKitchenCounter from '@/assets/rocklands-kitchen-counter.jpg';
import rocklandsLivingSeaview from '@/assets/rocklands-living-seaview.jpg';
import rocklandsBedroom from '@/assets/rocklands-bedroom.jpg';
import rocklandsOverview from '@/assets/rocklands-overview.jpg';
import rocklandsSofa from '@/assets/rocklands-sofa.jpg';
import Seaviewterasz from '@/assets/See View Studio710581191.jpg';
import Seaviewagy from '@/assets/See View Studio710581261.jpg';
import Seaviewagy1 from '@/assets/See View Studio710581260.jpg';
import Seaviewkave from '@/assets/See View Studio710581268.jpg';
import Seaviewkave1 from '@/assets/See View Studio710581265.jpg';
import SeaviewTeasarok from '@/assets/See View Studio710581250.jpg';
import SeaviewStudio from '@/assets/See View Studio710581276.jpg';
import Seaviewmedence from '@/assets/See View Studio710581273.jpg';
import Seaviewfurdo from '@/assets/See View Studio710581284.jpg';
import Seaviewszoba from '@/assets/See View Studio710581278.jpg';
import BlueTerasz from '@/assets/BlueTerasz.avif';
import BlueNappali from '@/assets/BlueNapalli.avif';
import BlueHalo1 from '@/assets/BlueHalo1.avif';
import BlueHalo2 from '@/assets/BlueHalo2.avif';
import BlueHalo3 from '@/assets/BlueHalo3.avif';
import BlueEtkezo from '@/assets/BlueEtkezo.avif';
import BlueFurdo1 from '@/assets/BlueFurdo1.avif';
import BlueFurdo2 from '@/assets/BlueFurdo2.avif';
import Bluekonyha from '@/assets/BlueKonyha.avif';


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
      newquayBathroom,
      newquayterasz
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
    rating: 9.8,
    reviewCount: 49,
    size: "60 m²"
  },
  {
    id: 2,
    name: "Newquay Rocklands Beach View",
    description: "Prime beachfront apartment in Newquay with private beach area, sun terrace, and stunning ocean views. Features a balcony, kitchenette, washing machine, and free WiFi. Tolcarne Beach is just steps away.",
    price: 130,
    currency: "£",
    images: [
      rocklandsBalconyBeach,
      rocklandsBalconySea,
      rocklandsLivingSeaview,
      rocklandsBedroom,
      rocklandsSofa,
      rocklandsKitchen,
      rocklandsKitchenCounter,
      rocklandsOverview,
      rocklandsBathroomBath,
      rocklandsBathroomShower
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
    rating: 9.8,
    reviewCount: 29,
    size: "25 m²"
  },
  {
    id: 3,
    name: "Retro Ocean View Pad by Fistral Beach",
    description: "Unique retro-styled one-bedroom apartment with private pool and garden views. Features a fully equipped kitchen, terrace, and free WiFi. Just a 3-minute walk from Fistral Beach.",
    price: 120,
    currency: "£",
    images: [
      retroLounge,
      retroPool,
      retroStudioOverview,
      retroLiving,
      retroBedroomWide,
      retroBathroom,
      retroBedroom,
      retroDining,
      retroKitchen,
      retroKitchenWide
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
    rating: 9.8,
    reviewCount: 0,
    size: "35 m²"
  },
  {
    id: 4,
    name: "Sea View Studio by Fistral Beach",
    description: "Cozy studio apartment with seasonal outdoor pool and private beach area. Features a kitchenette, dining area, and stunning sea views. Just a 2-minute walk from Fistral Beach with free on-site parking.",
    price: 110,
    currency: "£",
    images: [
      Seaviewterasz,
      Seaviewagy,
      Seaviewagy1,
      Seaviewkave,
      Seaviewkave1,
      SeaviewTeasarok,
      SeaviewStudio,
      Seaviewmedence,
      Seaviewfurdo,
      Seaviewszoba,


      
    ],
    location: "Fistral Beach, Newquay",
    address: "16 Fistral Court Pentire Avenue, Newquay, TR7 1PD, United Kingdom",
    bedrooms: 1,
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
    rating: 9.8,
    reviewCount: 1,
    size: "23 m²"
  },
{
 id: 5,
    name: "Blue Tides Hideaway by Fistral",
    description: "Stylish two-bedroom apartment with stunning ocean views, private terrace, enclosed garden, dog-friendly.",
    price: 150,
    currency: "£",
    images: [
      BlueTerasz,
      newquayPool,
      BlueNappali,
      BlueHalo1,
      BlueHalo2,
      BlueHalo3,
      BlueEtkezo, 
      BlueFurdo1, 
      BlueFurdo2,
      Bluekonyha

     
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
    rating: 9.8,
    reviewCount: 20,
    size: "60 m²"
  },
  ];