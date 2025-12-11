import { User, Phone } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-gradient text-primary-foreground py-12 sm:py-20 lg:py-32" data-testid="hero-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto rounded-full bg-primary-foreground/20 border-4 border-primary-foreground/30 flex items-center justify-center mb-6">
              <User className="text-primary-foreground/70" size={48} />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2 break-words" data-testid="hero-name">
              {t.hero.name}
            </h1>
            <p className="text-base sm:text-lg lg:text-2xl font-light mb-2 px-2" data-testid="hero-title">
              {t.hero.title}
            </p>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 px-2" data-testid="hero-experience">
              {t.hero.experience}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors text-sm sm:text-base"
              data-testid="button-contact"
            >
              <Phone className="mr-2" size={16} />
              {t.hero.getInTouch}
            </button>
            <a 
              href="https://linkedin.com/in/hector-parraga-35718816" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-sm sm:text-base"
              data-testid="link-linkedin"
            >
              <SiLinkedin className="mr-2" size={16} />
              {t.hero.linkedinProfile}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
