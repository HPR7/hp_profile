import { useLanguage } from "@/contexts/LanguageContext";

export default function ExperienceSection() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      company: "Medifarma",
      position: "Deputy Manager of Environment, Health and Safety",
      location: "Lima Province, Peru",
      startYear: "2019",
      type: "single"
    },
    {
      company: "San Miguel Industrias PET S.A.",
      position: "Deputy Manager of Safety and Health Occupational",
      location: "Peru, Colombia, Ecuador, El Salvador, Mexico, Panama, Guatemala, Argentina, Chile",
      startYear: "2017",
      type: "single"
    },
    {
      company: "San Fernando",
      position: "Head of Safety and Health at Work",
      location: "Lima Province, Peru",
      startYear: "2012",
      type: "single"
    },
    {
      company: "Backus",
      position: "Industrial Safety Supervisor",
      location: "Lima Province, Peru",
      startYear: "2010",
      type: "single"
    },
    {
      company: "Compañía Nacional de Chocolates de Peru SA",
      position: "Head of Industrial Safety",
      location: "Lima Province, Peru",
      startYear: "2007",
      type: "single"
    },
    {
      company: "MAPFRE PERÚ",
      position: "Safety Engineer",
      location: "Lima Province, Peru",
      startYear: "2006",
      type: "single",
      isEarly: true
    },
    {
      company: "Rimac Internacional S.A. EPS",
      position: "Safety Engineer",
      location: "Lima Province, Peru",
      startYear: "2001",
      type: "single",
      isEarly: true
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background" data-testid="experience-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="experience-title">
            {t.experience.title}
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 timeline-line no-print"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 lg:pl-20">
                  <div className={`absolute left-1 lg:left-5 w-6 h-6 ${exp.isEarly ? 'bg-secondary' : 'bg-primary'} rounded-full border-4 border-background shadow-lg no-print`}></div>
                  
                  <div className="bg-card rounded-xl p-8 shadow-lg print-friendly hover:shadow-xl transition-shadow" data-testid={`experience-card-${index}`}>
                    {exp.type === "single" ? (
                      <div>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-card-foreground" data-testid={`exp-position-${index}`}>
                              {exp.position}
                            </h3>
                            <h4 className="text-lg font-semibold text-primary" data-testid={`exp-company-${index}`}>
                              {exp.company}
                            </h4>
                          </div>
                          <span className="text-muted-foreground font-medium mt-2 lg:mt-0" data-testid={`exp-start-year-${index}`}>
                            {exp.startYear}
                          </span>
                        </div>
                        {exp.location && (
                          <p className="text-muted-foreground" data-testid={`exp-location-${index}`}>
                            {exp.location}
                          </p>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
