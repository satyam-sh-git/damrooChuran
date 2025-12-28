
import React from 'react';

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  numericPrice: number;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CartItem extends Product {
  quantity: number;
}
