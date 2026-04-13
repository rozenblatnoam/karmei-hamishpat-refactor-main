import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <NewsTicker />
      <main className="pt-24 min-h-screen">
        <section className="section-container py-16">
          <h1 className="font-display text-4xl font-bold text-primary mb-8 text-center">צור קשר</h1>
          <div className="max-w-3xl mx-auto space-y-6 text-foreground/80 leading-relaxed text-right">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-muted/50 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold text-primary mb-3">פרטי התקשרות</h3>
                  <ul className="space-y-3">
                    <li>📞 054-659-7850</li>
                    <li>📧 karmeimishpat@gmail.com</li>
                    <li>📍ענב, רחוב המכבים 5</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold text-primary mb-3">שעות פעילות</h3>
                  <ul className="space-y-2">
                    <li>ימים א׳–ה׳: 09:00–17:00</li>
                    <li>יום ו׳ וערבי חג: 09:00–13:00</li>
                    <li>שבתות וחגים: סגור</li>
                  </ul>
                </div>
              </div>
              <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-primary mb-4">השאירו פרטים</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium mb-1">שם מלא</label>
                    <input type="text" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm" placeholder="הכנס שם מלא" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">טלפון</label>
                    <input type="tel" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm" placeholder="050-0000000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">דוא"ל</label>
                    <input type="email" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">הודעה</label>
                    <textarea rows={4} className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm" placeholder="כתבו את הודעתכם כאן..." />
                  </div>
                  <button type="submit" className="w-full bg-primary text-primary-foreground rounded-lg py-2 font-medium hover:bg-primary/90 transition-colors">
                    שלח
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
