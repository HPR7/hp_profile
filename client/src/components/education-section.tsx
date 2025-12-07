import { GraduationCap, Cog, Bot, Shield, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function EducationSection() {
  const { t } = useLanguage();
  
  const education = [
    {
      degree: t.education.degrees.mba,
      institution: t.education.institutions.centrum,
      field: t.education.fields.businessAdmin,
      period: "2008 - 2010",
      icon: GraduationCap,
      color: "bg-primary"
    },
    {
      degree: t.education.degrees.bachelor,
      institution: t.education.institutions.trujillo,
      field: t.education.fields.industrialEng,
      period: "1992 - 1997",
      icon: Cog,
      color: "bg-secondary"
    },
    {
      degree: t.education.degrees.diploma,
      institution: t.education.institutions.ipae,
      field: t.education.fields.insurance,
      period: "2004 - 2005",
      icon: Shield,
      color: "bg-accent"
    }
  ];

  const specializedTraining = [
    {
      title: t.education.trainings.aiFormation,
      institution: t.education.institutions.learningHeroes,
      duration: "384 Horas",
      year: "2026",
      icon: Bot
    },
    {
      title: t.education.trainings.laborLaw,
      institution: t.education.institutions.valdizan,
      duration: "384 Horas",
      year: "2021",
      icon: Award
    },
    {
      title: t.education.trainings.emergencyManagement,
      institution: t.education.institutions.innovaPucp,
      duration: "60 Horas",
      year: "2018",
      icon: Award
    },
    {
      title: t.education.trainings.riskManagement,
      institution: t.education.institutions.innovaPucp,
      duration: "160 Horas",
      year: "2016",
      icon: Shield
    }
  ];

  return (
    <section id="education" className="py-20 bg-background" data-testid="education-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="education-title">
            {t.education.title}
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
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
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground" data-testid="specialized-training-title">
              {t.education.specializedTraining}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {specializedTraining.map((training, index) => {
                const IconComponent = training.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-lg print-friendly hover:shadow-xl transition-shadow"
                    data-testid={`training-card-${index}`}
                  >
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="text-primary-foreground" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-card-foreground mb-2" data-testid={`training-title-${index}`}>
                          {training.title}
                        </h4>
                        <p className="text-primary font-semibold mb-1" data-testid={`training-institution-${index}`}>
                          {training.institution}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                            {training.duration}
                          </span>
                          <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                            {training.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground" data-testid="certifications-title">
              {t.education.certifications}
            </h3>
            <div className="bg-card rounded-xl p-8 shadow-lg print-friendly" data-testid="ai-certification">
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-4 text-primary-foreground flex items-center">
                  <Bot className="text-2xl mr-3" size={24} />
                  <span className="font-semibold">{t.education.aiCertification}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
