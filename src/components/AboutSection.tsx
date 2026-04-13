import { BookOpen, Home, Award, Coins, MapPin, Scale } from 'lucide-react';

const FEATURES = [
  { icon: MapPin, text: 'קהילה חמה בהרי השומרון' },
  { icon: BookOpen, text: 'לימוד עמוק ומקיף' },
  { icon: Home, text: 'מגורים מסובסדים' },
  { icon: Coins, text: 'מלגה גבוהה במיוחד' },
  { icon: MapPin, text: 'שכונת נופי אלחנן' },
  { icon: Scale, text: 'בית דין מוכר' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="text-accent font-bold text-sm tracking-wide mb-2 block">על המכון</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            מקום שנותן לך{' '}
            <span className="text-gradient-gold">לגדול בתורה</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            המכון הגבוה ללימודי דיינות "כרמי המשפט" ענב הוקם לפני כשש עשרה שנה על ידי אנשי מפתח ביישוב, מתוך חזון להיות עמוד של תורה המאיר לישוב כולו ולציבור הרחב. עיקר הלומדים עמלים במסלול לימודי דיינות — ורבים כבר עברו בהצלחה בחינות וסמיכה, ויצאו אל שדה החינוך, ההוראה, והרבנות.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            לצד לימודי הדיינות פועל מסלול לימודי רבנות עיר, ובשנת תשע&quot;ו הוקם מכון "רזי המשפט" לזכר הרב רזיאל שבח הי&quot;ד שלמד בכולל.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {FEATURES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-foreground">
                <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Card */}
        <div className="relative">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="text-6xl mb-4">❝</div>
            <blockquote className="font-display text-xl text-foreground leading-relaxed mb-4">
              "ללמוד וללמד,
              <br /> לשמור ולעשות"
            </blockquote>
            <p className="text-muted-foreground text-sm">📜 ייעוד בית המדרש</p>

            <div className="mt-8 flex items-center gap-6">
              <div className="bg-accent/10 rounded-xl px-4 py-3 text-center">
                <div className="text-accent font-bold text-sm">תשפ&quot;ז</div>
                <div className="text-xs text-muted-foreground">ההרשמה פתוחה!</div>
              </div>
              <div className="bg-primary/5 rounded-xl px-4 py-3 text-center">
                <div className="text-primary font-bold text-lg">100+</div>
                <div className="text-xs text-muted-foreground">בוגרים בשדה</div>
              </div>
            </div>
          </div>
          {/* Decorative */}
          <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-accent/10 blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-blue-sky/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
