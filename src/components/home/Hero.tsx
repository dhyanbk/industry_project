import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="./assets/shop-photo.jpg"
          alt="Aparna Steel Industry Shop"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Leading Steel Industry Solutions
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            Providing high-quality industrial machinery and solutions for your manufacturing needs.
            With over two decades of experience, we ensure quality and reliability in every delivery.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/products"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors"
            >
              <span>View Our Products</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}