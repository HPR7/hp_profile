import { Phone, Mail, MapPin } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Mobile Phone",
      value: "+51 993474925",
      href: "tel:+51993474925"
    },
    {
      icon: Mail,
      label: "Email Address",
      value: "hparraga@gmail.com",
      href: "mailto:hparraga@gmail.com"
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn Profile",
      value: "hector-parraga-35718816",
      href: "https://linkedin.com/in/hector-parraga-35718816"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Peru",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted" data-testid="contact-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="contact-title">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-8 shadow-lg print-friendly">
                <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="contact-info-title">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    const content = (
                      <div className="flex items-center" key={index}>
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="text-primary-foreground" size={20} />
                        </div>
                        <div>
                          <p className="text-muted-foreground text-sm">{contact.label}</p>
                          <span className="text-lg font-semibold text-card-foreground">
                            {contact.value}
                          </span>
                        </div>
                      </div>
                    );

                    return contact.href ? (
                      <a 
                        key={index}
                        href={contact.href}
                        className="block hover:text-primary transition-colors"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        data-testid={`contact-${contact.label.toLowerCase().replace(' ', '-')}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index} data-testid={`contact-${contact.label.toLowerCase().replace(' ', '-')}`}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-lg print-friendly">
              <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="cta-title">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="cta-description">
                Let's discuss how my 25+ years of expertise in safety, health, and environmental management can help optimize your resources and achieve your organizational goals.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="tel:+51993474925" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-call"
                >
                  <Phone className="mr-2" size={16} />
                  Call Now
                </a>
                <a 
                  href="mailto:hparraga@gmail.com" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
                  data-testid="button-email"
                >
                  <Mail className="mr-2" size={16} />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
