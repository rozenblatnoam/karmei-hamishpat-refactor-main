import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const SUBJECTS = ['שאלת הלכה', 'הרשמה ללימודים', 'פנייה לבית הדין', 'תרומה ותמיכה', 'אחר'];

const WA_GROUPS = [
  { label: 'בית הוראה – דיני ממונות', href: 'https://chat.whatsapp.com/DUt4q9SHNu3BWgYo619Rbx' },
  { label: 'קבוצת שיעורי תורה', href: 'https://chat.whatsapp.com/EA50YAXW1HDACGEY4MpFej' },
  { label: 'הלכה יומית', href: 'https://chat.whatsapp.com/GF5L88TRodA6IUNQyMLxTN' },
  { label: 'שו"ת לבעלי עסקים', href: 'https://chat.whatsapp.com/F8zUZ0PTNGE7DbU2oMJvyS' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: 'שאלת הלכה', message: '' });
  const [sending, setSending] = useState(false);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error('שם והודעה הם שדות חובה');
      return;
    }
    setSending(true);
    await new Promise(r => setTimeout(r, 1000));
    toast.success('פנייתך התקבלה! נחזור אליך בהקדם 🙏');
    setForm({ name: '', phone: '', email: '', subject: 'שאלת הלכה', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="section-container grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <span className="text-accent font-bold text-sm tracking-wide mb-2 block">צרו קשר</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            שאל את הרב | הרשמה
          </h2>
          <p className="text-muted-foreground mb-8">
            לשאלות הלכה, פנייה לבית הדין, הרשמה ללימודים, או כל עניין אחר
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="שם מלא *"
                value={form.name}
                onChange={e => set('name', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-blue-mid focus:ring-2 focus:ring-blue-mid/10 outline-none transition-all"
              />
              <input
                placeholder="טלפון"
                value={form.phone}
                onChange={e => set('phone', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-blue-mid focus:ring-2 focus:ring-blue-mid/10 outline-none transition-all"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="אימייל"
                value={form.email}
                onChange={e => set('email', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-blue-mid focus:ring-2 focus:ring-blue-mid/10 outline-none transition-all"
              />
              <select
                value={form.subject}
                onChange={e => set('subject', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:border-blue-mid focus:ring-2 focus:ring-blue-mid/10 outline-none transition-all"
              >
                {SUBJECTS.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="הודעה *"
              rows={4}
              value={form.message}
              onChange={e => set('message', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-blue-mid focus:ring-2 focus:ring-blue-mid/10 outline-none transition-all resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-xl font-bold text-primary transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
              style={{ background: 'var(--gradient-gold)', boxShadow: 'var(--shadow-gold)' }}
            >
              <Send className="w-4 h-4" />
              {sending ? 'שולח...' : 'שלח פנייה'}
            </button>
          </form>
        </div>

        {/* WhatsApp Groups */}
        <div>
          <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-green-500" />
            קבוצות וואטסאפ
          </h3>
          <div className="space-y-3">
            {WA_GROUPS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card rounded-xl p-4 border border-border hover:border-green-300 hover:shadow-md transition-all"
              >
                <span className="text-foreground font-medium">{label}</span>
              </a>
            ))}
          </div>

          <div className="mt-8 bg-card rounded-2xl p-6 border border-border">
            <h4 className="font-display font-bold text-foreground mb-3">פרטי התקשרות</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📞 054-659-7850</p>
              <p>📍 ישוב ענב, הרי השומרון</p>
              <p>✉️ karmeimishpat@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
