import { useState, useEffect } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';

const HYP_MASOF    = import.meta.env.VITE_HYP_MASOF ?? '';
const HYP_PASSP    = import.meta.env.VITE_HYP_PASSP ?? '';
const HYP_KEY      = import.meta.env.VITE_HYP_KEY   ?? '';
const HYP_ENDPOINT = 'https://pay.hyp.co.il/p/';

const PRESET_AMOUNTS = [180, 360, 540, 720, 1080];

const impacts = [
  { icon: '📖', title: 'הכשרת דיינים', text: 'מימון לומדים מצוינים לאורך שמונה שנות לימוד אינטנסיבי.' },
  { icon: '⚖️', title: 'בתי דין נגישים', text: 'קיום בתי דין לממונות הפתוחים לציבור הרחב בכל רחבי הארץ.' },
  { icon: '📚', title: 'פרסום תורני', text: 'הוצאת חיבורים, פסקי דין ומאמרים בתחומי המשפט העברי.' },
  { icon: '🎓', title: 'חינוך הדור הבא', text: 'תוכנית "דיינים צעירים" בבתי ספר ותלמודי תורה ברחבי השומרון.' },
];

const inputCls =
  'w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/50 transition';

export default function Donations() {
  useEffect(() => { document.title = 'תרומות | כולל ענב'; }, []);
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(360);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const finalAmount =
    selectedAmount !== null ? selectedAmount : parseFloat(customAmount) || 0;

  function handlePresetClick(amount: number) {
    setSelectedAmount(amount);
    setCustomAmount('');
  }

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (finalAmount <= 0) return;
    setIsSubmitting(true);

    const payForm = document.createElement('form');
    payForm.method = 'POST';
    payForm.action = HYP_ENDPOINT;

    const params: Record<string, string> = {
      action:  'pay',
      Masof:   HYP_MASOF,
      PassP:   HYP_PASSP,
      KEY:     HYP_KEY,
      Amount:  String(finalAmount),
      Coin:    '1',
      Tash:    '1',
      Info:    donationType === 'monthly' ? 'תרומה חודשית – כרמי המשפט' : 'תרומה – כרמי המשפט',
      Order:   `donation-${Date.now()}`,
      UTF8:    'True',
      UTF8out: 'True',
      ...(formData.firstName && { ClientName:  formData.firstName }),
      ...(formData.lastName  && { ClientLName: formData.lastName  }),
      ...(formData.email     && { Email:       formData.email     }),
      ...(formData.phone     && { Cell:        formData.phone     }),
    };

    Object.entries(params).forEach(([key, val]) => {
      const inp = document.createElement('input');
      inp.type = 'hidden';
      inp.name = key;
      inp.value = val;
      payForm.appendChild(inp);
    });

    document.body.appendChild(payForm);
    payForm.submit();
  }

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
              <span className="text-sm font-medium">היו שותפים במפעל התורה</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              תרומות
            </h1>
            <p className="text-yellow-400 text-xl sm:text-2xl font-bold mb-4">
              כרמי המשפט – ענב
            </p>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              תרומתכם מכשירה דיינים, מקיימת בתי דין ומפיצה תורה לדורות
            </p>
          </div>
        </section>

        {/* ===== Main Content ===== */}
        <section className="relative overflow-hidden">
          <img src="/shomron.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-white space-y-14">

            {/* Intro */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6">
                <span className="text-sm">✦</span>
                <span className="text-sm font-medium">למה לתרום?</span>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">
                המכון הגבוה ללימודי דיינות "כרמי המשפט" פועל ומתקיים בזכות תרומותיהם הנדיבות של שותפים ותומכים.
                תרומתכם מאפשרת להמשיך ולהכשיר דור חדש של דיינים, לקיים בתי דין נגישים לציבור, ולפרסם חיבורים תורניים חשובים.
              </p>
            </div>

            {/* ===== Donation Form ===== */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6">
                <span className="text-sm">✦</span>
                <span className="text-sm font-medium">בחרו את תרומתכם</span>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm p-6 sm:p-8 space-y-8"
              >

                {/* Donation type toggle */}
                <div>
                  <p className="text-sm text-white/80 mb-3">סוג התרומה</p>
                  <div className="flex rounded-xl overflow-hidden border border-white/20">
                    {(['once', 'monthly'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setDonationType(type)}
                        className={`flex-1 py-3 text-sm font-semibold transition-colors duration-200 ${
                          donationType === type
                            ? 'bg-yellow-400 text-gray-900'
                            : 'bg-white/5 text-white/85 hover:bg-white/12'
                        }`}
                      >
                        {type === 'once' ? 'תרומה חד פעמית' : 'הוראת קבע חודשית'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount preset buttons */}
                <div>
                  <p className="text-sm text-white/80 mb-3">סכום התרומה (₪)</p>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                    {PRESET_AMOUNTS.map((amount) => {
                      const active = selectedAmount === amount;
                      return (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handlePresetClick(amount)}
                          className={`py-3 rounded-xl font-bold text-base transition-all duration-200 ${
                            active
                              ? 'bg-yellow-400 text-gray-900 scale-[1.04] shadow-lg shadow-yellow-400/30'
                              : 'border border-white/20 bg-white/5 text-white hover:bg-white/12 hover:border-yellow-400/35'
                          }`}
                        >
                          ₪{amount.toLocaleString('he-IL')}
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom amount input */}
                  <div className="relative">
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/45 text-sm pointer-events-none">
                      ₪
                    </span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomChange}
                      placeholder="סכום אחר"
                      min="1"
                      className={`w-full pr-9 pl-4 py-3 rounded-xl backdrop-blur-sm border text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/60 transition ${
                        selectedAmount === null && customAmount
                          ? 'border-yellow-400/60 bg-yellow-400/10'
                          : 'border-white/20 bg-white/10 focus:border-yellow-400/50'
                      }`}
                    />
                  </div>
                </div>

                {/* Personal details */}
                <div>
                  <p className="text-sm text-white/80 mb-3">
                    פרטים אישיים{' '}
                    <span className="text-white/45">(אופציונלי – יועברו לדף התשלום)</span>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData((p) => ({ ...p, firstName: e.target.value }))}
                      placeholder="שם פרטי"
                      className={inputCls}
                    />
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData((p) => ({ ...p, lastName: e.target.value }))}
                      placeholder="שם משפחה"
                      className={inputCls}
                    />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      placeholder='דוא"ל'
                      className={inputCls}
                    />
                    <input
                      type="tel"
                      dir="rtl"
                      value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="טלפון"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Summary + submit */}
                <div className="space-y-4">
                  {finalAmount > 0 && (
                    <p className="text-center text-white/65 text-sm">
                      {donationType === 'monthly' ? 'הוראת קבע חודשית' : 'תרומה חד פעמית'} של{' '}
                      <span className="text-yellow-400 font-bold text-xl">
                        ₪{finalAmount.toLocaleString('he-IL')}
                      </span>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={finalAmount <= 0 || isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-200
                      bg-yellow-400 text-gray-900 hover:bg-yellow-300
                      disabled:opacity-40 disabled:cursor-not-allowed
                      shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/45 hover:scale-[1.01]
                      active:scale-[0.99]"
                  >
                    {isSubmitting
                      ? 'מעבר לתשלום...'
                      : finalAmount > 0
                      ? `תרמו ₪${finalAmount.toLocaleString('he-IL')}`
                      : 'בחרו סכום לתרומה'}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-white/30 text-xs">
                    <span>🔒</span>
                    <span>תשלום מאובטח דרך HYP Pay · PCI DSS</span>
                  </div>
                </div>

              </form>
            </div>

            {/* Impact cards */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
              <h2 className="font-display text-2xl font-bold text-yellow-400 mb-5">תרומתכם פועלת</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {impacts.map(({ icon, title, text }) => (
                  <div
                    key={title}
                    className="flex gap-4 px-5 py-5 rounded-xl border border-white/15 bg-white/8 backdrop-blur-sm"
                  >
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <div className="text-white font-semibold mb-1">{title}</div>
                      <div className="text-white/65 text-sm leading-relaxed">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone contact */}
            <div
              className="rounded-2xl border border-yellow-400/30 bg-yellow-400/8 backdrop-blur-sm px-8 py-8 text-center"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
            >
              <div className="text-3xl mb-3">🤝</div>
              <h2 className="font-display text-xl font-bold text-yellow-400 mb-2">צרו קשר לתרומה</h2>
              <p className="text-white/60 text-sm mb-4">
                לפרטים נוספים על אפשרויות תרומה, צרו קשר:
              </p>
              <a
                href="tel:054-659-7850"
                className="inline-block text-white font-bold text-2xl hover:text-yellow-400 transition-colors duration-200"
              >
                054-659-7850
              </a>
            </div>

            {/* Quote */}
            <blockquote
              className="px-6 py-5 border-r-2 border-white/30 text-white/65 italic text-center"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}
            >
              <p className="font-display text-lg mb-2">"וְצַדִּיקִים יִרְאוּ וְיִשְׂמָחוּ"</p>
              <cite className="text-xs text-white/35 not-italic">
                פעילות המכון מתאפשרת הודות לתמיכתם של אוהבי תורה השותפים עמנו במפעל של השבת משפט התורה
              </cite>
            </blockquote>

          </div>
        </section>

      </main>

      <SiteFooter />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] { -moz-appearance: textfield; }
      `}</style>
    </>
  );
}
