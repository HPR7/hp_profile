import { HardHat, ClipboardCheck, Leaf, AlertTriangle, Users, Bot } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: HardHat,
      title: "Health & Safety",
      description: "Occupational safety programs and compliance management"
    },
    {
      icon: ClipboardCheck,
      title: "Management Systems",
      description: "ISO 9001, 14001, 45001 implementation and auditing"
    },
    {
      icon: Leaf,
      title: "Environmental Management",
      description: "Sustainability programs and waste reduction strategies"
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation planning"
    },
    {
      icon: Users,
      title: "Training & Development",
      description: "Employee education and safety culture development"
    },
    {
      icon: Bot,
      title: "AI Integration",
      description: "Using AI agents to increase productivity"
    }
  ];

  return (
    <section className="py-20 bg-muted" data-testid="skills-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="skills-title">
            Core Skills & Expertise
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
