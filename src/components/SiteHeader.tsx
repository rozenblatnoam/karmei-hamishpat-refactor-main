import { useState, useEffect } from 'react';
import logo from '@/assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV = [
  { label: 'המכון', href: '/institute' },
  { label: 'בית הדין', href: '/beit-din' },
  { label: 'מכון רזי המשפט', href: '/razei-mishpat' },
  { label: 'דיינים צעירים', href: '/young-dayanim' },
  { label: 'תרומות', href: '/donations' },
  { label: 'צור קשר', href: '/contact' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-primary py-4'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="כרמי המשפט" className="h-10 w-auto rounded-lg shadow-md bg-white" />
          <div className="hidden sm:block">
            <span className="font-display text-primary-foreground font-bold text-lg leading-tight block">
              המכון הגבוה ללימודי דיינות
            </span>
            <span className="text-primary-foreground/70 text-xs">
              כרמי המשפט
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className={`px-3 py-2 rounded-lg hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all text-sm font-medium ${
                location.pathname === href ? 'text-primary-foreground bg-primary-foreground/10' : 'text-primary-foreground/80'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="תפריט"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 py-4">
          <div className="section-container flex flex-col gap-2">
            {NAV.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                onClick={handleNavClick}
                className={`px-4 py-3 rounded-lg hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all text-sm font-medium ${
                  location.pathname === href ? 'text-primary-foreground bg-primary-foreground/10' : 'text-primary-foreground/80'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
