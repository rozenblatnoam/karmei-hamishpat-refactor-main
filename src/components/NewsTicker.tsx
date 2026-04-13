import { Link } from 'react-router-dom';
import { useState } from 'react';

const NEWS_ITEMS = [
  { text: '📢 ההרשמה למסלול דיינות תשפ"ז פתוחה!', link: null, image: '/גיוס_אברכים.jpg' },
  { text: '⚖️ בית הדין לממונות – סניף חדש ברמת השרון', link: '/beit-din', image: null },
  { text: '🏆 תחרות מאמרים: הלכה ובינה מלאכותית', link: null, image: '/תחרות_מאמרים.jpg' },
  { text: '🤝 הצטרפו לתוכנית יששכר וזבולון', link: '/donations', image: null },
];

export default function NewsTicker() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @keyframes ticker-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(100%); }
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
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 left-0 text-white text-2xl font-bold hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
            <img
              src={lightbox}
              alt="עלון"
              className="w-full h-auto rounded-xl shadow-2xl max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      <div className="fixed top-16 inset-x-0 z-30 bg-accent/95 backdrop-blur-md border-b border-accent/20 shadow-sm overflow-hidden">
        <div className="h-12 flex items-end pb-2">
          <div className="ticker-wrapper">
            {[0, 1].map((copy) => (
              <div key={copy} className="ticker-track" aria-hidden={copy === 1}>
                {NEWS_ITEMS.map((item, i) =>
                  item.image ? (
                    <button
                      key={i}
                      onClick={() => setLightbox(item.image!)}
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
    </>
  );
}