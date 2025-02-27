import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">About Aparna Steel Industries</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              With years of expertise in agricultural machinery manufacturing, we have established ourselves
              as a leading provider of high-quality processing equipment for areca nut, pepper, coconut,
              and other agricultural products.
            </p>

            <div className="mb-8">
              <img
                src="./assets/shop-photo.jpg"
                alt="Aparna Steel Industries Facility"
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To provide innovative agricultural processing solutions that enhance productivity
              and efficiency while maintaining the highest standards of quality and customer service.
              We aim to empower farmers and agricultural processors with reliable, efficient machinery.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Quality Excellence in Manufacturing</li>
              <li>Customer-Centric Solutions</li>
              <li>Agricultural Innovation</li>
              <li>Reliable After-Sales Support</li>
              <li>Sustainable Farming Practices</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}