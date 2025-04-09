import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    {
      url: "/src/pictures/aqi1.jpg",
      title: "AQI Monitoring Station",
      description: "Advanced sensors deployed in urban areas"
    },
    {
      url: "/src/pictures/aqi dash1.jpg",
      title: "Data Visualization",
      description: "Real-time air quality data analysis"
    },
    {
      url: "/src/pictures/components.jpg",
      title: "Components",
      description: "Connected infrastructure for better monitoring"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-purple-900 mb-8"
        >
          Project Gallery
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}