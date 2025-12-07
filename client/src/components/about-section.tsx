import { useState } from "react";
import { Shield, Award, Users, Leaf, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const [selectedSection, setSelectedSection] = useState("coreExpertise");
  
  const sections = [
    {
      id: "coreExpertise",
      icon: Shield,
      color: "from-primary to-primary",
      title: t.about.coreExpertise.title,
      description: t.about.coreExpertise.description,
      testid: "text-core-expertise"
    },
    {
      id: "managementSystems",
      icon: Award,
      color: "from-primary to-primary",
      title: t.about.managementSystems.title,
      description: t.about.managementSystems.description,
      testid: "text-management-systems"
    },
    {
      id: "leadershipStyle",
      icon: Users,
      color: "from-primary to-primary",
      title: t.about.leadershipStyle.title,
      description: t.about.leadershipStyle.description,
      testid: "text-leadership-style"
    },
    {
      id: "environmentalFocus",
      icon: Leaf,
      color: "from-primary to-primary",
      title: t.about.environmentalFocus.title,
      description: t.about.environmentalFocus.description,
      testid: "text-environmental-focus"
    }
  ];
  
  const currentSection = sections.find(s => s.id === selectedSection);
  
  return (
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-foreground" data-testid="about-title">
            {t.about.title}
          </h2>
          
          <div className="space-y-8">
            {/* Interactive Cards Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sections.map((section) => {
                const IconComponent = section.icon;
                const isSelected = selectedSection === section.id;
                
                return (
                  <button
                    key={section.id}
                    onMouseEnter={() => setSelectedSection(section.id)}
                    onClick={() => setSelectedSection(section.id)}
                    className={`group relative overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105 ${
                      isSelected 
                        ? "shadow-2xl" 
                        : "shadow-lg hover:shadow-xl"
                    }`}
                    data-testid={`about-section-${section.id}`}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-${isSelected ? '100' : '80'} group-hover:opacity-90 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative p-6 text-white flex flex-col items-center justify-center min-h-[200px]">
                      <IconComponent 
                        size={40} 
                        className={`mb-4 transition-transform duration-500 ${isSelected ? 'scale-125 rotate-0' : 'group-hover:scale-110'}`}
                      />
                      <h3 className="text-lg font-bold text-center leading-tight">{section.title}</h3>
                      <ChevronRight 
                        size={20} 
                        className={`mt-4 transition-all duration-500 ${isSelected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0'}`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Content Display Area */}
            {currentSection && (
              <div className="bg-gradient-to-br from-card to-card/80 rounded-2xl shadow-2xl overflow-hidden border border-primary/10">
                {/* Header */}
                <div className={`bg-gradient-to-r ${currentSection.color} p-8 md:p-10`}>
                  <div className="flex items-center gap-4">
                    {(() => {
                      const Icon = currentSection.icon;
                      return <Icon size={32} className="text-white" />;
                    })()}
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{currentSection.title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-10">
                  <p 
                    className="text-card-foreground leading-relaxed text-lg animate-in fade-in slide-in-from-bottom-4 duration-500"
                    data-testid={currentSection.testid}
                  >
                    {currentSection.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
