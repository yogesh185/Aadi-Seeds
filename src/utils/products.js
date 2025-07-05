import tokyoPotImg from '../assets/gamle/tokyopot.jpg';
import mattPotImg from '../assets/gamle/mattpot.jpg';
import blossomPotImg from '../assets/pots/blossompot.webp';
import GrowBagPotImg from '../assets/gamle/GrowBag.webp';
import HilluxPotImg from '../assets/gamle/Hiluxpot.webp';
import TowerPotImg from '../assets/gamle/towerpot.webp';
import LotusPot8Img from '../assets/gamle/Lotuspot.webp';
import LotusPot10PotImg from '../assets/gamle/lotusPot10.webp';
import MegaPotImg from '../assets/gamle/megapot.webp';
import BuddhaFacePotImg from '../assets/pots/BuddhaFace.webp';
import SquareSelfWateringImg from '../assets/pots/SquareSelfWatering.webp';

export default [
  
  // Gamle

   {
    id: 1,
    name: "Mega Pot",
    category: "Gamle",
    image: MegaPotImg,
    description: "Aloe Vera is a succulent plant species known for its medicinal properties.",
    sizes: [
      { label: "10 Inch", price: 100 },
      { label: "12 Inch", price: 150 }
    ]
  },
  {
    id: 2,
    name: "Moon Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Mini+Bonsai",
    sizes: [
      { label: "10 Inch", price: 180 },
      { label: "12 Inch", price: 200 }
    ]
  },
  {
    id: 3,
    name: "Hilux Pot",
    category: "Gamle",
    image: HilluxPotImg,
    sizes: [
      { label: "10 Inch", price: 180 },
      { label: "12 Inch", price: 210 }
    ]
  },
  {
    id: 4,
    name: "Bail Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Snake+Plant",
    sizes: [
      { label: "10 Inch", price: 180 },
      { label: "12 Inch", price: 200 }
    ]
  },
  {
    id: 5,
    name: "Matt Pot",
    category: "Gamle",
    image: mattPotImg,
    sizes: [
      { label: "8 Inch", price: 310 },
      { label: "12 Inch", price: 340 }
    ]
  },
  {
    id: 7,
    name: "Diamanti Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Rubber+Plant",
    sizes: [
      { label: "10 Inch", price: 150 }
    ]
  },
  {
    id: 9,
    name: "Eden Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Aloe+Vera",
    sizes: [
      { label: "6 Inch", price: 60 },
      { label: "8 Inch", price: 80 },
      { label: "10 Inch", price: 100 },
      { label: "12 Inch", price: 120 },
      { label: "14 Inch", price: 140 }
    ]
  },
  {
    id: 10,
    name: "Sunlite Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Basil",
    sizes: [
      { label: "10 Inch", price: 270 },
      { label: "12 Inch", price: 300 }
    ]
  },
  {
    id: 11,
    name: "Orchid Square Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Lavender",
    sizes: [
      { label: "10 Inch", price: 180 }
    ]
  },
  {
    id: 12,
    name: "Fence Square Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Spider+Plant",
    sizes: [
      { label: "10 Inch", price: 250 }
    ]
  },
  {
    id: 13,
    name: "Tulsi Square Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Spider+Plant",
    sizes: [
      { label: "12 Inch", price: 2500 },
      { label: "15 Inch", price: 3000 },
      { label: "17 Inch", price: 3500 }
    ]
  },
  {
    id: 14,
    name: "Blaze Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Spider+Plant",
    sizes: [
      { label: "10 Inch", price: 199 },
      { label: "12 Inch", price: 220 },
      { label: "14 Inch", price: 250 }
    ]
  },
  {
    id: 15,
    name: "Jerry Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Spider+Plant",
    sizes: [
      { label: "12 Inch", price: 220 }
    ]
  },
  {
    id: 17,
    name: "Rectangle Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Spider+Plant",
    sizes: [
      { label: "17 Inch", price: 2 }
    ]
  },
  {
    id: 18,
    name: "MK Self Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Spider+Plant",
    price: 10 // No sizes, just price
  },
  {
    id: 19,
    name: "NS Tower Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Spider+Plant",
    price: 10
  },
  {
    id: 20,
    name: "Grow Tower Pot",
    category: "Gamle",
    image: "https://placehold.co/300x200?text=Spider+Plant",
    price: 10
  },
  {
    id: 21,
    name: "Grow Bag Pot",
    category: "Gamle",
    image: GrowBagPotImg,
    price: 10
  },
  {
    id: 22,
    name: "Tower Pot",
    category: "Gamle",
    image: TowerPotImg,
    price: 10
  },
  {
    id: 23,
    name: "Tokyo Pot",
    category: "Gamle",
    image: tokyoPotImg,
    price: 10
  },

  // Pots

  { id: 24, name: "Metal Meena Pot", category: "Pots & Decoratives", price: 10, image: "https://placehold.co/300x200?text=Spider+Plant" },
  { id: 25, name: "Uber Square Pot", category: "Pots & Decoratives", price: 10, image: "https://placehold.co/300x200?text=Spider+Plant" },
  { id: 26, name: "Daisy Pot", category: "Pots & Decoratives", price: 10, image: "https://placehold.co/300x200?text=Spider+Plant" },
  { id: 27, name: "Hanging Pot", category: "Pots & Decoratives", price: 10, image: "https://placehold.co/300x200?text=Spider+Plant" },
  { id: 28, name: "Hook Pot", category: "Pots & Decoratives", price: 10, image: "https://placehold.co/300x200?text=Spider+Plant" },
  { id: 29, name: "Buddha Face Pot", category: "Pots & Decoratives", price: 10, image: BuddhaFacePotImg },
  { id: 30, name: "Laughing Buddha Pot", category: "Pots & Decoratives", price: 10, image: "https://placehold.co/300x200?text=Spider+Plant" },
  { id: 31, name: "Blossom Pot", category: "Pots & Decoratives", price: 10, image: blossomPotImg },
  { id: 32, name: "Apple Pot", category: "Pots & Decoratives", price: 10, image: "https://placehold.co/300x200?text=Spider+Plant" },
  { id: 33, name: "Arc Pot", category: "Pots & Decoratives", price: 10, image: "https://placehold.co/300x200?text=Spider+Plant" },
  { id: 34, name: "Solitare Pot", category: "Pots & Decoratives", price: 10, image: "https://placehold.co/300x200?text=Spider+Plant" },
  { id: 35, name: "Lotus Pot", category: "Pots & Decoratives", price: 10, image: LotusPot8Img ,sizes: ["8 Inch", "10 Inch"] },
  { id: 37, name: "Square SelfWatering Pot", category: "Pots & Decoratives", price: 10, image: SquareSelfWateringImg },

    // Seeds

  { id: 54, name: "Flower Seeds", category: "Seeds", price: 10, image: SquareSelfWateringImg },
  { id: 55, name: "Karela Hybrid", category: "Seeds", price: 10, image: SquareSelfWateringImg },
  { id: 56, name: "Lauki Hybrid", category: "Seeds", price: 10, image: SquareSelfWateringImg },
  { id: 57, name: "Patta Gobhi", category: "Seeds", price: 10, image: SquareSelfWateringImg },
  { id: 58, name: "Gilki", category: "Seeds", price: 10, image: SquareSelfWateringImg },
  { id: 59, name: "Tamatar", category: "Seeds", price: 10, image: SquareSelfWateringImg },
  { id: 60, name: "Turai", category: "Seeds", price: 10, image: SquareSelfWateringImg },
  { id: 61, name: "Gol Lauki", category: "Seeds", price: 10, image: SquareSelfWateringImg },
  { id: 62, name: "Bangan", category: "Seeds", price: 10, image: SquareSelfWateringImg },
  { id: 63, name: "Mirchi", category: "Seeds", price: 10, image: SquareSelfWateringImg },
  { id: 64, name: "Shimla Mirch", category: "Seeds", price: 10, image: SquareSelfWateringImg },
  { id: 65, name: "Methi 1 KG", category: "Seeds", price: 10, image: SquareSelfWateringImg },

  // Organic And Chemicals

  { id: 66, name: "Cocopit", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 67, name: "Sacban Chloro", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 68, name: "Neem Oil", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 69, name: "Super Sonata", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 70, name: "House Care", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 71, name: "SAAF", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 72, name: "Tafgor", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 73, name: "Rounder", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 74, name: "Black Gold", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 75, name: "Rose mix", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 76, name: "Bone Meal", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 77, name: "Sarso Khali", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 78, name: "Neem Khali", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 79, name: "Fish Meal", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 80, name: "Saczime", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 81, name: "Pottash", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 82, name: "DAP", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 83, name: "Urea", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 84, name: "Vermi Compose", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 85, name: "APSM Salt/ Magnum", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 86, name: "Rose Special", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },
  { id: 87, name: "Chloro Daane", category: "Organic & Chemicals", price: 10, image: SquareSelfWateringImg },


  // General And Hardware

  { id: 38, name: "Water Can", category: "General & Hardware", price: 10, image: SquareSelfWateringImg},
  { id: 39, name: "Cutter", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 40, name: "Khurpi", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 41, name: "Garden Panja", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 42, name: "Hedge Cutter", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 43, name: "Hand Sprayer", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 44, name: "Herculis Spray", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 45, name: "Hand Sprayer Gun", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 46, name: "Gamla Stand", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 47, name: "Corner Stand", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 48, name: "Cycle Stand", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 49, name: "Home Stand", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 50, name: "Germination Tray", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 51, name: "Irrigation Motor ", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 52, name: "Gamla Stand", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
  { id: 53, name: "Pipe 100ft", category: "General & Hardware", price: 10, image: SquareSelfWateringImg },
 
];
