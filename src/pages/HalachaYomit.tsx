import { useEffect } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { useIsMobile } from '@/hooks/use-mobile';

const START_DATE = new Date('2026-05-06');
START_DATE.setHours(0, 0, 0, 0);
const START_PAGE = 243;

function getCurrentPage(): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysSince = Math.floor((today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24));
  return START_PAGE + daysSince;
}

function toHebrewLetters(n: number): string {
  const hundreds = ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק'];
  const tens    = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
  const ones    = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
  let result = '';
  if (n >= 100) { result += hundreds[Math.floor(n / 100)]; n %= 100; }
  if (n === 15) return result + 'טו';
  if (n === 16) return result + 'טז';
  if (n >= 10)  { result += tens[Math.floor(n / 10)]; n %= 10; }
  return result + ones[n];
}

function addGershayim(s: string): string {
  if (s.length <= 1) return s + '׳';
  return s.slice(0, -1) + '״' + s.slice(-1);
}

function getHebrewDate(): string {
  const parts = new Intl.DateTimeFormat('he-IL-u-ca-hebrew', {
    day: 'numeric', month: 'long', year: 'numeric',
  }).formatToParts(new Date());
  const day   = parseInt(parts.find(p => p.type === 'day')?.value  ?? '0');
  const month = parts.find(p => p.type === 'month')?.value ?? '';
  const year  = parseInt(parts.find(p => p.type === 'year')?.value ?? '0');
  return `${addGershayim(toHebrewLetters(day))} ב${month} ${addGershayim(toHebrewLetters(year % 1000))}`;
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
  useEffect(() => { document.title = 'הלכה יומית | כולל ענב'; }, []);
  const isMobile = useIsMobile();
  const page = getCurrentPage();
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
            <div className="flex items-center justify-end px-6 py-4 border-b border-white/10">
              <span className="text-yellow-300 font-semibold text-sm">📜 קריאה בלבד</span>
            </div>

            {/* PDF */}
            {isMobile ? (
              <div className="flex flex-col items-center justify-center gap-6 py-16 px-6 text-center">
                <span className="text-6xl">📖</span>
                <p className="text-white/70 text-base">
                  לצפייה בהלכה היומית לחץ על הכפתור – הקובץ ייפתח בדפדפן שלך
                </p>
                <a
                  href={`/halakha.pdf#page=${page}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl text-lg transition-colors shadow-lg"
                >
                  פתח את הלכה יומית
                </a>
              </div>
            ) : (
              <div
                className="relative w-full"
                style={{ height: '78vh' }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <iframe
                  src={`/halakha.pdf#page=${page}&toolbar=0&navpanes=0`}
                  className="w-full h-full border-0"
                  title={`הלכה יומית – ${hebrewDate}`}
                />
                <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 1 }} />
              </div>
            )}
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
