import { Outlet, Link } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);


  const closeMenu = () => setIsOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter" onClick={closeMenu}>
            <Building2 className="text-blue-600" /> ARCHI-TECH
          </Link>
          
         
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition">Domů</Link>
            <Link to="/services" className="hover:text-blue-600 transition">Služby</Link>
            <Link to="/about" className="hover:text-blue-600 transition">O nás</Link>
            <Link to="/contact" className="hover:text-blue-600 transition font-semibold text-blue-600">Kontakt</Link>
          </div>

         
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 absolute w-full left-0 top-16 shadow-xl animate-in slide-in-from-top duration-300">
            <Link to="/" className="text-lg font-medium py-2 border-b border-slate-50" onClick={closeMenu}>Domů</Link>
            <Link to="/services" className="text-lg font-medium py-2 border-b border-slate-50" onClick={closeMenu}>Služby</Link>
            <Link to="/about" className="text-lg font-medium py-2 border-b border-slate-50" onClick={closeMenu}>O nás</Link>
            <Link to="/contact" className="text-lg font-bold py-2 text-blue-600" onClick={closeMenu}>Kontakt</Link>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center border-t border-slate-800 pt-8">
          <p>© 2026 ARCHI-TECH s.r.o. | Moderní architektura</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;