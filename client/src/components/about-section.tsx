import { useState } from "react";
import { Shield, Award, Users, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState("coreExpertise");
  
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
  
  return (
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="about-title">
            {t.about.title}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {sections.map((section) => {
              const IconComponent = section.icon;
              const isExpanded = expandedSection === section.id;
              
              return (
                <div 
                  key={section.id}
                  onMouseEnter={() => setExpandedSection(section.id)}
                  onMouseLeave={() => setExpandedSection("coreExpertise")}
                  onClick={() => setExpandedSection(section.id)}
                  className="bg-card rounded-xl shadow-lg print-friendly transition-all duration-300 cursor-pointer hover:shadow-xl min-h-[200px] flex flex-col"
                >
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold text-primary mb-4 flex items-center flex-shrink-0">
                      <IconComponent className="mr-2" size={20} />
                      {section.title}
                    </h3>
                    {isExpanded && (
                      <p className="text-card-foreground leading-relaxed animate-in fade-in duration-300 text-sm flex-grow" data-testid={section.testid}>
                        {section.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
