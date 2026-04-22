import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

const teamMembers = [
  {
    name: 'הרב אוריאל אליהו',
    role: 'נשיא המכון | אב"ד בבית הדין הרבני נתניה',
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

const milestones = [
  { year: 'תשע"ב', text: 'הקמת בית הדין לממונות, המעניק מענה מקצועי בתחומי המשפט העברי והמעמד האישי לבעלי דין מכל רחבי הארץ.' },
  { year: 'תשע"ח', text: 'הפעלת המיזם החינוכי - תוכנית דיינים צעירים - בסוד המשפט.' },
  { year: 'תשע"ט', text: 'טקס סיום חגיגי למחזור הבוגרים הראשון, במעמד הרב הראשי לישראל הרב דוד לאו שליט"א ורב השומרון הרב אליקים לבנון שליט"א.' },
  { year: 'תש"פ', text: 'פתיחת מסלול לימוד לרבנות שכונה ועיר.' },
  { year: 'תשפ"ד', text: 'כנס הוצאת ספרו הראשון של הדיין הרב אוריאל אליהו - נשיא המכון.' },
];

export default function Institute() {
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
              <span className="text-sm font-medium">המכון הגבוה ללימודי דיינות</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              מכון 'כרמי המשפט'
            </h1>
            <p className="text-yellow-400 text-2xl sm:text-3xl font-bold mb-8">
              תורה, מצוינות והתיישבות
            </p>

            {/* תמונת הצוות */}
            <div
              className="max-w-2xl mx-auto rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
            >
              <img
                src="/machon.jpg"
                alt="חברי מכון כרמי המשפט"
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* ===== תוכן ראשי ===== */}
        <section className="relative overflow-hidden">
          <img src="/shomron.jpg" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-white space-y-16">

            {/* פתיחה */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6">
                <span className="text-sm">✦</span>
                <span className="text-sm font-medium">אודות המכון</span>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">
                מכון 'כרמי המשפט' הוקם באלול תש"ע (2010), מתוך חזון להנחיל את משפט התורה בקרב קהלים רחבים ולהצמיח דור חדש של דיינים ומנהיגי ציבור. המכון מהווה מוקד של עומק תורני המשולב בעשייה חברתית וחינוכית בישוב ענב ובשומרון כולו.
              </p>
            </div>

            {/* הנהגת המכון */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-5">הנהגת המכון</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'ראש המכון', name: 'הרב יהונתן ארנברג שליט"א' },
                  { label: 'נשיא המכון', name: 'הרב אוריאל אליהו שליט"א' },
                ].map(({ label, name }) => (
                  <div key={label} className="flex items-center gap-3 px-5 py-4 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm">
                    <span className="text-yellow-400 text-lg">✦</span>
                    <div>
                      <div className="text-white/50 text-xs mb-0.5">{label}</div>
                      <div className="text-white font-semibold">{name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* מסלול הכשרה */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-4">
                מסלול הכשרת הדיינות: שמונה שנים של מחויבות
              </h2>
              <p className="text-white/75 leading-relaxed mb-5">
                לב המכון פועל סביב תוכנית הכשרה ייחודית, בה רבנים מצוינים מקדישים שמונה שנים של לימוד אינטנסיבי במשרה מלאה, תוך עמידה בסטנדרטים הגבוהים ביותר:
              </p>
              <div className="space-y-3">
                {[
                  { title: 'הסמכה ממלכתית', text: 'חוקרי המכון עומדים בסדרת המבחנים של הרבנות הראשית לישראל לקבלת הסמכת \'ידין ידין\' הרשמית.' },
                  { title: 'הישגים יוצאי דופן', text: 'המכון מתגאה ב-100% הצלחה של הנבחנים בכלל המבחנים – עדות לרמת הלימוד הגבוהה ולליווי המקצועי הצמוד.' },
                ].map(({ title, text }) => (
                  <div key={title} className="flex gap-3 px-5 py-4 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">✦</span>
                    <p className="text-white/80 text-sm leading-relaxed">
                      <strong className="text-white">{title}: </strong>{text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* תורה שמחוברת לחיים */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.35s both' }}>
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-4">
                תורה שמחוברת לחיים ולישוב הארץ
              </h2>
              <p className="text-white/75 leading-relaxed mb-5">
                חברי המכון אינם מסתפקים בלימוד עיוני, אלא מהווים חלק בלתי נפרד מהמרקם הקהילתי:
              </p>
              <div className="space-y-3">
                {[
                  { title: 'רבנות וחינוך', text: 'לומדי המכון שותפים בחיזוק לימוד התורה והוראת התורה בישוב ובשומרון. הלומדים מעבירים שיעורי תורה, מורים הלכה ופוסקים בדיני ממונות, משמשים כרבני בתי כנסת ומחזקים את לימוד התורה של הנוער והילדים.' },
                  { title: 'חלוציות בשומרון', text: 'מתוך אמונה בערך יישוב הארץ, קבעו רוב חברי המכון את ביתם בישוב ענב, ובכך הם מחברים בין עומק התורה לבניין הארץ בפועל.' },
                ].map(({ title, text }) => (
                  <div key={title} className="flex gap-3 px-5 py-4 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm">
                    <span className="text-yellow-400 mt-0.5 flex-shrink-0">✦</span>
                    <p className="text-white/80 text-sm leading-relaxed">
                      <strong className="text-white">{title}: </strong>{text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* אבני דרך */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-6">אבני דרך מרכזיות</h2>
              <div className="space-y-4">
                {milestones.map(({ year, text }) => (
                  <div key={year} className="flex gap-4 items-start px-5 py-4 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm">
                    <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap mt-0.5 flex-shrink-0">
                      {year}
                    </span>
                    <p className="text-white/75 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ציטוט סיום */}
            <blockquote
              className="px-6 py-5 border-r-2 border-white/30 text-white/65 italic text-center"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}
            >
              <p className="mb-2">"וְהָיָה אֱמוּנַת עִתֶּיךָ חֹסֶן יְשׁוּעֹת חָכְמַת וָדָעַת"</p>
              <cite className="text-xs text-white/35 not-italic">— ישעיהו ל"ג, ו'</cite>
            </blockquote>

          </div>
        </section>

        {/* ===== צוות ===== */}
        <section className="relative overflow-hidden py-20">
          <img src="/shomron.jpg" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full bg-yellow-400 blur-3xl -translate-x-1/2" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">
            <div className="flex items-center gap-4 mb-14 justify-center" style={{ animation: 'fadeInUp 0.6s ease-out both' }}>
              <div className="h-px flex-1 bg-white/20 max-w-xs" />
              <h2 className="font-display text-3xl font-bold text-yellow-400 whitespace-nowrap">הצוות שלנו</h2>
              <div className="h-px flex-1 bg-white/20 max-w-xs" />
            </div>

            <div className="space-y-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`flex flex-col md:flex-row gap-8 items-start rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm p-6 md:p-8 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animation: `fadeInUp 0.6s ease-out ${0.1 + index * 0.15}s both` }}
                >
                  <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full scale-110" />
                      <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white/30 shadow-lg overflow-hidden bg-gray-800">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="font-display text-xl font-bold text-yellow-400 mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-white/45 mb-4 tracking-wide">{member.role}</p>
                    <div className="text-white/70 leading-relaxed text-sm space-y-2">
                      {member.bio.map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                  </div>
                </div>
              ))}
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