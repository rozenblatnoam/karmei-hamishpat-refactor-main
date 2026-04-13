export default function YissacharSection() {
  return (
    <section id="yissachar" className="py-24 bg-background">
      <div className="section-container text-center mb-16">
        <span className="text-accent font-bold text-sm tracking-wide">שותפות בתורה</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">
          הסכם יששכר וזבולון
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          מסורת עתיקה בעם ישראל — יששכר ישב באוהלה של תורה בעוד זבולון עסק במסחר ותמך בידי הלומדים. כך חלקו שניהם בשכר הרוחני של לימוד התורה.
        </p>
      </div>

      <div className="section-container">
        {/* Visual */}
        <div className="grid sm:grid-cols-3 gap-6 items-center max-w-3xl mx-auto mb-12">
          <div className="bg-card rounded-2xl p-6 border border-border text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-display font-bold text-foreground mb-1">יששכר</h3>
            <p className="text-sm text-muted-foreground">אברכי הכולל</p>
            <p className="text-xs text-muted-foreground mt-1">הלומדים תורה יומם ולילה</p>
          </div>

          <div className="text-center text-3xl text-accent font-bold hidden sm:block">⇄</div>

          <div className="bg-card rounded-2xl p-6 border border-border text-center">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-display font-bold text-foreground mb-1">זבולון</h3>
            <p className="text-sm text-muted-foreground">תומכי הכולל</p>
            <p className="text-xs text-muted-foreground mt-1">הזוכים לשכר לימוד התורה</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card rounded-2xl p-8 border border-border max-w-xl mx-auto text-center">
          <div className="text-3xl mb-3">🤝</div>
          <h3 className="font-display text-xl font-bold text-foreground mb-3">הצטרפו לשותפות</h3>
          <p className="text-muted-foreground text-sm mb-6">
            כל שכיר או בעל עסק, קטן כגדול, יכול להיות שותף בתורה ולזכות בשכר רוחני מיוחד לו ולמשפחתו
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/972546597850"
              className="px-6 py-3 rounded-xl font-bold text-primary transition-all hover:scale-105"
              style={{ background: 'var(--gradient-gold)', boxShadow: 'var(--shadow-gold)' }}
            >
              💬 לפרטים בוואטסאפ
            </a>
            <a
              href="tel:0546597850"
              className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-all"
            >
              054-659-7850
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
