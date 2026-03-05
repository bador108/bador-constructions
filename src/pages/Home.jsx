import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
          STAVÍME <span className="text-blue-600">VIZE</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Jsme architektonické studio, které kombinuje moderní design s udržitelností. 
          Váš prostor, naše vášeň.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/services" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Naše služby
          </Link>
        </div>
      </motion.div>
    </div>
  );
};


export default Home;
