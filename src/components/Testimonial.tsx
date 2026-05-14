export function Testimonial() {
  return (
    <section className="py-32 px-6 bg-sage/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-8 block">История участника</span>

        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight mb-10 text-balance">
          «Я думал, что никому нет дела. Но здесь меня услышали. Теперь я знаю, куда двигаться дальше.»
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
            <img
              src="/placeholder-user.jpg"
              alt="Участник проекта"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-foreground font-medium">Алексей, 16 лет</p>
            <p className="text-sm text-muted-foreground">Участник программы, г. Москва</p>
          </div>
        </div>
      </div>
    </section>
  );
}