import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

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
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date());
}

export default function HalachaYomit() {
  useEffect(() => { document.title = 'הלכה יומית | כולל ענב'; }, []);
  const [containerWidth, setContainerWidth] = useState(800);
  const page = getCurrentPage();
  const hebrewDate = getHebrewDate();
  const gregorianDate = getGregorianDate();

  useEffect(() => {
    const update = () => setContainerWidth(Math.min(window.innerWidth - 32, 900));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

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

            <div className="flex items-center justify-end px-6 py-4 border-b border-white/10">
              <span className="text-yellow-300 font-semibold text-sm">📜 קריאה בלבד</span>
            </div>

            <div
              className="flex justify-center py-4 select-none"
              onContextMenu={(e) => e.preventDefault()}
            >
              <Document
                file="/halakha.pdf"
                loading={<div className="text-white/50 py-20 text-center">טוען...</div>}
                error={<div className="text-red-400 py-20 text-center">שגיאה בטעינת הקובץ</div>}
              >
                <Page
                  pageNumber={page}
                  width={containerWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
