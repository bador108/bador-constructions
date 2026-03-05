import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Levá strana - Info zůstává stejná */}
        <div className="space-y-10">
          <h2 className="text-4xl font-black mb-4">Pojďme spolu <span className="text-blue-600">stavět.</span></h2>
          {/* ... tvoje kontaktní údaje ... */}
        </div>

        {/* Pravá strana - KLASICKÝ FORMULÁŘ */}
        <motion.div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-50">
          <form 
            action="https://formspree.io/f/xvzwpdpl" 
            method="POST" 
            className="space-y-5"
          >
            {/* Tímhle Formspree řekneš, kam se má VRÁTIT. 
                Důležité: Použijeme jen hlavní doménu pro jistotu */}
            <input type="hidden" name="_next" value="https://bador-constructions-test.vercel.app/" />
            <input type="hidden" name="_subject" value="Nová zpráva z webu Bador" />

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Celé jméno</label>
              <input name="name" required type="text" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50" placeholder="Jan Novák" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
              <input name="email" required type="email" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50" placeholder="novak@email.cz" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Vaše zpráva</label>
              <textarea name="message" required rows="4" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50" placeholder="Popište nám svůj záměr..."></textarea>
            </div>

            <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl">
              Odeslat poptávku <Send size={20} className="inline ml-2" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
