import Icon from "@/components/ui/icon";

const audiences = [
  {
    name: "Подросткам",
    price: "Участникам",
    description: "Для тех, кто хочет изменить свою жизнь и найти поддержку",
    features: [
      "Личный куратор и план развития",
      "Групповые занятия и тренинги",
      "Профориентация и помощь с учёбой",
      "Безопасное пространство для разговора",
    ],
    cta: "Узнать о программе",
    highlighted: false,
  },
  {
    name: "Родителям и специалистам",
    price: "Партнёрам",
    description: "Для тех, кто работает рядом с подростками и хочет помочь",
    features: [
      "Методические материалы",
      "Консультации специалистов",
      "Совместные программы работы",
      "Отчёты и результаты проекта",
      "Информация о целях программы",
      "Прямой контакт с командой",
    ],
    cta: "Связаться с нами",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Аудитории</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            Для кого этот проект
          </h2>
          <p className="text-muted-foreground text-lg">Программа охватывает всех, кто участвует в жизни подростка.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((plan, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-2xl border ${
                plan.highlighted ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
              }`}
            >
              <h3 className={`text-xl mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif text-4xl tracking-tight">{plan.price}</span>
              </div>
              <p className={`mb-8 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-sage" />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3.5 rounded-full text-center transition-opacity duration-300 hover:opacity-90 ${
                  plan.highlighted ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}