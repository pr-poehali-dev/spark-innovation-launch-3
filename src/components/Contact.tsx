import Icon from "@/components/ui/icon";

const contactItems = [
  {
    icon: "MapPin",
    title: "Адрес",
    lines: ["г. Москва, ул. Декабристов, д. 8, корп. 3", "м. Отрадное (400 м)"],
  },
  {
    icon: "Phone",
    title: "Телефон",
    lines: ["+7 (499) 907-93-56"],
  },
  {
    icon: "Mail",
    title: "Электронная почта",
    lines: ["cssv-alyeparusa@mos.ru"],
  },
  {
    icon: "Clock",
    title: "Режим работы",
    lines: [
      "Пн–Чт: 9:00 – 18:00",
      "Пт: 9:00 – 16:45",
      "Перерыв: 13:00 – 13:45",
      "Стационарное отделение: круглосуточно",
    ],
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">Контакты</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-6 text-balance">
            Мы рядом
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            ГБУ ЦССВ «Алые паруса» — государственное учреждение Департамента труда и социальной защиты населения г. Москвы. Обращайтесь в любое удобное время.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                <Icon name={item.icon} size={20} className="text-sage" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">{item.title}</h3>
              <div className="space-y-1">
                {item.lines.map((line, i) => (
                  <p key={i} className="text-muted-foreground text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-sage/5 border border-sage/20 text-center">
          <p className="text-sm text-muted-foreground">
            Директор: <span className="text-foreground">Макарова Наталья Геннадьевна</span>
          </p>
        </div>
      </div>
    </section>
  );
}
