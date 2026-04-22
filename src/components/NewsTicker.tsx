import { Link } from 'react-router-dom';
import { useState } from 'react';

type NewsItem = {
  text: string;
  link?: string;
  image?: string;
  pdf?: string;
  formLink?: string;
};

type LightboxState = {
  image: string;
  pdf?: string;
  formLink?: string;
};

const FALLBACK_IMAGE = '/placeholder-news.jpg';

const NEWS_ITEMS: NewsItem[] = [
  {
    text: '📢 ההרשמה למסלול דיינות תשפ״ז פתוחה!',
    image: '/avrechimrecruitment.jpg',
  },
  {
    text: '⚖️ בית הדין לממונות – סניף חדש ברמת השרון',
    link: '/beit-din',
  },
  {
    text: '🏆 תחרות מאמרים: הלכה ובינה מלאכותית',
    image: '/maamarimcompetition.jpg',
    pdf: '/maamarim-rules.pdf',
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLScVNJRiFvdaTp-2ff_qgfgVmqcXyKol4OoOb19UYyd7TA7THg/viewform',
  },
  {
    text: '🤝 הצטרפו לתוכנית יששכר וזבולון',
    link: '/donations',
  },
];

export default function NewsTicker() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const handleImgError = (src: string) => {
    setImgError((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <>
      {/* Styles */}
      <style>{`
        @keyframes ticker-rtl {
          0% { transform: translateX(0); }
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
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 left-0 text-white text-2xl"
            >
              ✕
            </button>

            <img
              src={lightbox.image || FALLBACK_IMAGE}
              alt="news"
              className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
            />

            {(lightbox.pdf || lightbox.formLink) && (
              <div className="flex gap-3 justify-center mt-4">
                {lightbox.pdf && (
                  <a
                    href={lightbox.pdf}
                    download
                    className="bg-white text-black px-4 py-2 rounded-lg"
                  >
                    📄 הורד תקנון
                  </a>
                )}

                {lightbox.formLink && (
                  <a
                    href={lightbox.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    📝 הרשמה
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Ticker */}
      <div className="fixed top-16 inset-x-0 z-30 bg-white/90 backdrop-blur border-b overflow-hidden">
        <div className="h-12 flex items-center">
          <div className="ticker-wrapper">
            {[0, 1].map((copy) => (
              <div key={copy} className="ticker-track">
                {NEWS_ITEMS.map((item, i) => {
                  const hasImage = !!item.image;

                  return hasImage ? (
                    <button
                      key={i}
                      onClick={() =>
                        setLightbox({
                          image: imgError[item.image!] ? FALLBACK_IMAGE : item.image!,
                          pdf: item.pdf,
                          formLink: item.formLink,
                        })
                      }
                      className="flex items-center px-8 text-sm hover:text-blue-600"
                    >
                      <img
                        src={imgError[item.image!] ? FALLBACK_IMAGE : item.image!}
                        onError={() => handleImgError(item.image!)}
                        alt=""
                        className="w-6 h-6 rounded-full mr-2 object-cover"
                      />
                      {item.text}
                      <span className="mx-4 opacity-30">|</span>
                    </button>
                  ) : (
                    <Link
                      key={i}
                      to={item.link || '#'}
                      className="flex items-center px-8 text-sm hover:text-blue-600"
                    >
                      {item.text}
                      <span className="mx-4 opacity-30">|</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}