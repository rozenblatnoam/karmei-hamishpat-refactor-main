const STATS = [
  { num: '16+', label: 'שנות פעילות' },
  { num: '3', label: 'סניפי בית דין' },
  { num: '100+', label: 'בוגרים בשטח' },
  { num: '6', label: 'שנות תחרות מאמרים' },
];

const QUICK = [
  { icon: '⚖️', label: 'בית הדין', href: '#beit-din' },
  { icon: '📖', label: 'שיעורי תורה', href: '#shiurim' },
  { icon: '🎓', label: 'לימודי דיינות', href: '#tracks' },
  { icon: '💬', label: 'שאל את הרב', href: 'https://wa.me/972546597850' },
  { icon: '🤝', label: 'יששכר וזבולון', href: '#yissachar' },
];

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--gradient-hero)' }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-blue-light blur-3xl" />
        </div>

        <div className="relative z-10 section-container text-center py-32">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm mb-8"
            style={{ animation: 'fadeInUp 0.6s ease-out both' }}
          >
            <span className="text-accent text-sm">✦</span>
            <span className="text-primary-foreground/80 text-sm font-medium">
              המכון הגבוה ללימודי דיינות | כרמי המשפט
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
          >
            <span className="text-primary-foreground">המכון הגבוה</span>{' '}
            <span className="text-gradient-gold">ללימודי דיינות</span>{' '}
            <span className="text-primary-foreground">כרמי המשפט</span>
          </h1>

          <p
            className="text-primary-foreground/70 text-lg sm:text-xl max-w-2xl mx-auto mb-2"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
          >
            מקום של תורה, דיינות, ומנהיגות
          </p>
          <p
            className="text-primary-foreground/50 text-sm mb-8"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}
          >
            בלב הרי השומרון
          </p>

          {/* Quote */}
          <blockquote
            className="max-w-xl mx-auto mb-10 px-6 py-4 border-r-2 border-accent/40 text-primary-foreground/60 italic text-base"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
          >
            <p>"וְהָיָה אֱמוּנַת עִתֶּיךָ חֹסֶן יְשׁוּעֹת חָכְמַת וָדָעַת"</p>
            <cite className="text-xs text-primary-foreground/40 not-italic mt-2 block">
              — ישעיהו ל&quot;ג, ו&apos;
            </cite>
          </blockquote>

          {/* CTA */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-16"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.7s both' }}
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-xl font-bold text-primary transition-all hover:scale-105 shadow-lg"
              style={{ background: 'var(--gradient-gold)', boxShadow: 'var(--shadow-gold)' }}
            >
              גלה עוד
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.8s both' }}
          >
            {STATS.map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-bold text-accent mb-1">{num}</div>
                <div className="text-primary-foreground/60 text-sm">{label}</div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="mt-16 text-primary-foreground/30 text-sm animate-bounce">
            גלול מטה ↓
          </div>
        </div>
      </section>

      {/* Quick Access Strip */}
      <div className="bg-primary border-y border-primary-foreground/10 py-3 overflow-x-auto">
        <div className="section-container flex justify-center gap-6 min-w-max">
          {QUICK.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm whitespace-nowrap"
            >
              <span>{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
