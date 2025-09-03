import { Mail, Phone } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    {
      href: "mailto:hparraga@gmail.com",
      icon: Mail,
      label: "Email"
    },
    {
      href: "tel:+51993474925",
      icon: Phone,
      label: "Phone"
    },
    {
      href: "https://linkedin.com/in/hector-parraga-35718816",
      icon: SiLinkedin,
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 no-print" data-testid="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2" data-testid="footer-name">Hector Parraga</h3>
            <p className="text-secondary-foreground/80" data-testid="footer-title">
              Expert in Safety, Health & Environment Management
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={index}
                  href={link.href}
                  className="w-12 h-12 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  data-testid={`footer-${link.label.toLowerCase()}`}
                >
                  <IconComponent className="text-secondary-foreground" size={20} />
                </a>
              );
            })}
          </div>
          
          <div className="pt-8 border-t border-secondary-foreground/20">
            <p className="text-secondary-foreground/60 text-sm" data-testid="footer-copyright">
              © 2024 Hector Parraga. Professional Resume & Portfolio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
