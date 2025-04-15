import React from 'react';
import { motion } from 'framer-motion';
import Background3D from './components/Background3D';
import AQISection from './components/AQISection';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Background3D />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-blue-900 mb-6"
          >
            Air Quality Index Monitoring
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-700 mb-8"
          >
            Advanced air quality monitoring system using IoT technology for real-time environmental analysis
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="https://blynk.cloud/dashboard/447458/global/devices/1/organization/447458/devices/1481916/dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              View Dashboard
            </a>
            <a 
              href="https://aqiapp.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Live App
            </a>
            <a href="#features" className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      <AQISection />

      {/* Technical Stack */}
      <section className="py-20 px-4 bg-white/80">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-8 text-blue-900"
          >
            Technical Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Our system utilizes MQ135 sensors to detect harmful gases and compounds in the air, continuously transmitting data for real-time monitoring. The Arduino Uno microcontroller (ATmega 328) processes this information and transmits it to our application, enabling users to monitor air pollution levels across different areas and take appropriate action.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">AQI Monitor</h3>
              <p className="text-blue-200">Making air quality visible</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <GithubIcon />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <LinkedinIcon />
              </a>
              <a 
                href="https://youtu.be/t4Xl7QlxtAw?si=Mh25cSMWAtfOe6JS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-300 transition-colors"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
