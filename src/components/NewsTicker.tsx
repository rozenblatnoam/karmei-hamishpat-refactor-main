import { Link } from 'react-router-dom';

type NewsItem = {
  text: string;
  link?: string;
  image?: string;
  pdf?: string;
  formLink?: string;
};

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
    formLink: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScVNJRiFvdaTp-2ff_qgfgVmqcXyKol4OoOb19UYyd7TA7THg/formResponse',
  },
  {
    text: '🤝 הצטרפו לתוכנית יששכר וזבולון',
    link: '/donations',
  },
];

function handleImageItem(item: NewsItem) {
  // פותח חלון מודאל פשוט עם התמונה
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 999999;
    background: rgba(0,0,0,0.85);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 24px; cursor: pointer;
  `;

  const img = document.createElement('img');
  img.src = item.image!;
  img.style.cssText = `
    max-width: 90vw; max-height: 70vh;
    object-fit: contain; border-radius: 12px;
    box-shadow: 0 25px 50px rgba(0,0,0,0.5);
    cursor: default;
  `;

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕ סגור';
  closeBtn.style.cssText = `
    margin-top: 16px; color: white; background: rgba(255,255,255,0.2);
    border: 1px solid rgba(255,255,255,0.4); border-radius: 8px;
    padding: 8px 20px; font-size: 16px; cursor: pointer;
  `;

  const btnRow = document.createElement('div');
  btnRow.style.cssText = 'display: flex; gap: 12px; margin-top: 16px; flex-wrap: wrap; justify-content: center;';

  if (item.pdf) {
    const pdfBtn = document.createElement('a');
    pdfBtn.href = item.pdf;
    pdfBtn.download = '';
    pdfBtn.textContent = '📄 הורד תקנון PDF';
    pdfBtn.style.cssText = `
      background: white; color: black; font-weight: 600;
      padding: 10px 20px; border-radius: 12px;
      text-decoration: none; font-size: 14px;
    `;
    btnRow.appendChild(pdfBtn);
  }

  if (item.formLink) {
    const formBtn = document.createElement('a');
    formBtn.href = item.formLink;
    formBtn.target = '_blank';
    formBtn.rel = 'noopener noreferrer';
    formBtn.textContent = '📝 הרשמה לתחרות';
    formBtn.style.cssText = `
      background: #2563eb; color: white; font-weight: 600;
      padding: 10px 20px; border-radius: 12px;
      text-decoration: none; font-size: 14px;
    `;
    btnRow.appendChild(formBtn);
  }

  overlay.appendChild(img);
  overlay.appendChild(btnRow);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  const close = () => document.body.removeChild(overlay);
  overlay.addEventListener('click', close);
  img.addEventListener('click', (e) => e.stopPropagation());
  btnRow.addEventListener('click', (e) => e.stopPropagation());
  closeBtn.addEventListener('click', close);
}

export default function NewsTicker() {
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

      {/* Ticker */}
      <div className="fixed top-16 inset-x-0 z-30 bg-white/90 backdrop-blur border-b overflow-hidden">
        <div className="h-12 flex items-center">
          <div className="ticker-wrapper">
            {[0, 1].map((copy) => (
              <div key={copy} className="ticker-track" aria-hidden={copy === 1}>
                {NEWS_ITEMS.map((item, i) =>
                  item.image ? (
                    <button
                      key={i}
                      onClick={() => handleImageItem(item)}
                      className="flex items-center px-8 text-sm font-medium hover:text-blue-600 transition-colors"
                    >
                      {item.text}
                      <span className="mx-4 opacity-30">|</span>
                    </button>
                  ) : (
                    <Link
                      key={i}
                      to={item.link || '#'}
                      className="flex items-center px-8 text-sm font-medium hover:text-blue-600 transition-colors"
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