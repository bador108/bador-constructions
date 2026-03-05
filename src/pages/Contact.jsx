import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xvzwpdpl");

  if (state.succeeded) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-40 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl inline-block"
        >
          <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
          <h2 className="text-3xl font-bold mb-2">Zpráva odeslána!</h2>
          <p className="text-slate-600 mb-8">Děkujeme, ozveme se vám co nejdříve.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Poslat další zprávu
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">Pojďme spolu <span className="text-blue-600">stavět.</span></h2>
        <p className="text-xl text-slate-500">Váš projekt začíná jedním kliknutím.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Levá strana - Skutečné údaje pro Bador Constructions */}
        <div className="space-y-10">
          <div>
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">Kontaktní údaje</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase">Sídlo firmy</p>
                   <p className="text-lg text-slate-600 font-medium">Bador Constructions s.r.o.</p>
                   <p className="text-lg text-slate-600">Dělnická 213, 170 00 Praha 7</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase">Zavolejte nám</p>
                   <p className="text-lg text-slate-600">+420 777 888 999</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase">Napište nám</p>
                   <p className="text-lg text-slate-600">projekt@bador-constructions.cz</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
             <p className="text-blue-800 font-bold mb-2">Působíme po celé ČR</p>
             <p className="text-blue-600/80">Specializujeme se na moderní rodinné domy a rekonstrukce s důrazem na detail.</p>
          </div>
        </div>

        {/* Pravá strana - Formulář zůstává stejný a funkční */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-50"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Celé jméno</label>
              <input id="name" name="name" required type="text" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-4 focus:ring-blue-50 outline-none" placeholder="Např. Václav Urbanec" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
              <input id="email" name="email" required type="email" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-4 focus:ring-blue-50 outline-none" placeholder="vas@email.cz" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Vaše zpráva</label>
              <textarea id="message" name="message" required rows="4" className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:ring-4 focus:ring-blue-50 outline-none resize-none" placeholder="Popište nám svůj stavební záměr..."></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button type="submit" disabled={state.submitting} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl disabled:opacity-50">
              {state.submitting ? "Odesílám..." : "Odeslat poptávku"} <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
