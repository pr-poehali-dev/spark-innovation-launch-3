import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Tips } from "@/components/Tips";
import { Laws } from "@/components/Laws";
import { HelpLine } from "@/components/HelpLine";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Tips />
      <Laws />
      <HelpLine />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
