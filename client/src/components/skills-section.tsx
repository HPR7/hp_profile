import { HardHat, ClipboardCheck, Leaf, AlertTriangle, Users, Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SkillsSection() {
  const { t } = useLanguage();
  
  const skills = [
    {
      icon: HardHat,
      title: t.skills.items[0].title,
      description: t.skills.items[0].description
    },
    {
      icon: ClipboardCheck,
      title: t.skills.items[1].title,
      description: t.skills.items[1].description
    },
    {
      icon: Leaf,
      title: t.skills.items[2].title,
      description: t.skills.items[2].description
    },
    {
      icon: AlertTriangle,
      title: t.skills.items[3].title,
      description: t.skills.items[3].description
    },
    {
      icon: Users,
      title: t.skills.items[4].title,
      description: t.skills.items[4].description
    },
    {
      icon: Bot,
      title: t.skills.items[5].title,
      description: t.skills.items[5].description
    }
  ];

  return (
    <section className="py-20 bg-muted" data-testid="skills-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="skills-title">
            {t.skills.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-md print-friendly hover:shadow-lg transition-shadow"
                  data-testid={`skill-card-${index}`}
                >
                  <div className="flex items-center mb-3">
                    <IconComponent className="text-primary text-xl mr-3" size={20} />
                    <h3 className="font-semibold text-card-foreground">{skill.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
