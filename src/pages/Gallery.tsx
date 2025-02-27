import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-center">Our Gallery</h1>
          
          {/* Photos Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Photo placeholders - Replace src with actual paths from assets */}
              {[1, 2, 3, 4, 5].map((index) => (
                <motion.div
                  key={`photo-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-lg overflow-hidden shadow-lg h-64"
                >
                  <img
                    src={`./assets/photo${index}.jpg`}
                    alt={`Gallery Photo ${index}`}
                    className="w-full h-full object-scale-down bg-gray-100"
                  />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Videos Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Video placeholders - Replace src with actual paths from assets */}
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={`video-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-lg overflow-hidden shadow-lg h-64 bg-gray-100"
                >
                  <video
                    controls
                    className="w-full h-full object-scale-down"
                  >
                    <source src={`./assets/video${index}.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}