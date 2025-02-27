import React from 'react';
import { Phone, Mail, Factory } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Factory className="h-6 w-6" />
            <span className="text-xl font-bold">Industrial Machinery</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-gray-300">
              <Phone className="h-4 w-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@industrialmachinery.com" className="flex items-center space-x-2 hover:text-gray-300">
              <Mail className="h-4 w-4" />
              <span>info@industrialmachinery.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}