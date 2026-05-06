import { useState } from "react";
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xaqandzz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  }

  const inputClass =
    "w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/50 transition";

  return (
    <>
      <SiteHeader />
      <NewsTicker />

      <main className="min-h-screen" dir="rtl">

        {/* ===== Hero Banner ===== */}
        <section className="relative pt-32 pb-24 overflow-hidden flex items-center justify-center text-center">
          <img src="/shomron.jpg" alt="השומרון" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-yellow-400 blur-3xl" />
            <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
          </div>

          <div className="relative z-10 text-white px-6" style={{ animation: 'fadeInUp 0.6s ease-out both' }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8">
              <span className="text-sm">✦</span>
              <span className="text-sm font-medium">אנחנו כאן בשבילכם</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              צור קשר
            </h1>
            <p className="text-yellow-400 text-xl sm:text-2xl font-bold mb-4">
              כרמי המשפט – ענב
            </p>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              נשמח לענות על כל שאלה, לקבל פניות ולעמוד לרשותכם
            </p>
          </div>
        </section>

        {/* ===== תוכן ===== */}
        <section className="relative overflow-hidden">
          <img src="/shomron.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-white">
            <div className="grid md:grid-cols-2 gap-8 text-right">

              {/* מידע */}
              <div className="space-y-5" style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>

                <div className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm p-6">
                  <h3 className="font-display text-lg font-bold text-yellow-400 mb-4">פרטי התקשרות</h3>
                  <ul className="space-y-3 text-white/80 text-sm">
                    <li className="flex items-center gap-3">
                      <span>📞</span>
                      <a href="tel:054-659-7850" className="hover:text-yellow-400 transition-colors">054-659-7850</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span>📧</span>
                      <a href="mailto:karmeimishpat@gmail.com" className="hover:text-yellow-400 transition-colors">karmeimishpat@gmail.com</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span>📍</span>
                      <span>ענב, רחוב המכבים 5</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm p-6">
                  <h3 className="font-display text-lg font-bold text-yellow-400 mb-4">שעות פעילות</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li className="flex justify-between">
                      <span className="text-white/50">ימים א׳–ה׳</span>
                      <span>09:00–17:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/50">יום ו׳ וערבי חג</span>
                      <span>09:00–13:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white/50">שבתות וחגים</span>
                      <span>סגור</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* טופס */}
              <div
                className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm p-6"
                style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
              >
                <h3 className="font-display text-lg font-bold text-yellow-400 mb-5">השאירו פרטים</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value="פנייה חדשה מהאתר" />
                  <input type="text" name="_gotcha" className="hidden" />

                  <div>
                    <label className="block text-white/60 text-xs mb-1.5">שם מלא</label>
                    <input name="name" type="text" required className={inputClass} />
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs mb-1.5">טלפון</label>
                    <input name="phone" type="tel" className={inputClass} />
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs mb-1.5">דוא"ל</label>
                    <input name="email" type="email" required className={inputClass} />
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs mb-1.5">הודעה</label>
                    <textarea name="message" rows={4} required className={inputClass} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                      loading
                        ? 'bg-white/20 text-white/40 cursor-not-allowed'
                        : 'bg-yellow-400 text-black hover:bg-yellow-300'
                    }`}
                  >
                    {loading ? 'שולח...' : 'שלח הודעה'}
                  </button>

                  {status === 'success' && (
                    <p className="text-green-400 text-center text-sm mt-2">✅ ההודעה נשלחה בהצלחה!</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-400 text-center text-sm mt-2">❌ שגיאה בשליחה, נסה שוב.</p>
                  )}
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      <SiteFooter />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}