import Icon from "@/components/ui/icon";

const urgent = [
  {
    icon: "Phone",
    name: "Единая экстренная служба",
    number: "112",
    desc: "Полиция, скорая, пожарные. Бесплатно, круглосуточно, без денег на счету.",
    accent: true,
  },
  {
    icon: "HeartHandshake",
    name: "Детский телефон доверия",
    number: "8-800-2000-122",
    desc: "Психологическая помощь подросткам. Бесплатно, анонимно, круглосуточно.",
    accent: true,
  },
];

const organizations = [
  {
    icon: "Users",
    category: "Опека и защита прав",
    items: [
      { name: "Органы опеки и попечительства", contact: "Через МФЦ или администрацию района", detail: "Помогают при угрозе жизни, нарушении прав, вопросах по жилью и семье." },
      { name: "Уполномоченный по правам ребёнка в Москве", contact: "ombudsman.mos.ru", detail: "Принимает жалобы на нарушение прав детей. Можно обратиться онлайн." },
    ],
  },
  {
    icon: "Scale",
    category: "Юридическая помощь",
    items: [
      { name: "Бесплатная юридическая помощь (ФЗ №324)", contact: "Юридические клиники при университетах", detail: "Бесплатная юридическая консультация для несовершеннолетних и их семей." },
      { name: "Прокуратура", contact: "epp.genproc.gov.ru", detail: "Надзор за соблюдением прав. Можно подать обращение онлайн." },
    ],
  },
  {
    icon: "Home",
    category: "Приют и кризисная помощь",
    items: [
      { name: "ГБУ ЦССВ «Алые паруса»", contact: "+7 (499) 907-93-56", detail: "Стационарное отделение работает круглосуточно. Москва, ул. Декабристов, д. 8, корп. 3." },
      { name: "Кризисный центр помощи женщинам и детям", contact: "kc-msk.ru", detail: "Временное убежище при угрозе насилия в семье." },
    ],
  },
  {
    icon: "Brain",
    category: "Психологическая помощь",
    items: [
      { name: "Психологическая помощь Москвы", contact: "msph.ru", detail: "Бесплатная психологическая помощь. Можно записаться онлайн." },
      { name: "Телефон доверия для подростков", contact: "8-800-2000-122", detail: "Анонимный разговор с психологом. Без регистрации, без осуждения." },
    ],
  },
];

export function HelpLine() {
  return (
    <section id="helpline" className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-sage mb-4 block">Куда обратиться</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance mb-4">
            Ты не один
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Все организации ниже работают с подростками. Большинство — бесплатно и анонимно.
          </p>
        </div>

        {/* Экстренные */}
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {urgent.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-sage/10 border border-sage/25 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center shrink-0">
                <Icon name={item.icon} size={20} className="text-sage" />
              </div>
              <div>
                <p className="text-xs text-sage uppercase tracking-widest mb-1">Экстренно</p>
                <p className="font-serif text-xl text-foreground">{item.name}</p>
                <p className="text-2xl font-mono font-bold text-foreground mt-1">{item.number}</p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Организации */}
        <div className="space-y-8">
          {organizations.map((org, oi) => (
            <div key={oi}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-sage/10 flex items-center justify-center">
                  <Icon name={org.icon} size={14} className="text-sage" />
                </div>
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground">{org.category}</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {org.items.map((item, ii) => (
                  <div key={ii} className="p-5 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-300">
                    <p className="font-serif text-lg text-foreground mb-1">{item.name}</p>
                    <p className="text-sm font-mono text-sage mb-2">{item.contact}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
