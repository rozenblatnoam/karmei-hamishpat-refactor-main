export default function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8">

          {/* שם המכון — ימין */}
          <div className="text-right">
            <h4 className="font-display font-bold text-lg mb-3">המכון הגבוה ללימודי דיינות</h4>
            <p className="text-primary-foreground/60 text-sm">כרמי המשפט – ענב, הרי השומרון</p>
          </div>

          {/* צור קשר — שמאל */}
          <div className="text-left mt-6 sm:mt-0">
            <h4 className="font-display font-bold mb-3">צור קשר</h4>
            <div className="space-y-1 text-sm text-primary-foreground/60">
              <p>054-659-7850</p>
              <p>karmeimishpat@gmail.com</p>
            </div>
          </div>

        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} המכון הגבוה ללימודי דיינות כרמי המשפט. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}