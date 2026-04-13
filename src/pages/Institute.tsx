import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

const teamMembers = [
  {
    name: 'הרב אוריאל אליהו',
    role: 'נשיא המכון | דיין בבית הדין הרבני נתניה',
    image: '/הרב-אליהו.jpg',
    bio: [
      'הרב אוריאל אליהו נולד בשנת תשל"ו. למד בישיבת מרכז הרב, הר המור, ובכולל "ארץ חמדה". קיבל הסמכת "ידין ידין" מהרבנות הראשית ומהגאון הרב זלמן נחמיה גולדברג חבר ביה"ד הגדול לשעבר.',
      'עם סיום מסלול הדיינות עבר עם משפחתו לישוב ענב שבצפון השומרון, שם כיהן כראש כולל דיינות "כרמי המשפט" וכדיין ואב"ד בבית הדין לממונות. באלול תשע"ח התמנה לדיין בבית הדין הרבני, ומחשוון תשע"ט מכהן בבית הדין הרבני בנתניה. משמש כיום כנשיא כולל \'כרמי המשפט\'.',
    ],
  },
  {
    name: 'הרב יהונתן ארנברג',
    role: 'ראש המכון',
    image: '/הרב-יהונתן-תמונה.png',
    bio: [
      'הרב יהונתן דוד ארנברג, נשוי ואב לשישה, תושב הישוב ענב. בוגר ישיבת ההסדר בירוחם, השלים לימודי רבנות ודיינות בכולל \'ארץ חמדה\' בירושלים. בעל הסמכה לרבנות ולדיינות מהרבנות הראשית.',
      'שימש כעשר שנים כרב קהילת \'עטרת שלום\' בבית שמש, ולאחר מכן כר"מ לעיון והלכה בישיבת \'תורה בציון\' בירושלים ובאפרת. מקיץ תשפ"א משמש כראש כולל \'כרמי המשפט\' לדיינות ולרבנות בישוב ענב.',
    ],
  },
  {
    name: 'הרב עומר יוסף',
    role: 'ראש מכון "רזי המשפט" | חוקר בכיר | רב הישוב ענב',
    image: '/הרב-עומר.jpg',
    bio: [
      'הוסמך לרב שכונה בשנת תשע"ב, ולרב העיר בשנת תשע"ו. דיין בבית הדין ענב משנת תשע"ו, הוסמך לדיינות על ידי הרבנות הראשית.',
      'בשנת תשע"ט קיבל הסמכה נוספת לדיינות מהרב אליקים לבנון והרב אוריאל אליהו. בוגר קורס גישור ומשמש כרב הישוב ענב.',
    ],
  },
];

