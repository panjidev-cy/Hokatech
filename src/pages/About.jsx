import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <motion.div className="max-w-3xl text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-300 mb-6">We are a team of passionate developers dedicated to creating modern and responsive web applications. Our goal is to deliver high-quality user experiences with cutting-edge technologies.</p>
        <motion.button className="px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
}
