import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background3D from './components/Background3D';
import AQISection from './components/AQISection';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import About from './pages/About';
import Motivation from './pages/Motivation';
import Gallery from './pages/Gallery';
import { GithubIcon, LinkedinIcon, Heart } from 'lucide-react';

function Home() {
  const quotes = [
    {
      text: "Clean air is a basic human right that should be available to all.",
      author: "Environmental Protection Agency"
    },
    {
      text: "The quality of air we breathe determines the quality of life we lead.",
      author: "World Health Organization"
    }
  ];

  return (
    <>
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
            className="flex justify-center gap-4"
          >
            <a href="#features" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Learn More
            </a>
            <a 
              href="https://youtu.be/t4Xl7QlxtAw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              View Demo
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <Quote key={index} {...quote} />
          ))}
        </div>
      </section>

      <AQISection />

      <section id="features" className="py-20 px-4 bg-white/80">
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

      <section className="py-16 px-4 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-8 text-blue-900"
          >
            Why Air Quality Monitoring Matters
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">Health Impact</h3>
              <p className="text-gray-700">Poor air quality can lead to respiratory issues, cardiovascular problems, and other health concerns. Monitoring helps individuals make informed decisions about outdoor activities.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">Environmental Protection</h3>
              <p className="text-gray-700">Understanding air quality trends helps in implementing effective environmental policies and reducing pollution sources for a cleaner future.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Background3D />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <footer className="bg-blue-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
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
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-200 mt-4">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>by AQI Monitoring Team</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
