import { GraduationCap, Cog, Bot } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Business Administration (M.B.A.)",
      institution: "CENTRUM Graduate Business School",
      field: "Business Administration and Management, General",
      period: "2008 - 2010",
      icon: GraduationCap,
      color: "bg-primary"
    },
    {
      degree: "Bachelor's Degree",
      institution: "Universidad Nacional de Trujillo",
      field: "Industrial Engineering",
      period: "1992 - 1997",
      icon: Cog,
      color: "bg-secondary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background" data-testid="education-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="education-title">
            Education & Qualifications
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-8 shadow-lg print-friendly hover:shadow-xl transition-shadow"
                  data-testid={`education-card-${index}`}
                >
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 ${edu.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      <IconComponent className="text-primary-foreground text-xl" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-card-foreground mb-2" data-testid={`edu-degree-${index}`}>
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mb-2" data-testid={`edu-institution-${index}`}>
                        {edu.institution}
                      </h4>
                      <p className="text-muted-foreground mb-2" data-testid={`edu-field-${index}`}>
                        {edu.field}
                      </p>
                      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full" data-testid={`edu-period-${index}`}>
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground" data-testid="certifications-title">
              Professional Certifications
            </h3>
            <div className="bg-card rounded-xl p-8 shadow-lg print-friendly" data-testid="ai-certification">
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-4 text-primary-foreground flex items-center">
                  <Bot className="text-2xl mr-3" size={24} />
                  <span className="font-semibold">AI Agents for Productivity Enhancement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
