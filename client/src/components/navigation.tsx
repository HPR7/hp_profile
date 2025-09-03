import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('nav a[data-section]');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const htmlSection = section as HTMLElement;
        const top = htmlSection.offsetTop;
        const bottom = top + htmlSection.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos <= bottom) {
          navLinks.forEach(link => {
            link.classList.remove('text-primary');
            if (link.getAttribute('data-section') === id) {
              link.classList.add('text-primary');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border no-print" data-testid="navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-primary" data-testid="nav-title">{t.nav.title}</h1>
            <span className="hidden sm:inline text-muted-foreground">{t.nav.subtitle}</span>
          </div>
          
          <div className="hidden md:flex space-x-6 items-center">
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
              data-testid="language-switcher"
            >
              <Languages size={16} className="mr-2" />
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors"
                data-section={item.id}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center px-2 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
              data-testid="mobile-language-switcher"
            >
              <Languages size={16} className="mr-1" />
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary hover:bg-muted"
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border" data-testid="mobile-menu">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
