import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wind } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/motivation", label: "Motivation" },
    { to: "/gallery", label: "Gallery" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wind className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-900">AQI Monitor</span>
          </Link>
          
          <div className="flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative"
              >
                <span className="text-gray-600 hover:text-blue-600 transition-colors">
                  {link.label}
                </span>
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-blue-600 bottom-0"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}