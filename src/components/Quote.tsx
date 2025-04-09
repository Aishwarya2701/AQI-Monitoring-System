import { motion } from 'framer-motion';

interface QuoteProps {
  text: string;
  author: string;
}

export default function Quote({ text, author }: QuoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
    >
      <p className="text-xl text-gray-700 italic mb-4">"{text}"</p>
      <p className="text-gray-600 font-semibold">- {author}</p>
    </motion.div>
  );
}