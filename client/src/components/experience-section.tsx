import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ExperienceSection() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      companyKey: "medifarma",
      positionKey: "deputyManagerEnvironment",
      location: "Lima Province, Peru",
      startYear: "2019",
      type: "single"
    },
    {
      companyKey: "sanMiguel",
      positionKey: "deputyManagerSafety",
      location: "Peru, Colombia, Ecuador, El Salvador, Mexico, Panama, Guatemala, Argentina, Chile",
      startYear: "2014",
      type: "single"
    },
    {
      companyKey: "sanFernando",
      positionKey: "headSafety",
      location: "Lima Province, Peru",
      startYear: "2012",
      type: "single"
    },
    {
      companyKey: "backus",
      positionKey: "industrialSupervisor",
      location: "Lima Province, Peru",
      startYear: "2010",
      type: "single"
    },
    {
      companyKey: "chocolate",
      positionKey: "headSafety",
      location: "Lima Province, Peru",
      startYear: "2007",
      type: "single"
    },
    {
      companyKey: "mapfre",
      positionKey: "safetyEngineer",
      location: "Lima Province, Peru",
      startYear: "2006",
      type: "single",
      isEarly: true
    },
    {
      companyKey: "rimac",
      positionKey: "safetyEngineer",
      location: "Lima Province, Peru",
      startYear: "2001",
      type: "single",
      isEarly: true
    },
    {
      companyKey: "cosapi",
      positionKey: "safetyEngineer",
      location: "Lima Province, Peru",
      startYear: "1998",
      type: "single",
      isEarly: true
    }
  ];

  // Estado para manejar la experiencia seleccionada (por defecto la más reciente)
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section id="experience" className="py-20 bg-background" data-testid="experience-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="experience-title">
            {t.experience.title}
          </h2>
          
          {/* Línea de tiempo horizontal */}
          <div className="mb-12">
            <div className="relative">
              {/* Línea horizontal */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
              
              {/* Años en la línea de tiempo */}
              <div className="flex justify-between items-center relative z-10">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedExperience(exp)}
                    onMouseEnter={() => setSelectedExperience(exp)}
                    className={`group relative transition-all duration-300 ${
                      selectedExperience.startYear === exp.startYear 
                        ? 'scale-110' 
                        : 'hover:scale-105'
                    }`}
                    data-testid={`timeline-year-${exp.startYear}`}
                  >
                    {/* Círculo del año */}
                    <div className={`w-4 h-4 rounded-full border-4 border-background shadow-lg transition-all duration-300 ${
                      selectedExperience.startYear === exp.startYear
                        ? (exp.isEarly ? 'bg-secondary' : 'bg-primary')
                        : 'bg-muted hover:bg-primary/50'
                    }`}></div>
                    
                    {/* Año */}
                    <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-medium transition-all duration-300 ${
                      selectedExperience.startYear === exp.startYear
                        ? 'text-primary font-bold'
                        : 'text-muted-foreground group-hover:text-primary'
                    }`}>
                      {exp.startYear}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contenido de la experiencia seleccionada */}
          <div className="mt-16">
            <div className="bg-card rounded-xl p-8 shadow-lg print-friendly hover:shadow-xl transition-all duration-300" data-testid="selected-experience-card">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2" data-testid="selected-position">
                    {t.experience.positions[selectedExperience.positionKey as keyof typeof t.experience.positions]}
                  </h3>
                  <h4 className="text-xl font-semibold text-primary mb-2" data-testid="selected-company">
                    {t.experience.companies[selectedExperience.companyKey as keyof typeof t.experience.companies]}
                  </h4>
                </div>
                <span className="text-primary font-bold text-xl bg-primary/10 px-4 py-2 rounded-lg" data-testid="selected-year">
                  {selectedExperience.startYear}
                </span>
              </div>
              
              {selectedExperience.location && (
                <div className="flex items-center text-muted-foreground">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-lg" data-testid="selected-location">
                    {selectedExperience.location}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
