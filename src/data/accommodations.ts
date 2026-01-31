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
    name: "Tengerparti Cottage",
    description: "Bájos tengerparti házikó lélegzetelállító kilátással az óceánra. Tökéletes pároknak vagy kisebb családoknak.",
    price: 125,
    currency: "£",
    image: acc1,
    location: "Fistral Beach",
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ["Wifi", "Konyha", "Parkoló", "Tengeri kilátás"],
    rating: 4.9
  },
  {
    id: 2,
    name: "Panorámás Apartman",
    description: "Modern, elegáns apartman tágas erkéllyel és panorámás tengeri kilátással. Ideális városi pihenéshez.",
    price: 165,
    currency: "£",
    image: acc2,
    location: "Newquay Centre",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    amenities: ["Wifi", "Lift", "Erkély", "Mosógép"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Szörfös Lodge",
    description: "Hangulatos faház szörfös hangulattal, mindössze pár percre a legjobb hullámoktól. Deszkák kölcsönzése helyben!",
    price: 95,
    currency: "£",
    image: acc3,
    location: "Watergate Bay",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ["Wifi", "Szörfdeszka tárolás", "Kert", "BBQ"],
    rating: 4.7
  },
  {
    id: 4,
    name: "Victorian B&B",
    description: "Elegáns viktoriánus szálláshely angol reggelivel. Történelmi hangulat modern kényelemmel.",
    price: 110,
    currency: "£",
    image: acc4,
    location: "Newquay Town",
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    amenities: ["Reggeli", "Wifi", "Kert", "Parkoló"],
    rating: 4.9
  },
  {
    id: 5,
    name: "Luxury Ocean Suite",
    description: "Prémium lakosztály lenyűgöző óceán panorámával. A luxus és nyugalom tökéletes kombinációja.",
    price: 245,
    currency: "£",
    image: acc5,
    location: "Towan Head",
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ["Jacuzzi", "Minibar", "Szobaszerviz", "Spa"],
    rating: 5.0
  }
];
