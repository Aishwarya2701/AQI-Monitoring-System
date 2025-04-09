import { motion } from 'framer-motion';
import { Wind, Thermometer, Activity, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Microcontroller",
    description: "Node MCU ESP8266 for reliable processing",
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Sensor Variety",
    description: "DHT11 and MQ135 sensors with Blynk Cloud integration",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Data Processing",
    description: "Advanced algorithms for accurate visualization",
  },
  {
    icon: <Thermometer className="w-8 h-8" />,
    title: "Enhancements",
    description: "Wi-Fi connectivity and IoT platform integration",
  },
];

export default function AQISection() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Air Quality Monitoring System
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}