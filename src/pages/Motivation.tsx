import { motion } from 'framer-motion';
import { Heart, Shield, TreePine } from 'lucide-react';

export default function Motivation() {
  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Health Impact",
      description: "Helps citizens make informed decisions about outdoor activities and health protection measures."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Environmental Protection",
      description: "Enables early detection of pollution events and supports environmental conservation efforts."
    },
    {
      icon: <TreePine className="w-12 h-12 text-emerald-500" />,
      title: "Sustainable Future",
      description: "Contributes to creating cleaner, healthier communities through data-driven decisions."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-green-900 mb-8"
        >
          Our Motivation
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Impact and Benefits</h2>
          <p className="text-gray-700 mb-4">
            Our AQI monitoring system provides real-time data that helps communities make informed decisions about their health and environment. By making air quality data accessible and understandable, we empower individuals and organizations to take action for cleaner air.
          </p>
          <p className="text-gray-700 mb-4">
            Air pollution is a growing concern, significantly impacting human health and environmental sustainability. Traditional air quality monitoring systems are often expensive, stationary, and provide delayed data, making it difficult to track real-time pollution levels effectively.
          </p>
          <p className="text-gray-700 mb-4">
            To address these limitations, this study focuses on developing a smart air quality monitoring system that leverages Wireless Sensor Networks (WSNs) and IoT. By integrating low-cost gas sensors, microcontrollers, and cloud-based data analytics, the proposed system aims to provide real-time air quality index (AQI) monitoring with improved accessibility and accuracy.
          </p>
          <p className="text-gray-700 mb-0">
            The primary objective is to enable continuous monitoring of pollutants such as O₂, CO₂, N₂, and other harmful gases, allowing users to make informed decisions to minimize health risks. Additionally, the system is designed for scalability, ensuring seamless integration with smart city infrastructure and personal IoT devices—promoting environmental awareness and proactive pollution control.
          </p>
        </motion.div>
      </div>
    </div>
  );
}