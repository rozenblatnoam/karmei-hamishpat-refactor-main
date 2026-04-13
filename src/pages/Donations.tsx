import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

export default function Donations() {
  return (
    <>
      <SiteHeader />
      <NewsTicker />
      <main className="pt-24 min-h-screen">
        <section className="section-container py-16">
          <h1 className="font-display text-4xl font-bold text-primary mb-8 text-center">תרומות</h1>
          <div className="max-w-3xl mx-auto space-y-6 text-foreground/80 leading-relaxed text-right">
            <p>
              המכון הגבוה ללימודי דיינות "כרמי המשפט" פועל ומתקיים בזכות תרומותיהם הנדיבות
              של שותפים ותומכים. תרומתכם מאפשרת להמשיך ולהכשיר דור חדש של דיינים, לקיים
              בתי דין נגישים לציבור, ולפרסם חיבורים תורניים חשובים.
            </p>
            <div className="bg-muted/50 rounded-2xl p-8 mt-8">
              <h2 className="font-display text-2xl font-bold text-primary mb-6 text-center">תוכנית יששכר וזבולון</h2>
              <p className="mb-4">
                הצטרפו לתוכנית "יששכר וזבולון" – שותפות אמיתית בלימוד התורה. התורמים
                זוכים לחלק שווה בזכות הלימוד של תלמידי המכון.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background rounded-xl p-4 border border-border/50">
                  <h3 className="font-bold text-primary mb-2">מסלול חודשי</h3>
                  <p className="text-sm">תרומה חודשית קבועה – שותפות רציפה בתורה</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border/50">
                  <h3 className="font-bold text-primary mb-2">מסלול שנתי</h3>
                  <p className="text-sm">תרומה שנתית – שותפות מלאה בבניין התורה והמשפט בשומרון</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground text-sm">לפרטים נוספים על אפשרויות תרומה, צרו קשר:</p>
              <p className="font-bold text-primary text-lg mt-2">054-659-7850</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
