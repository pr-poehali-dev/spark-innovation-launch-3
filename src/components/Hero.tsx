import Icon from "@/components/ui/icon";

const sections = [
  { href: "#tips", icon: "Lightbulb", label: "Советы" },
  { href: "#laws", icon: "Scale", label: "Мои права" },
  { href: "#helpline", icon: "Phone", label: "Куда обратиться" },
  { href: "#faq", icon: "HelpCircle", label: "Вопросы и ответы" },
];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/10 text-sage mb-8">
          <span className="w-2 h-2 rounded-full bg-sage" />
          <span className="text-sm">ГБУ ЦССВ «Алые паруса»</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.1] text-balance mb-8">
          Здесь есть
          <br />
          <span className="italic">ответы на твои вопросы</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-14">
          Что делать, если что-то идёт не так. Какие у тебя права. К кому можно обратиться. Всё прямо здесь — без регистрации и без осуждения.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-sage/40 transition-all duration-300"
            >
              <Icon name={s.icon} size={16} />
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-border" />
      </div>
    </section>
  );
}
