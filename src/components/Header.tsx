import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#tips", label: "Советы" },
  { href: "#laws", label: "Мои права" },
  { href: "#helpline", label: "Куда обратиться" },
  { href: "#faq", label: "Вопросы и ответы" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-serif text-xl tracking-tight text-foreground leading-tight">
          Алые паруса
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+74999079356"
          className="hidden md:inline-flex px-5 py-2.5 bg-primary text-primary-foreground text-sm rounded-full hover:opacity-90 transition-opacity duration-300"
        >
          Позвонить нам
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Открыть меню"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+74999079356"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm rounded-full text-center"
            >
              Позвонить нам
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
