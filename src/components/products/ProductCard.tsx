import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
}

export default function ProductCard({ name, image, description }: ProductCardProps) {
  const whatsappLink = `https://wa.me/919341134374?text=I'm interested in ${encodeURIComponent(name)}`;
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain bg-gray-100"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">{description}</p>
        <div className="space-y-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-600 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm sm:text-base">Contact via WhatsApp</span>
          </a>
          <a
            href="tel:+919341134374"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="text-sm sm:text-base">Call for Inquiry</span>
          </a>
          <a
            href="mailto:aparnasteel@gmail.com"
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="text-sm sm:text-base">Email Us</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}