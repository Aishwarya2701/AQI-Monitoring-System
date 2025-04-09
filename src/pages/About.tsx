import { motion } from 'framer-motion';
import { Activity, Cpu, Wind } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-blue-900 mb-8"
        >
          About Our Project
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg"
        >
<p className="text-gray-700 mb-6"> 
  The Air Quality Index (AQI) Monitoring System is a microcontroller-based solution that offers real-time insights into environmental pollution, aiming to reduce the health risks posed by poor air quality. It is built on platforms like Arduino Uno or NodeMCU ESP8266 and integrates sensors such as the DHT11 for temperature and humidity and the MQ2 for detecting harmful gases like carbon monoxide and methane. The system continuously collects environmental data, enabling it to deliver accurate, up-to-date information about local air quality conditions. 
  </p>
   <p className="text-gray-700 mb-6"> 
    Once the data is collected, it is processed using custom algorithms and securely transmitted to the Blynk platform, where it is stored and visualized. The system calculates the AQI based on global standards, including those from the World Health Organization (WHO) and the Environmental Protection Agency (EPA). Through an intuitive web or mobile dashboard, users can easily view current air quality levels and receive alerts for hazardous conditions, such as elevated levels of particulate matter or toxic gases—enabling them to take prompt actions to safeguard their health. 
    </p> 
    <p className="text-gray-700 mb-6"> 
      Scalable and adaptable, the AQI Monitoring System can be implemented in diverse settings, from individual homes to entire cities. It serves as a valuable tool for environmental agencies, urban planners, and governments to monitor pollution trends and develop effective strategies for air quality improvement. By harnessing IoT technology and real-time data, the system supports sustainable living and empowers individuals and communities to actively combat air pollution and promote public health.
 </p>
          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Cpu className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hardware</h3>
              <p className="text-gray-600">Advanced sensors and microcontrollers for accurate data collection</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Wind className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
              <p className="text-gray-600">Real-time air quality monitoring with instant updates</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Activity className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analysis</h3>
              <p className="text-gray-600">Advanced data processing for accurate pollution assessment</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}