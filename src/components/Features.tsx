import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "HandHeart",
    title: "Индивидуальное сопровождение",
    description: "Каждый подросток получает персональное внимание. Специалисты учитывают уникальную ситуацию и помогают найти подходящий путь.",
  },
  {
    icon: "BookOpen",
    title: "Образование и навыки",
    description: "Программы, которые помогают развить уверенность в себе, освоить важные жизненные навыки и открыть новые возможности.",
  },
  {
    icon: "Users",
    title: "Для родителей и специалистов",
    description: "Информация, ресурсы и поддержка для тех, кто рядом — родителей, педагогов и социальных работников.",
  },
  {
    icon: "TrendingUp",
    title: "Результаты и истории",
    description: "Реальные истории изменений и измеримые результаты проекта — прозрачность как основа доверия.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Направления</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Как проект помогает
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-500">
                <Icon name={feature.icon} size={24} className="text-sage" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}