import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface Translations {
  // Navigation
  nav: {
    title: string;
    subtitle: string;
    about: string;
    experience: string;
    education: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    name: string;
    title: string;
    experience: string;
    getInTouch: string;
    linkedinProfile: string;
  };
  
  // About Section
  about: {
    title: string;
    coreExpertise: {
      title: string;
      description: string;
    };
    managementSystems: {
      title: string;
      description: string;
    };
    leadershipStyle: {
      title: string;
      description: string;
    };
    environmentalFocus: {
      title: string;
      description: string;
    };
  };
  
  // Skills Section
  skills: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  
  // Experience Section
  experience: {
    title: string;
    duration: string;
    total: string;
    companies: {
      medifarma: string;
      sanMiguel: string;
      sanFernando: string;
      backus: string;
      chocolate: string;
      mapfre: string;
      rimac: string;
      cosapi: string;
    };
    positions: {
      deputyManagerEnvironment: string;
      deputyManagerSafety: string;
      headSafety: string;
      industrialSupervisor: string;
      safetyEngineer: string;
    };
  };
  
  // Education Section
  education: {
    title: string;
    certifications: string;
    aiCertification: string;
    specializedTraining: string;
    degrees: {
      mba: string;
      bachelor: string;
      diploma: string;
    };
    institutions: {
      centrum: string;
      trujillo: string;
      ipae: string;
      innovaPucp: string;
      valdizan: string;
    };
    fields: {
      businessAdmin: string;
      industrialEng: string;
      insurance: string;
    };
    trainings: {
      emergencyManagement: string;
      riskManagement: string;
      laborLaw: string;
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    contactInfo: string;
    labels: {
      phone: string;
      email: string;
      linkedin: string;
      location: string;
    };
    cta: {
      title: string;
      description: string;
      callNow: string;
      sendEmail: string;
    };
  };
  
  // Footer
  footer: {
    title: string;
    copyright: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      title: "Héctor Párraga",
      subtitle: "Safety, Health & Environment Expert",
      about: "About",
      experience: "Experience",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      name: "Héctor Párraga",
      title: "Safety, Health & Environment Expert",
      experience: "25+ Years of Excellence in Management Systems",
      getInTouch: "Get In Touch",
      linkedinProfile: "LinkedIn Profile"
    },
    about: {
      title: "Professional Summary",
      coreExpertise: {
        title: "Core Expertise",
        description: "With over 25 years of experience in safety, health, and environment, I am a seasoned expert in optimizing resources through management systems to minimize costs and enhance organizational performance. I have worked in leading industrial, insurance, and construction companies, gaining extensive experience in safety, health, and environmental programs, compliance with legal requirements, and risk management."
      },
      managementSystems: {
        title: "Management Systems",
        description: "My expertise in management systems, including ISO 9001, ISO 14001, and ISO 45001, allows me to design and implement integrated management systems to ensure business excellence and customer satisfaction. I have led multiple audits and certification processes to ensure compliance with international standards."
      },
      leadershipStyle: {
        title: "Leadership Style",
        description: "My leadership style is collaborative and empowering, with a focus on building trust-based relationships and promoting accountability among employees. I am committed to promoting a safety culture in organizations, focusing on accident prevention and creating positive work environments."
      },
      environmentalFocus: {
        title: "Environmental Focus",
        description: "I have a passion for sustainability and environmental protection, implementing environmental management programs to reduce waste and promote efficient resource use. My goal is to help organizations achieve excellence in environmental performance while creating positive societal impact."
      }
    },
    skills: {
      title: "Core Skills & Expertise",
      items: [
        {
          title: "Health & Safety",
          description: "Occupational safety programs and compliance management"
        },
        {
          title: "Management Systems",
          description: "ISO 9001, 14001, 45001 implementation and auditing"
        },
        {
          title: "Environmental Management",
          description: "Sustainability programs and waste reduction strategies"
        },
        {
          title: "Risk Management",
          description: "Comprehensive risk assessment and mitigation planning"
        },
        {
          title: "Training & Development",
          description: "Employee education and safety culture development"
        },
        {
          title: "AI Integration",
          description: "Using AI agents to increase productivity"
        }
      ]
    },
    experience: {
      title: "Professional Experience",
      duration: "Duration",
      total: "Total",
      companies: {
        medifarma: "Medifarma",
        sanMiguel: "San Miguel Industrias PET S.A.",
        sanFernando: "San Fernando",
        backus: "Backus",
        chocolate: "Compañía Nacional de Chocolates de Peru SA",
        mapfre: "MAPFRE PERÚ",
        rimac: "Rimac Internacional S.A. EPS",
        cosapi: "COSAPI S.A. / Sandwell SSK S.A. / Sagitario S.A. / GyM S.A."
      },
      positions: {
        deputyManagerEnvironment: "Deputy Manager of Environment, Health and Safety",
        deputyManagerSafety: "Deputy Manager of Safety and Health Occupational",
        headSafety: "Head of Safety and Health at Work",
        industrialSupervisor: "Industrial Safety Supervisor",
        safetyEngineer: "Safety Engineer"
      }
    },
    education: {
      title: "Education & Qualifications",
      certifications: "Professional Certifications",
      aiCertification: "AI Agents for Productivity Enhancement",
      specializedTraining: "Specialized Training",
      degrees: {
        mba: "Master of Business Administration (M.B.A.)",
        bachelor: "Bachelor's Degree",
        diploma: "Insurance Specialist Diploma"
      },
      institutions: {
        centrum: "CENTRUM Graduate Business School",
        trujillo: "Universidad Nacional de Trujillo",
        ipae: "Instituto Peruano de Administración de Empresas – IPAE",
        innovaPucp: "INNOVA PUCP",
        valdizan: "Universidad Nacional Hermilio Valdizán",
        learningHeroes: "Learning Heroes"
      },
      fields: {
        businessAdmin: "Business Administration and Management, General",
        industrialEng: "Industrial Engineering",
        insurance: "Insurance Specialization"
      },
      trainings: {
        emergencyManagement: "Emergency, Crisis and Business Continuity Management",
        riskManagement: "Risk Management and Insurance in Safety and Health",
        laborLaw: "Diploma in Labor Law and Legal Management of Human Resources",
        aiFormation: "Diploma in AI Training and Automation"
      }
    },
    contact: {
      title: "Get In Touch",
      contactInfo: "Contact Information",
      labels: {
        phone: "Mobile Phone",
        email: "Email Address",
        linkedin: "LinkedIn Profile",
        location: "Location"
      },
      cta: {
        title: "Ready to Transform Your Business?",
        description: "Let's discuss how my 25+ years of expertise in safety, health, and environmental management can help optimize your resources and achieve your organizational goals.",
        callNow: "Contact Me",
        sendEmail: "Send Email"
      }
    },
    footer: {
      title: "Expert in Safety, Health & Environment Management",
      copyright: "© 2025 Héctor Párraga. Professional Resume & Portfolio."
    }
  },
  es: {
    nav: {
      title: "Héctor Párraga",
      subtitle: "Experto en Seguridad, Salud y Medio Ambiente",
      about: "Acerca de",
      experience: "Experiencia",
      education: "Educación",
      contact: "Contacto"
    },
    hero: {
      name: "Héctor Párraga",
      title: "Experto en Seguridad, Salud y Medio Ambiente",
      experience: "25+ Años de Excelencia en Sistemas de Gestión",
      getInTouch: "Ponte en Contacto",
      linkedinProfile: "Perfil de LinkedIn"
    },
    about: {
      title: "Resumen Profesional",
      coreExpertise: {
        title: "Experiencia Principal",
        description: "Con más de 25 años de experiencia en seguridad, salud y medio ambiente, soy un experto experimentado en optimizar recursos a través de sistemas de gestión para minimizar costos y mejorar el rendimiento organizacional. He trabajado en empresas industriales, de seguros y construcción líderes, obteniendo amplia experiencia en programas de seguridad, salud y medio ambiente, cumplimiento de requisitos legales y gestión de riesgos."
      },
      managementSystems: {
        title: "Sistemas de Gestión",
        description: "Mi experiencia en sistemas de gestión, incluyendo ISO 9001, ISO 14001 e ISO 45001, me permite diseñar e implementar sistemas de gestión integrados para asegurar la excelencia empresarial y la satisfacción del cliente. He dirigido múltiples auditorías y procesos de certificación para asegurar el cumplimiento de estándares internacionales."
      },
      leadershipStyle: {
        title: "Estilo de Liderazgo",
        description: "Mi estilo de liderazgo es colaborativo y empoderador, enfocado en construir relaciones basadas en la confianza y promover la responsabilidad entre los empleados. Estoy comprometido con promover una cultura de seguridad en las organizaciones, enfocándome en la prevención de accidentes y creando ambientes de trabajo positivos."
      },
      environmentalFocus: {
        title: "Enfoque Ambiental",
        description: "Tengo pasión por la sostenibilidad y protección ambiental, implementando programas de gestión ambiental para reducir desperdicios y promover el uso eficiente de recursos. Mi objetivo es ayudar a las organizaciones a lograr la excelencia en el desempeño ambiental mientras creo un impacto positivo en la sociedad."
      }
    },
    skills: {
      title: "Habilidades y Experiencia Principal",
      items: [
        {
          title: "Salud y Seguridad",
          description: "Programas de seguridad ocupacional y gestión de cumplimiento"
        },
        {
          title: "Sistemas de Gestión",
          description: "Implementación y auditoría ISO 9001, 14001, 45001"
        },
        {
          title: "Gestión Ambiental",
          description: "Programas de sostenibilidad y estrategias de reducción de desperdicios"
        },
        {
          title: "Gestión de Riesgos",
          description: "Evaluación integral de riesgos y planificación de mitigación"
        },
        {
          title: "Formación y Desarrollo",
          description: "Educación de empleados y desarrollo de cultura de seguridad"
        },
        {
          title: "Integración de IA",
          description: "Uso de agentes de IA para incrementar la productividad"
        }
      ]
    },
    experience: {
      title: "Experiencia Profesional",
      duration: "Duración",
      total: "Total",
      companies: {
        medifarma: "Medifarma",
        sanMiguel: "San Miguel Industrias PET S.A.",
        sanFernando: "San Fernando",
        backus: "Backus",
        chocolate: "Compañía Nacional de Chocolates de Peru SA",
        mapfre: "MAPFRE PERÚ",
        rimac: "Rimac Internacional S.A. EPS",
        cosapi: "COSAPI S.A. / Sandwell SSK S.A. / Sagitario S.A. / GyM S.A."
      },
      positions: {
        deputyManagerEnvironment: "Sub Gerente de Seguridad, Salud Ocupacional y Medio Ambiente",
        deputyManagerSafety: "Sub Gerente de Seguridad y Salud Ocupacional",
        headSafety: "Jefe de Seguridad y Salud en el Trabajo",
        industrialSupervisor: "Supervisor de Seguridad Industrial",
        safetyEngineer: "Ingeniero de Seguridad"
      }
    },
    education: {
      title: "Educación y Calificaciones",
      certifications: "Certificaciones Profesionales",
      aiCertification: "Agentes de IA para Incrementar la Productividad",
      specializedTraining: "Formación Especializada",
      degrees: {
        mba: "Maestría en Administración de Empresas (M.B.A.)",
        bachelor: "Licenciatura",
        diploma: "Diploma de Especialista en Seguros"
      },
      institutions: {
        centrum: "CENTRUM Graduate Business School",
        trujillo: "Universidad Nacional de Trujillo",
        ipae: "Instituto Peruano de Administración de Empresas – IPAE",
        innovaPucp: "INNOVA PUCP",
        valdizan: "Universidad Nacional Hermilio Valdizán",
        learningHeroes: "Learning Heroes"
      },
      fields: {
        businessAdmin: "Administración de Empresas y Gestión, General",
        industrialEng: "Ingeniería Industrial",
        insurance: "Especialización en Seguros"
      },
      trainings: {
        emergencyManagement: "Gestión de Emergencias, Crisis y Continuidad del Negocio",
        riskManagement: "Gestión de Riesgos y Seguros en Seguridad y Salud",
        laborLaw: "Diplomado en Derecho Laboral y Gestión Legal de Recursos Humanos",
        aiFormation: "Diploma en Formación en Inteligencia Artificial y Automatizaciones"
      }
    },
    contact: {
      title: "Ponte en Contacto",
      contactInfo: "Información de Contacto",
      labels: {
        phone: "Teléfono Móvil",
        email: "Dirección de Email",
        linkedin: "Perfil de LinkedIn",
        location: "Ubicación"
      },
      cta: {
        title: "¿Listo para Transformar tu Negocio?",
        description: "Discutamos cómo mis 25+ años de experiencia en gestión de seguridad, salud y medio ambiente pueden ayudar a optimizar tus recursos y lograr tus objetivos organizacionales.",
        callNow: "Contactame",
        sendEmail: "Enviar Email"
      }
    },
    footer: {
      title: "Experto en Gestión de Seguridad, Salud y Medio Ambiente",
      copyright: "© 2025 Héctor Párraga. Currículum y Portafolio Profesional."
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}