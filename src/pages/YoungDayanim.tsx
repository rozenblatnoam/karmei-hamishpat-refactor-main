import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

export default function YoungDayanim() {
  return (
    <>
      <SiteHeader />
      <NewsTicker />

      <main className="pt-24 min-h-screen">
        <section className="section-container py-16">

          {/* כותרת */}
          <h1 className="font-display text-4xl font-bold text-primary mb-8 text-center">
            דיינים צעירים
          </h1>

          {/* Hero Image */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-110"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
                <img
                  src="/sodhamishpat.jpg"
                  alt="סוד המשפט"
                  className="w-4/5 h-4/5 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* תוכן */}
          <div className="max-w-3xl mx-auto space-y-8 text-foreground/80 leading-relaxed text-right">

            {/* חזון */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-3">
                חזון
              </h2>
              <p>
                מיזם “דיינים צעירים” מבקש לקרב ילדים ובני נוער ללימוד הגמרא וההלכה בדרך חיה,
                חווייתית ומשמעותית. התוכנית שמה לה למטרה להקנות אהבת תורה, הבנה מעמיקה
                ויכולת יישום בסוגיות מרכזיות בדיני ממונות.
              </p>
            </div>

            {/* הדרך */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-3">
                הדרך
              </h2>
              <p>
                בלב התוכנית עומד מודל ייחודי של בית דין כיתתי פעיל, שבו תלמידי הכיתה לוקחים
                חלק מלא בתהליך הלמידה – כדיינים, כבעלי דין, כעדים וכיועצים. במסגרת זו נידונים
                מקרים אמיתיים מחיי היום-יום, המאפשרים לתלמידים ליישם בפועל את הסוגיות הנלמדות.
              </p>
              <p className="mt-3">
                הפעילות מתקיימת בליווי והכוונה מקצועית של רבני המכון, בשיתוף המחנכים והמורים,
                תוך דגש על למידה פעילה, חשיבה עצמאית ויכולת הסקה מתוך מקורות הגמרא.
              </p>
            </div>

            {/* התוצאה */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-3">
                התוצאה
              </h2>
              <p>
                התלמידים מפתחים חיבור עמוק ללימוד, אחריות אישית, חשיבה חדה ויכולת ניתוח הלכתי –
                תוך חוויה לימודית מעשירה, מרתקת ורלוונטית לחיים.
              </p>
            </div>

            {/* וידאו */}
            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold text-primary mb-6 text-center">
                צפו בפעילות
              </h2>

              <div className="relative w-full overflow-hidden rounded-2xl shadow-xl"
                   style={{ paddingTop: "56.25%" }}>

                <iframe
                  src="https://www.youtube.com/embed/uw-QjeVeR-E"
                  title="סוד המשפט"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

              </div>
            </div>

          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}