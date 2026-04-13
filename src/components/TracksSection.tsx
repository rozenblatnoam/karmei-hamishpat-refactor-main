import { Scale, Landmark, Star, ScrollText, Bot, Monitor } from 'lucide-react';

const TRACKS = [
  {
    icon: Scale,
    title: 'לימודי דיינות',
    desc: 'מסלול מרכזי ומקיף: חושן משפט, אבן העזר, הלכה למעשה ופסיקה. מוביל לסמיכת דיינות מוכרת.',
    cta: 'הרשמה למסלול',
  },
  {
    icon: Landmark,
    title: 'רבנות עיר',
    desc: 'מסלול רבנות עם דגש על הלכה יומית, מנהגים ומנהיגות קהילתית. לבוגרים המבקשים לשמש כרבני קהילות.',
    cta: 'מידע נוסף',
  },
  {
    icon: Star,
    title: 'דיינים צעירים',
    desc: 'תוכנית ייחודית לדיינים צעירים. קבוצות לימוד עם מדריכים בכירים, מותאמת לקצב ולרמה.',
    cta: 'פרטי התוכנית',
  },
  {
    icon: ScrollText,
    title: 'מכון רזי המשפט',
    desc: 'מכון מחקר תורני לזכר הרב רזיאל שבח הי"ד. סוגיות הלכה עכשוויות, מאמרים ופסקי הלכה.',
    cta: 'אתר המכון',
  },
  {
    icon: Bot,
    title: 'הלכה ו-AI',
    desc: 'תחרות מאמרים תשפ"ו: חושן משפט לאור הבינה המלאכותית ורכבים אוטונומיים – חזית הפסיקה.',
    cta: 'לתחרות המאמרים',
  },
  {
    icon: Monitor,
    title: 'שיעורים מקוונים',
    desc: 'ספריית שיעורי וידאו ושמע נרחבת: פרשת השבוע, הלכה יומית, מועדים, חושן משפט ועוד.',
    cta: 'לספריית השיעורים',
  },
];

export default function TracksSection() {
  return (
    <section id="tracks" className="py-24 bg-secondary/30">
      <div className="section-container text-center mb-16">
        <span className="text-accent font-bold text-sm tracking-wide">מסלולי הלימוד</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">
          בחר את המסלול שלך
        </h2>
      </div>

      <div className="section-container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRACKS.map(({ icon: Icon, title, desc, cta }) => (
          <div
            key={title}
            className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
            <a
              href="#contact"
              className="text-accent font-medium text-sm hover:underline"
            >
              {cta} ←
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
