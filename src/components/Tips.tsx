import { useState } from "react";
import Icon from "@/components/ui/icon";

const tabs = [
  { id: "teens", label: "Подросткам", icon: "User" },
  { id: "parents", label: "Родителям", icon: "Heart" },
  { id: "specialists", label: "Специалистам", icon: "Briefcase" },
];

const tips = {
  teens: [
    {
      icon: "MessageCircle",
      title: "Говори о том, что чувствуешь",
      text: "Найди хотя бы одного взрослого, которому доверяешь — учителя, родственника, куратора. Держать всё в себе тяжелее, чем кажется. Один разговор может изменить многое.",
    },
    {
      icon: "Target",
      title: "Ставь маленькие цели",
      text: "Не нужно менять всё сразу. Выбери одну небольшую вещь, которую ты можешь сделать сегодня — дойти до школы, позвонить другу, прибраться в комнате. Маленький шаг — это уже движение вперёд.",
    },
    {
      icon: "Shield",
      title: "Ты не обязан делать то, что неудобно",
      text: "Умение сказать «нет» — это сила, а не слабость. Если что-то кажется неправильным или давит на тебя — ты имеешь право отказаться. Это твой выбор.",
    },
    {
      icon: "BookOpen",
      title: "Учёба — это не наказание",
      text: "Даже один предмет, который тебе интересен — уже точка опоры. Попроси помощи с тем, что не получается. Никто не обязан справляться в одиночку.",
    },
    {
      icon: "Sunrise",
      title: "Режим дня работает",
      text: "Просыпаться и засыпать в одно время, нормально есть — звучит банально, но это реально влияет на настроение и то, как ты справляешься с трудностями.",
    },
    {
      icon: "Users",
      title: "Выбирай окружение осознанно",
      text: "Люди вокруг тебя сильно влияют на твои решения. Замечай, с кем тебе спокойно и хорошо, а с кем — тревожно или плохо. Ты можешь менять своё окружение постепенно.",
    },
  ],
  parents: [
    {
      icon: "Ear",
      title: "Слушайте, не перебивая",
      text: "Когда подросток говорит — дайте ему договорить. Не торопитесь советовать или оценивать. Часто детям нужно просто быть услышанными, а не получить готовое решение.",
    },
    {
      icon: "Thermometer",
      title: "Спрашивайте о состоянии, не о поступках",
      text: "Вместо «почему ты это сделал?» попробуйте «как ты сейчас?». Разговор о чувствах открывает больше, чем разговор о поведении. Это снижает защитную реакцию.",
    },
    {
      icon: "Clock",
      title: "Уделяйте время без телефона",
      text: "15–20 минут в день полного присутствия — без гаджетов и отвлечений — важнее, чем часы формального общения. Совместный ужин, прогулка, игра.",
    },
    {
      icon: "AlertCircle",
      title: "Не игнорируйте тревожные сигналы",
      text: "Резкая замкнутость, отказ от еды, агрессия, исчезновение из дома — это сигналы, что подростку нужна помощь. Обратитесь к специалисту, не откладывайте.",
    },
    {
      icon: "HandHeart",
      title: "Поддерживайте, даже когда сложно",
      text: "Подростки на учёте часто ожидают осуждения. Ваша безусловная поддержка — даже просто «я рядом, что бы ни случилось» — меняет траекторию. Это самое важное.",
    },
    {
      icon: "RefreshCw",
      title: "Работайте над собой тоже",
      text: "Дети копируют поведение родителей. Если вы умеете справляться со стрессом, просить помощи и признавать ошибки — это лучшее, что вы можете передать.",
    },
  ],
  specialists: [
    {
      icon: "MapPin",
      title: "Начинайте с доверия, не с диагностики",
      text: "Подростки на учёте часто имеют опыт нарушения доверия взрослыми. Первый этап работы — не оценка, а выстраивание безопасного контакта. Это занимает время, но это основа.",
    },
    {
      icon: "Layers",
      title: "Работайте с системой, а не только с подростком",
      text: "Семья, школа, ближайшее окружение — всё это влияет на поведение. Включение семьи в процесс (если это безопасно) повышает эффективность работы в разы.",
    },
    {
      icon: "TrendingUp",
      title: "Фиксируйте прогресс малыми шагами",
      text: "Отмечайте даже небольшие позитивные изменения — пришёл на встречу, ответил на звонок. Видимый прогресс мотивирует как подростка, так и поддерживает специалиста.",
    },
    {
      icon: "Zap",
      title: "Используйте сильные стороны",
      text: "Подход, ориентированный на ресурсы, работает лучше, чем акцент на проблемах. Найдите, что у подростка получается, что ему важно — и стройте на этом.",
    },
    {
      icon: "FileText",
      title: "Документируйте и передавайте информацию",
      text: "Непрерывность сопровождения критически важна. Если работа передаётся другому специалисту — подробная передача снижает риск разрыва контакта с подростком.",
    },
    {
      icon: "Coffee",
      title: "Заботьтесь о себе",
      text: "Эмоциональное выгорание в социальной работе — серьёзная проблема. Регулярная супервизия, границы и отдых — не роскошь, а необходимое условие качественной работы.",
    },
  ],
};

export function Tips() {
  const [activeTab, setActiveTab] = useState<"teens" | "parents" | "specialists">("teens");

  return (
    <section id="tips" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-sage mb-4 block">Материалы</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance mb-4">
            Советы и рекомендации
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Практические советы для каждого, кто связан с проектом — без лишних слов, только по делу.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-sage/40"
              }`}
            >
              <Icon name={tab.icon} size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips[activeTab].map((tip, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mb-4">
                <Icon name={tip.icon} size={20} className="text-sage" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{tip.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
