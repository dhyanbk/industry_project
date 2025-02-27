import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ProductShowcase from '../components/products/ProductShowcase';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ProductShowcase />
    </div>
  );
}