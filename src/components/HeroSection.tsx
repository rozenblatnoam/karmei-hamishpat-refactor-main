export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* רקע – השומרון */}
      <img
        src="/shomron.jpg"
        alt="השומרון"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* שכבת כהות */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Glow עדין */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-blue-light blur-3xl" />
      </div>

      <div className="relative z-10 section-container text-center py-32 text-white">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8"
          style={{ animation: 'fadeInUp 0.6s ease-out both' }}
        >
          <span className="text-sm">✦</span>
          <span className="text-sm font-medium">
            המכון הגבוה ללימודי דיינות
          </span>
        </div>

        {/* Title – 2 שורות */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
        >
          <div>
            המכון הגבוה ללימודי דיינות
          </div>

          <div className="mt-3 text-yellow-400 text-5xl md:text-6xl">
            כרמי המשפט – ענב
          </div>
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-2"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
        >
          מקום של תורה, דיינות, ומנהיגות
        </p>

        <p
          className="text-white/60 text-sm mb-10"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}
        >
          בלב הרי השומרון
        </p>

        {/* תמונת בית מדרש */}
        <div
          className="max-w-3xl mx-auto"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.7s both' }}
        >
          <img
            src="/beit-midrash.jpg"
            alt="בית המדרש"
            className="rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition duration-500"
          />
        </div>

        {/* Quote */}
        <blockquote
          className="max-w-xl mx-auto mt-12 px-6 py-4 border-r-2 border-white/40 text-white/70 italic text-base"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.9s both' }}
        >
          <p>"וְהָיָה אֱמוּנַת עִתֶּיךָ חֹסֶן יְשׁוּעֹת חָכְמַת וָדָעַת"</p>
          <cite className="text-xs text-white/40 not-italic mt-2 block">
            — ישעיהו ל"ג, ו'
          </cite>
        </blockquote>

      </div>

      {/* אנימציה */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}