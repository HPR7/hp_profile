export default function ExperienceSection() {
  const experiences = [
    {
      company: "Medifarma",
      position: "Deputy Manager of Environment, Health and Safety",
      duration: "Sep 2019 - Apr 2023",
      location: "Lima Province, Peru",
      totalDuration: "3 years 8 months",
      type: "single"
    },
    {
      company: "San Miguel Industrias PET S.A.",
      totalDuration: "5 years 2 months",
      positions: [
        {
          title: "Deputy Manager of Safety and Health Occupational",
          duration: "Mar 2017 - Jun 2019",
          location: "Peru, Colombia, Ecuador, El Salvador, Mexico, Panama, Guatemala, Argentina, Chile",
          totalTime: "2 years 4 months"
        },
        {
          title: "Head of Safety and Health Occupational",
          duration: "May 2014 - Feb 2017",
          location: "Peru, Colombia, Ecuador, El Salvador, Mexico",
          totalTime: "2 years 10 months"
        }
      ],
      type: "multiple"
    },
    {
      company: "San Fernando",
      position: "Head of Safety and Health at Work",
      duration: "Dec 2012 - Apr 2014",
      location: "Lima",
      totalDuration: "1 year 5 months",
      type: "single"
    },
    {
      company: "Backus",
      position: "Industrial Safety Supervisor",
      duration: "Jul 2010 - Dec 2012",
      totalDuration: "2 years 6 months",
      type: "single"
    },
    {
      company: "Compañía Nacional de Chocolates de Peru SA",
      position: "Head of Industrial Safety",
      duration: "May 2007 - Mar 2010",
      totalDuration: "2 years 11 months",
      type: "single"
    },
    {
      company: "MAPFRE PERÚ",
      position: "Safety Engineer",
      duration: "Jul 2006 - Apr 2007",
      totalDuration: "10 months",
      type: "single",
      isEarly: true
    },
    {
      company: "Rimac Internacional S.A. EPS",
      position: "Safety Engineer",
      duration: "Dec 2001 - Jun 2006",
      totalDuration: "4 years 7 months",
      type: "single",
      isEarly: true
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background" data-testid="experience-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="experience-title">
            Professional Experience
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
                          <span className="text-muted-foreground font-medium mt-2 lg:mt-0" data-testid={`exp-duration-${index}`}>
                            {exp.duration}
                          </span>
                        </div>
                        {exp.location && (
                          <p className="text-muted-foreground mb-4" data-testid={`exp-location-${index}`}>
                            {exp.location}
                          </p>
                        )}
                        <div className="bg-muted/50 rounded-lg p-4">
                          <span className="text-sm font-medium text-accent-foreground">
                            Duration: {exp.totalDuration}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-card-foreground" data-testid={`exp-company-${index}`}>
                              {exp.company}
                            </h3>
                          </div>
                          <span className="text-muted-foreground font-medium mt-2 lg:mt-0">
                            Total: {exp.totalDuration}
                          </span>
                        </div>
                        
                        <div className="space-y-4">
                          {exp.positions?.map((position, posIndex) => (
                            <div key={posIndex} className="bg-muted/30 rounded-lg p-4">
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="font-semibold text-card-foreground" data-testid={`exp-pos-title-${index}-${posIndex}`}>
                                  {position.title}
                                </h5>
                                <span className="text-sm text-muted-foreground">
                                  {position.duration}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {position.location}
                              </p>
                              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                                {position.totalTime}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
