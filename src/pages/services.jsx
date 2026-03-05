import { motion } from 'framer-motion';
import { Compass, HardHat, PencilRuler } from 'lucide-react';

const services = [
  { title: "Návrh interiérů", icon: <PencilRuler />, text: "Moderní a funkční bydlení na míru." },
  { title: "Projektová dokumentace", icon: <Compass />, text: "Vše od studie až po stavební povolení." },
  { title: "Inženýrská činnost", icon: <HardHat />, text: "Zajistíme dozor a hladký průběh stavby." }
];

const Services = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-4xl font-bold mb-12">Naše Služby</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((s, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="p-8 bg-white border border-slate-200 rounded-3xl hover:shadow-xl transition-all group"
        >
          <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
          <h3 className="text-xl font-bold mb-3">{s.title}</h3>
          <p className="text-slate-600 leading-relaxed">{s.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;