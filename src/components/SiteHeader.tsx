import { useState, useEffect } from 'react';
import logo from '@/assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV = [
  { label: 'המכון', href: '/institute' },
  { label: 'בית הדין', href: '/beit-din' },
  { label: 'מכון רזי המשפט', href: '/razei-mishpat' },
  { label: 'דיינים צעירים', href: '/young-dayanim' },
  { label: 'הלכה יומית', href: '/halacha-yomit' },
  { label: 'תרומות', href: '/donations' },
  { label: 'צור קשר', href: '/contact' },
];

const NEWS_ITEMS = [
  { text: '📢 ההרשמה למסלול דיינות תשפ"ז פתוחה!', link: null, image: '/avrechimrecruitment.jpg', pdf: null, formLink: null },
  { text: '⚖️ בית הדין לממונות – סניף חדש ברמת השרון', link: '/beit-din', image: null, pdf: null, formLink: null },
  { text: '🏆 תחרות מאמרים: הלכה ובינה מלאכותית', link: null, image: '/maamarimcompetition.jpg', pdf: '/maamarim-rules.pdf', formLink: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScVNJRiFvdaTp-2ff_qgfgVmqcXyKol4OoOb19UYyd7TA7THg/formResponse' },
  { text: '🤝 הצטרפו לתוכנית יששכר וזבולון', link: '/donations', image: null, pdf: null, formLink: null },
];

type LightboxItem = {
  image: string;
  pdf: string | null;
  formLink: string | null;
};

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        @keyframes ticker-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-wrapper {
          display: flex;
          width: max-content;
          animation: ticker-rtl 35s linear infinite;
          will-change: transform;
        }
        .ticker-wrapper:hover {
          animation-play-state: paused;
        }
        .ticker-track {
          display: flex;
          white-space: nowrap;
        }
      `}</style>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* כפתור סגירה */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 left-0 text-white text-2xl font-bold hover:text-gray-300 transition-colors"
            >
              ✕
            </button>

            {/* תמונה */}
            <img
              src={lightbox.image}
              alt="עלון"
              className="w-full h-auto rounded-xl shadow-2xl max-h-[70vh] object-contain"
            />

            {/* כפתורי פעולה */}
            {(lightbox.pdf || lightbox.formLink) && (
              <div className="flex gap-3 justify-center mt-4">
                {lightbox.pdf && (
                  <a
                    href={lightbox.pdf}
                    download
                    className="flex items-center gap-2 bg-white text-primary font-semibold px-5 py-2.5 rounded-xl shadow hover:shadow-md hover:bg-gray-50 transition-all text-sm"
                  >
                    <span>📄</span>
                    הורד תקנון PDF
                  </a>
                )}
                {lightbox.formLink && (
                  <a
                    href={lightbox.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-xl shadow hover:shadow-md hover:bg-primary/90 transition-all text-sm"
                  >
                    <span>📝</span>
                    הרשמה לתחרות
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">

        {/* פס ניווט */}
        <div className={`bg-primary transition-all duration-300 ${scrolled ? 'py-3 shadow-lg' : 'py-6'}`}>
          <div className="section-container flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="כרמי המשפט" className="h-14 w-auto rounded-lg shadow-md bg-white" />
              <div className="hidden sm:block">
                <span className="font-display text-primary-foreground font-bold text-xl leading-tight block">
                  המכון הגבוה ללימודי דיינות
                </span>
                <span className="text-primary-foreground/70 text-sm">
                  כרמי המשפט-ענב
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {NAV.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  className={`px-3 py-2 rounded-lg hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all text-base font-medium ${
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
            <nav className="md:hidden border-t border-primary-foreground/10 py-4">
              <div className="section-container flex flex-col gap-2">
                {NAV.map(({ label, href }) => (
                  <Link
                    key={href}
                    to={href}
                    onClick={handleNavClick}
                    className={`px-4 py-3 rounded-lg hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all text-base font-medium ${
                      location.pathname === href ? 'text-primary-foreground bg-primary-foreground/10' : 'text-primary-foreground/80'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>

        {/* פס עדכונים */}
        <div className="bg-accent/95 backdrop-blur-md border-b border-accent/20 shadow-sm overflow-hidden">
          <div className="h-14 flex items-end pb-2">
            <div className="ticker-wrapper">
              {[0, 1].map((copy) => (
                <div key={copy} className="ticker-track" aria-hidden={copy === 1}>
                  {NEWS_ITEMS.map((item, i) =>
                    item.image ? (
                      <button
                        key={i}
                        onClick={() => setLightbox({ image: item.image!, pdf: item.pdf, formLink: item.formLink })}
                        className="inline-flex items-center px-8 text-accent-foreground hover:text-primary text-sm font-medium transition-colors cursor-pointer"
                      >
                        {item.text}
                        <span className="text-accent-foreground/30 mx-4">|</span>
                      </button>
                    ) : (
                      <Link
                        key={i}
                        to={item.link!}
                        className="inline-flex items-center px-8 text-accent-foreground hover:text-primary text-sm font-medium transition-colors"
                      >
                        {item.text}
                        <span className="text-accent-foreground/30 mx-4">|</span>
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </header>
    </>
  );
}