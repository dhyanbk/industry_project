import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
}

export default function ProductCard({ name, image, description }: ProductCardProps) {
  const whatsappLink = `https://wa.me/1234567890?text=I'm interested in ${encodeURIComponent(name)}`;
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-600 hover:text-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Contact via WhatsApp</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <Phone className="h-5 w-5" />
            <span>Call for Inquiry</span>
          </a>
          <a
            href="mailto:info@industrialmachinery.com"
            className="flex items-center space-x-2 text-red-600 hover:text-red-700"
          >
            <Mail className="h-5 w-5" />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}