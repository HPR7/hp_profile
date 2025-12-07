import { useState } from "react";
import { Shield, Award, Users, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const [selectedSection, setSelectedSection] = useState("coreExpertise");
  
  const sections = [
    {
      id: "coreExpertise",
      icon: Shield,
      title: t.about.coreExpertise.title,
      description: t.about.coreExpertise.description,
      testid: "text-core-expertise"
    },
    {
      id: "managementSystems",
      icon: Award,
      title: t.about.managementSystems.title,
      description: t.about.managementSystems.description,
      testid: "text-management-systems"
    },
    {
      id: "leadershipStyle",
      icon: Users,
      title: t.about.leadershipStyle.title,
      description: t.about.leadershipStyle.description,
      testid: "text-leadership-style"
    },
    {
      id: "environmentalFocus",
      icon: Leaf,
      title: t.about.environmentalFocus.title,
      description: t.about.environmentalFocus.description,
      testid: "text-environmental-focus"
    }
  ];
  
  const currentSection = sections.find(s => s.id === selectedSection);
  
  return (
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="about-title">
            {t.about.title}
          </h2>
          
          <div className="bg-card rounded-xl shadow-lg print-friendly">
            {/* Titles as bullets */}
            <div className="flex flex-wrap gap-4 p-8 border-b border-muted">
              {sections.map((section) => {
                const IconComponent = section.icon;
                const isSelected = selectedSection === section.id;
                
                return (
                  <button
                    key={section.id}
                    onMouseEnter={() => setSelectedSection(section.id)}
                    onClick={() => setSelectedSection(section.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isSelected
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    data-testid={`about-section-${section.id}`}
                  >
                    <IconComponent size={18} />
                    <span>{section.title}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Content area */}
            <div className="p-8 min-h-[300px] flex items-center">
              {currentSection && (
                <p className="text-card-foreground leading-relaxed animate-in fade-in duration-300" data-testid={currentSection.testid}>
                  {currentSection.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
