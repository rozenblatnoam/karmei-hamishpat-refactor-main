import { Video, Headphones } from 'lucide-react';

const SAMPLE_SHIURIM = [
  { title: 'דיני שכנים – סוגיות עכשוויות', category: 'חושן משפט', type: 'video' },
  { title: 'הלכות ריבית בעולם המודרני', category: 'הלכה למעשה', type: 'audio' },
  { title: 'פרשת השבוע – דרשה מיוחדת', category: 'פרשת שבוע', type: 'video' },
];

export default function ShiurimPreview() {
  return (
    <section id="shiurim" className="py-24 bg-secondary/30">
      <div className="section-container text-center mb-16">
        <span className="text-accent font-bold text-sm tracking-wide">שיעורי תורה</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">
          ספריית השיעורים
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          שיעורי וידאו ושמע מרבני הכולל – פרשת השבוע, הלכה יומית, חושן משפט ועוד
        </p>
      </div>

      <div className="section-container grid sm:grid-cols-3 gap-6 mb-10">
        {SAMPLE_SHIURIM.map(({ title, category, type }) => (
          <div key={title} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                {category}
              </span>
              {type === 'video' ? (
                <Video className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Headphones className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
            <h3 className="font-display font-bold text-foreground group-hover:text-accent transition-colors">
              {title}
            </h3>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
        >
          לכל השיעורים →
        </a>
      </div>
    </section>
  );
}
