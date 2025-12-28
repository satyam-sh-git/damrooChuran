
import React from 'react';
import { Product } from './types';

export const COLORS = {
  brand: '#99cb34',
  brandHover: '#88b52e',
  offWhite: '#fafafa',
};

export const IMAGES = {
  logo: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=200&h=100',
  hero: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
products: {
    churan: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    jaljira: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800',
    candies: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=800',
    hing: 'https://plus.unsplash.com/premium_photo-1698867575634-d39ef95fa6a7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    anardana: 'https://plus.unsplash.com/premium_photo-1675279010966-9bee20af667f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    jeera: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    mango: 'https://img.freepik.com/free-photo/diet-fresh-nutrition-mangos-summer_1339-80.jpg?t=st=1766928840~exp=1766932440~hmac=9faece8e763d7cd348efdbea9338f6c84d023c8525f6cf55f1c682584b112c14&w=1480',
    saunf: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&q=80&w=800',
    mixed: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&q=80&w=800',
    lorem1: 'https://plus.unsplash.com/premium_photo-1675731118517-c85b8cd0904c?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lorem2: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    lorem3: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&q=80&w=800'
  }
};

export const PRODUCT_DATA: Product[] = [
  {
    id: 1,
    name: "Swadisht Churan Jar",
    price: "₹180",
    numericPrice: 180,
    image: IMAGES.products.churan,
    description: "Our signature blend for perfect digestion. A household favorite since 1988."
  },
  {
    id: 2,
    name: "Damroo Jaljira Powder",
    price: "₹70",
    numericPrice: 70,
    image: IMAGES.products.jaljira,
    description: "Tangy, refreshing, and great for hydration. Just add chilled water!"
  },
  {
    id: 3,
    name: "Special Fruit Candies",
    price: "₹70",
    numericPrice: 70,
    image: IMAGES.products.candies,
    description: "Yummy flavors that kids love and parents trust. Healthy sweetness."
  },
  {
    id: 4,
    name: "Premium Hing Peda",
    price: "₹120",
    numericPrice: 120,
    image: IMAGES.products.hing,
    description: "Rich Asafoetida tablets that melt in your mouth and soothe your stomach."
  },
  {
    id: 5,
    name: "Royal Anardana Goli",
    price: "₹95",
    numericPrice: 95,
    image: IMAGES.products.anardana,
    description: "Sun-dried pomegranate seeds coated in a secret blend of spices."
  },
  {
    id: 6,
    name: "Pachak Jeera Goli",
    price: "₹60",
    numericPrice: 60,
    image: IMAGES.products.jeera,
    description: "Cumin-rich tablets that are perfect after a heavy Indian meal."
  },
  {
    id: 7,
    name: "Sweet Mango Slice",
    price: "₹150",
    numericPrice: 150,
    image: IMAGES.products.mango,
    description: "Dehydrated mango slices with a touch of rock salt and black pepper."
  },
  {
    id: 8,
    name: "Sugar-Free Saunf Mix",
    price: "₹110",
    numericPrice: 110,
    image: IMAGES.products.saunf,
    description: "Coated fennel seeds for freshness without the sugar spike."
  },
  {
    id: 9,
    name: "All-in-One Gift Box",
    price: "₹450",
    numericPrice: 450,
    image: IMAGES.products.mixed,
    description: "A beautiful collection of our top 5 products. Perfect for gifting."
  },
  {
    id: 10,
    name: "Lorem Digestive Tonic",
    price: "₹210",
    numericPrice: 210,
    image: IMAGES.products.lorem1,
    description: "A liquid formulation designed for rapid absorption and stomach comfort."
  },
  {
    id: 11,
    name: "Ipsum Herbal Goli",
    price: "₹85",
    numericPrice: 85,
    image: IMAGES.products.lorem2,
    description: "Traditional herbal golis made from mountain-sourced ingredients."
  },
  {
    id: 12,
    name: "Dolor Sour Candies",
    price: "₹65",
    numericPrice: 65,
    image: IMAGES.products.lorem3,
    description: "Extremely tangy candies that act as a great palate cleanser."
  }
];

export const BENEFITS = [
  {
    id: 1,
    title: "100% Natural",
    description: "Crafted with authentic Ayurvedic herbs and spices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Kid-Friendly",
    description: "Deliciously sweet and tangy flavors for children.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Since 1988",
    description: "Time-tested traditional recipes for acidity relief.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];
