import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const START_DATE = new Date('2026-05-06');
START_DATE.setHours(0, 0, 0, 0);
const TOTAL_PDFS = 1;

function getPdfIndex(): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysSince = Math.floor((today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24));
  return (((daysSince % TOTAL_PDFS) + TOTAL_PDFS) % TOTAL_PDFS) + 1;
}

function getHebrewDate(): string {
  return new Intl.DateTimeFormat('he-IL-u-ca-hebrew', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}

function getGregorianDate(): string {
  return new Intl.DateTimeFormat('he-IL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}

export default function HalachaYomit() {
  const pdfIndex = getPdfIndex();
  const hebrewDate = getHebrewDate();
  const gregorianDate = getGregorianDate();

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#0f1a2e]" dir="rtl">

        {/* Hero */}
        <section className="relative pt-32 pb-12 overflow-hidden flex items-center justify-center text-center">
          <img src="/shomron.jpg" alt="השומרון" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-yellow-400 blur-3xl" />
            <div className="absolute bottom-10 left-20 w-56 h-56 rounded-full bg-blue-400 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-4">
            <span className="inline-block bg-yellow-400/20 text-yellow-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-yellow-400/30">
              📖 לימוד יומי
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              הלכה יומית
            </h1>
            <p className="text-white/70 text-lg mb-2">{gregorianDate}</p>
            <p className="text-yellow-300 font-semibold text-xl">{hebrewDate}</p>
          </div>
        </section>

        {/* PDF Viewer */}
        <section className="max-w-4xl mx-auto px-4 pb-16 -mt-4">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

            {/* כותרת הכרטיס */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="text-white/50 text-sm">הלכה מספר {pdfIndex}</span>
              <span className="text-yellow-300 font-semibold text-sm">📜 קריאה בלבד</span>
            </div>

            {/* PDF */}
            <div
              className="relative w-full"
              style={{ height: '78vh' }}
              onContextMenu={(e) => e.preventDefault()}
            >
              <iframe
                src={`/halakha.pdf#toolbar=0&navpanes=0&statusbar=0&view=FitH`}
                className="w-full h-full border-0"
                title={`הלכה יומית – ${hebrewDate}`}
                sandbox="allow-same-origin allow-scripts"
              />
              {/* שכבה שקופה למניעת תפריט הורדה */}
              <div
                className="absolute inset-0 pointer-events-none select-none"
                style={{ zIndex: 1 }}
              />
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