export default function Institute() {
  return (
    <>
      <SiteHeader />
      <NewsTicker />
      <main className="pt-24 min-h-screen">
        <section className="section-container py-16">

          {/* כותרת */}
          <h1 className="font-display text-4xl font-bold text-primary mb-8 text-center">
            מכון 'כרמי המשפט': תורה, מצוינות והתיישבות
          </h1>

          {/* Hero Image */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-110"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
                <img
                  src="/machon.jpg"
                  alt="חברי מכון כרמי המשפט"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-foreground/80 leading-relaxed text-right">

            {/* פתיחה */}
            <p>
              מכון 'כרמי המשפט' הוקם באלול תש"ע (2010), מתוך חזון להנחיל את משפט התורה בקרב
              קהלים רחבים ולהצמיח דור חדש של דיינים ומנהיגי ציבור. המכון מהווה מוקד של עומק
              תורני המשולב בעשייה חברתית וחינוכית בישוב ענב ובשומרון כולו.
            </p>

            {/* הנהגת המכון */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-3">הנהגת המכון</h2>
              <ul className="space-y-2 list-none">
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>ראש המכון:</strong> הרב יהונתן ארנברג שליט"א</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>נשיא המכון:</strong> הרב אוריאל אליהו שליט"א</span>
                </li>
              </ul>
            </div>

            {/* מסלול הכשרה */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-3">
                מסלול הכשרת הדיינות: שמונה שנים של מחויבות
              </h2>
              <p>
                לב המכון פועל סביב תוכנית הכשרה ייחודית, בה רבנים מצוינים מקדישים שמונה שנים של
                לימוד אינטנסיבי במשרה מלאה, תוך עמידה בסטנדרטים הגבוהים ביותר:
              </p>
              <ul className="mt-3 space-y-2 list-none">
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>הסמכה ממלכתית:</strong> חוקרי המכון עומדים בסדרת המבחנים של הרבנות
                    הראשית לישראל לקבלת הסמכת 'ידין ידין' הרשמית.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>הישגים יוצאי דופן:</strong> המכון מתגאה ב-100% הצלחה של הנבחנים
                    בכלל המבחנים – עדות לרמת הלימוד הגבוהה ולליווי המקצועי הצמוד.
                  </span>
                </li>
              </ul>
            </div>

            {/* תורה שמחוברת לחיים */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-3">
                תורה שמחוברת לחיים ולישוב הארץ
              </h2>
              <p>חברי המכון אינם מסתפקים בלימוד עיוני, אלא מהווים חלק בלתי נפרד מהמרקם הקהילתי:</p>
              <ul className="mt-3 space-y-2 list-none">
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>רבנות וחינוך:</strong> חוקרי המכון משמשים בתפקידי "רב גן", מפעילים
                    חוגי תלמוד תורה לילדים ומעבירים שיעורי תורה לציבור הרחב לאורך כל השבוע.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong>חלוציות בשומרון:</strong> מתוך אמונה בערך יישוב הארץ, קבעו רוב חברי
                    המכון את ביתם בישוב ענב, ובכך הם מחברים בין עומק התורה לבניין הארץ בפועל.
                  </span>
                </li>
              </ul>
            </div>

            {/* אבני דרך */}
            <div className="bg-muted/50 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-primary mb-5">אבני דרך מרכזיות</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap mt-0.5">
                    תשע"ב
                  </span>
                  <p>
                    הקמת בית הדין לממונות, המעניק מענה מקצועי בתחומי המשפט העברי והמעמד האישי
                    לבעלי דין מכל רחבי הארץ.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap mt-0.5">
                    תשע"ט
                  </span>
                  <p>
                    טקס סיום חגיגי למחזור הבוגרים הראשון, במעמד הרב הראשי לישראל הרב דוד לאו
                    שליט"א ורב השומרון הרב אליקים לבנון שליט"א.
                  </p>
                </div>
              </div>
            </div>

            {/* סיום */}
            <div className="text-center pb-2">
              <p className="text-foreground/60 text-sm leading-relaxed">
                פעילות מכון 'כרמי המשפט' מתאפשרת הודות לתמיכתם של אוהבי תורה, השותפים עמנו
                במפעל של השבת משפט התורה למרכז החיים הציבוריים.
              </p>
            </div>

          </div>

          {/* ===== סקשן צוות ===== */}
          <div className="max-w-4xl mx-auto mt-20">

            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="h-px flex-1 bg-border/50 max-w-xs"></div>
              <h2 className="font-display text-3xl font-bold text-primary whitespace-nowrap">
                הצוות שלנו
              </h2>
              <div className="h-px flex-1 bg-border/50 max-w-xs"></div>
            </div>

            <div className="space-y-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`flex flex-col md:flex-row gap-8 items-start bg-muted/30 rounded-2xl p-6 md:p-8 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* תמונה */}
                  <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/15 blur-xl rounded-full scale-110"></div>
                      <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>

                  {/* תוכן */}
                  <div className="flex-1 text-right">
                    <h3 className="font-display text-xl font-bold text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-foreground/50 mb-4 tracking-wide">
                      {member.role}
                    </p>
                    <div className="text-foreground/70 leading-relaxed text-sm space-y-2">
                      {member.bio.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      </main>
      <SiteFooter />
    </>
  );
}