import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Wrench, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'All our agricultural machinery undergoes rigorous quality testing and certification.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support for all our farming equipment.'
  },
  {
    icon: Wrench,
    title: 'Expert Installation',
    description: 'Professional installation and training by experienced agricultural technicians.'
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Recognized leader in agricultural machinery and processing equipment.'
  }
];

export default function Features() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We specialize in manufacturing high-quality agricultural machinery, focusing on innovative solutions
            for areca nut, pepper, and coconut processing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block p-3 bg-blue-100 rounded-full mb-4"
              >
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}