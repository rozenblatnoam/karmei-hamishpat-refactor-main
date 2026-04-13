import { MapPin, Phone, Clock } from 'lucide-react';

const BRANCHES = [
  {
    name: 'בית הדין הראשי – ענב',
    tag: 'ראשי',
    address: 'מנחת דורון 44857, ענב',
    contact: 'מזכיר בית הדין: הרב יובל רחמן',
    phone: '055-307-8922',
    phoneHref: 'tel:0553078922',
    note: 'מענה אנושי 09:00–18:00 | ניתן לשלוח וואטסאפ בכל שעה',
  },
  {
    name: 'סניף יצהר',
    tag: 'סניף',
    address: 'עטרת התורה 1, יצהר – ישיבת רועה ישראל',
    contact: 'הרב בועז רוזנטל',
    phone: '054-551-9878',
    phoneHref: 'tel:0545519878',
    note: 'שעות מענה: 09:00–17:00',
  },
  {
    name: 'סניף רמת השרון',
    tag: 'סניף',
    address: 'בית גוברין 4, רמת השרון',
    contact: 'הרב שי שאוליין',
    phone: '054-244-7766',
    phoneHref: 'tel:0542447766',
    note: 'שעות מענה: 13:00–15:30 | 18:00–20:00',
  },
];

const HOURS = [
  { day: "ימים א'–ה'", time: '09:30–13:00' },
  { day: "אחה\"צ א'–ה'", time: '16:00–20:00' },
  { day: 'שישי וערבי חג', time: 'בתיאום מראש' },
  { day: 'שבת ויום טוב', time: 'סגור' },
];

export default function BeitDinSection() {
  return (
    <section id="beit-din" className="py-24 bg-background">
      <div className="section-container text-center mb-16">
        <span className="text-accent font-bold text-sm tracking-wide">בית הדין</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">
          בית הדין לממונות ענב
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          בית הדין של הכולל פועל לפתרון סכסוכים ממוניים על פי דין תורה, בשלושה סניפים ברחבי הארץ
        </p>
      </div>

      <div className="section-container grid md:grid-cols-3 gap-6 mb-12">
        {BRANCHES.map(({ name, tag, address, contact, phone, phoneHref, note }) => (
          <div key={name} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
              <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                {tag}
              </span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{address}</span>
              </div>
              <p>{contact}</p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={phoneHref} className="text-blue-mid hover:underline">{phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{note}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hours */}
      <div className="section-container max-w-md mx-auto">
        <div className="bg-card rounded-2xl p-6 border border-border">
          <h3 className="font-display text-lg font-bold text-foreground mb-4 text-center">שעות פעילות</h3>
          <div className="space-y-2">
            {HOURS.map(({ day, time }) => (
              <div key={day} className="flex justify-between text-sm">
                <span className="text-foreground font-medium">{day}</span>
                <span className="text-muted-foreground">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
