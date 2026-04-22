import { Link } from 'react-router-dom';
import { useState } from 'react';

type NewsItem = {
  text: string;
  link?: string | null;
  image?: string | null;
  pdf?: string | null;
  formLink?: string | null;
};

type LightboxState = {
  image: string;
  pdf?: string | null;
  formLink?: string | null;
};

const NEWS_ITEMS: NewsItem[] = [
  { text: '📢 ההרשמה למסלול דיינות תשפ״ז פתוחה!', image: '/גיוס_אברכים.jpg' },
  { text: '⚖️ בית הדין לממונות – סניף חדש ברמת השרון', link: '/beit-din' },
  {
    text: '🏆 תחרות מאמרים: הלכה ובינה מלאכותית',
    image: '/תחרות_מאמרים.jpg',
    pdf: '/maamarim-rules.pdf',
    formLink: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScVNJRiFvdaTp-2ff_qgfgVmqcXyKol4OoOb19UYyd7TA7THg/formResponse',
  },
  { text: '🤝 הצטרפו לתוכנית יששכר וזבולון', link: '/donations' },
];

export default function NewsTicker() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  return (
    <>
      <style>{`
        @keyframes ticker-rtl {
          0% { transform: translateX(0); }
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
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 left-0 text-white text-2xl font-bold hover:text-gray-300"
            >
              ✕
            </button>

            <img
              src={lightbox.image}
              alt="news"
              className="w-full h-auto rounded-xl shadow-2xl max-h-[70vh] object-contain"
            />

            {(lightbox.pdf || lightbox.formLink) && (
              <div className="flex gap-3 justify-center mt-4">
                {lightbox.pdf && (
                  <a
                    href={lightbox.pdf}
                    download
                    className="bg-white text-primary font-semibold px-5 py-2.5 rounded-xl shadow hover:bg-gray-50 text-sm"
                  >
                    📄 הורד תקנון PDF
                  </a>
                )}

                {lightbox.formLink && (
                  <a
                    href={lightbox.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white font-semibold px-5 py-2.5 rounded-xl shadow hover:bg-primary/90 text-sm"
                  >
                    📝 הרשמה לתחרות
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Ticker */}
      <div className="fixed top-16 inset-x-0 z-30 bg-accent/95 backdrop-blur-md border-b border-accent/20 shadow-sm overflow-hidden">
        <div className="h-12 flex items-end pb-2">
          <div className="ticker-wrapper">
            {[0, 1].map((copy) => (
              <div key={copy} className="ticker-track" aria-hidden={copy === 1}>
                {NEWS_ITEMS.map((item, i) =>
                  item.image ? (
                    <button
                      key={i}
                      onClick={() =>
                        setLightbox({
                          image: item.image,
                          pdf: item.pdf,
                          formLink: item.formLink,
                        })
                      }
                      className="inline-flex items-center px-8 text-sm font-medium hover:text-primary transition-colors"
                    >
                      {item.text}
                      <span className="mx-4 opacity-30">|</span>
                    </button>
                  ) : (
                    <Link
                      key={i}
                      to={item.link ?? '#'}
                      className="inline-flex items-center px-8 text-sm font-medium hover:text-primary transition-colors"
                    >
                      {item.text}
                      <span className="mx-4 opacity-30">|</span>
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