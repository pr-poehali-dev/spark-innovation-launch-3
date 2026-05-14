export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="font-serif text-xl tracking-tight text-foreground">
            Алые паруса
          </a>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <a href="#tips" className="hover:text-foreground transition-colors duration-300">Советы</a>
            <a href="#laws" className="hover:text-foreground transition-colors duration-300">Мои права</a>
            <a href="#helpline" className="hover:text-foreground transition-colors duration-300">Куда обратиться</a>
            <a href="#faq" className="hover:text-foreground transition-colors duration-300">Вопросы и ответы</a>
            <a href="#contact" className="hover:text-foreground transition-colors duration-300">Контакты</a>
          </div>

          <p className="text-sm text-muted-foreground">ГБУ ЦССВ «Алые паруса», 2026</p>
        </div>

        <div className="mt-20 text-center">
          <span className="font-serif text-[10rem] md:text-[14rem] leading-none text-border/50 select-none">А</span>
        </div>
      </div>
    </footer>
  );
}
