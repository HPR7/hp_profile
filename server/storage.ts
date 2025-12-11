import { 
  type User, type InsertUser,
  type ContactSubmission, type InsertContact,
  type Experience, type InsertExperience,
  type Education, type InsertEducation,
  type Skill, type InsertSkill
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<ContactSubmission>;
  getContacts(): Promise<ContactSubmission[]>;
  getContact(id: string): Promise<ContactSubmission | undefined>;
  markContactAsRead(id: string): Promise<ContactSubmission | undefined>;
  deleteContact(id: string): Promise<boolean>;
  
  getExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  getEducation(): Promise<Education[]>;
  createEducation(education: InsertEducation): Promise<Education>;
  
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, ContactSubmission>;
  private experiences: Map<string, Experience>;
  private educationItems: Map<string, Education>;
  private skills: Map<string, Skill>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.experiences = new Map();
    this.educationItems = new Map();
    this.skills = new Map();
    
    this.seedData();
  }

  private seedData() {
    const experienceData: InsertExperience[] = [
      {
        companyEn: "Medifarma",
        companyEs: "Medifarma",
        positionEn: "Deputy Manager of Environment, Health and Safety",
        positionEs: "Sub Gerente de Seguridad, Salud Ocupacional y Medio Ambiente",
        location: "Lima Province, Peru",
        startYear: "2019",
        endYear: null,
        isEarly: false,
        sortOrder: "1"
      },
      {
        companyEn: "San Miguel Industrias PET S.A.",
        companyEs: "San Miguel Industrias PET S.A.",
        positionEn: "Deputy Manager of Safety and Health Occupational",
        positionEs: "Sub Gerente de Seguridad y Salud Ocupacional",
        location: "Peru, Colombia, Ecuador, El Salvador, Mexico, Panama, Guatemala, Argentina, Chile",
        startYear: "2014",
        endYear: "2019",
        isEarly: false,
        sortOrder: "2"
      },
      {
        companyEn: "San Fernando",
        companyEs: "San Fernando",
        positionEn: "Head of Safety and Health at Work",
        positionEs: "Jefe de Seguridad y Salud en el Trabajo",
        location: "Lima Province, Peru",
        startYear: "2012",
        endYear: "2014",
        isEarly: false,
        sortOrder: "3"
      },
      {
        companyEn: "Backus",
        companyEs: "Backus",
        positionEn: "Industrial Safety Supervisor",
        positionEs: "Supervisor de Seguridad Industrial",
        location: "Lima Province, Peru",
        startYear: "2010",
        endYear: "2012",
        isEarly: false,
        sortOrder: "4"
      },
      {
        companyEn: "Compañía Nacional de Chocolates de Peru SA",
        companyEs: "Compañía Nacional de Chocolates de Peru SA",
        positionEn: "Head of Safety and Health at Work",
        positionEs: "Jefe de Seguridad y Salud en el Trabajo",
        location: "Lima Province, Peru",
        startYear: "2007",
        endYear: "2010",
        isEarly: false,
        sortOrder: "5"
      },
      {
        companyEn: "MAPFRE PERÚ",
        companyEs: "MAPFRE PERÚ",
        positionEn: "Safety Engineer",
        positionEs: "Ingeniero de Seguridad",
        location: "Lima Province, Peru",
        startYear: "2006",
        endYear: "2007",
        isEarly: true,
        sortOrder: "6"
      },
      {
        companyEn: "Rimac Internacional S.A. EPS",
        companyEs: "Rimac Internacional S.A. EPS",
        positionEn: "Safety Engineer",
        positionEs: "Ingeniero de Seguridad",
        location: "Lima Province, Peru",
        startYear: "2001",
        endYear: "2006",
        isEarly: true,
        sortOrder: "7"
      },
      {
        companyEn: "COSAPI S.A. / Sandwell SSK S.A. / Sagitario S.A. / GyM S.A.",
        companyEs: "COSAPI S.A. / Sandwell SSK S.A. / Sagitario S.A. / GyM S.A.",
        positionEn: "Safety Engineer",
        positionEs: "Ingeniero de Seguridad",
        location: "Lima Province, Peru",
        startYear: "1998",
        endYear: "2001",
        isEarly: true,
        sortOrder: "8"
      }
    ];

    experienceData.forEach(exp => {
      const id = randomUUID();
      const experience: Experience = {
        id,
        companyEn: exp.companyEn,
        companyEs: exp.companyEs,
        positionEn: exp.positionEn,
        positionEs: exp.positionEs,
        location: exp.location,
        startYear: exp.startYear,
        endYear: exp.endYear ?? null,
        isEarly: exp.isEarly ?? false,
        sortOrder: exp.sortOrder
      };
      this.experiences.set(id, experience);
    });

    const educationData: InsertEducation[] = [
      {
        degreeEn: "Master of Business Administration (M.B.A.)",
        degreeEs: "Maestría en Administración de Empresas (M.B.A.)",
        institutionEn: "CENTRUM Graduate Business School",
        institutionEs: "CENTRUM Graduate Business School",
        fieldEn: "Business Administration and Management, General",
        fieldEs: "Administración de Empresas y Gestión, General",
        startYear: "2008",
        endYear: "2010",
        type: "degree",
        sortOrder: "1"
      },
      {
        degreeEn: "Bachelor's Degree",
        degreeEs: "Licenciatura",
        institutionEn: "Universidad Nacional de Trujillo",
        institutionEs: "Universidad Nacional de Trujillo",
        fieldEn: "Industrial Engineering",
        fieldEs: "Ingeniería Industrial",
        startYear: "1992",
        endYear: "1997",
        type: "degree",
        sortOrder: "2"
      },
      {
        degreeEn: "Insurance Specialist Diploma",
        degreeEs: "Diploma de Especialista en Seguros",
        institutionEn: "Instituto Peruano de Administración de Empresas – IPAE",
        institutionEs: "Instituto Peruano de Administración de Empresas – IPAE",
        fieldEn: "Insurance Specialization",
        fieldEs: "Especialización en Seguros",
        startYear: "2004",
        endYear: "2005",
        type: "degree",
        sortOrder: "3"
      },
      {
        degreeEn: "Diploma in AI Training and Automation",
        degreeEs: "Diploma en Formación en Inteligencia Artificial y Automatizaciones",
        institutionEn: "Learning Heroes",
        institutionEs: "Learning Heroes",
        fieldEn: "AI and Automation",
        fieldEs: "IA y Automatización",
        startYear: "2025",
        endYear: "2026",
        type: "training",
        sortOrder: "4"
      },
      {
        degreeEn: "Diploma in Labor Law and Legal Management of Human Resources",
        degreeEs: "Diplomado en Derecho Laboral y Gestión Legal de Recursos Humanos",
        institutionEn: "Universidad Nacional Hermilio Valdizán",
        institutionEs: "Universidad Nacional Hermilio Valdizán",
        fieldEn: "Labor Law",
        fieldEs: "Derecho Laboral",
        startYear: "2021",
        endYear: "2021",
        type: "training",
        sortOrder: "5"
      },
      {
        degreeEn: "Emergency, Crisis and Business Continuity Management",
        degreeEs: "Gestión de Emergencias, Crisis y Continuidad del Negocio",
        institutionEn: "INNOVA PUCP",
        institutionEs: "INNOVA PUCP",
        fieldEn: "Emergency Management",
        fieldEs: "Gestión de Emergencias",
        startYear: "2018",
        endYear: "2018",
        type: "training",
        sortOrder: "6"
      },
      {
        degreeEn: "Risk Management and Insurance in Safety and Health",
        degreeEs: "Gestión de Riesgos y Seguros en Seguridad y Salud",
        institutionEn: "INNOVA PUCP",
        institutionEs: "INNOVA PUCP",
        fieldEn: "Risk Management",
        fieldEs: "Gestión de Riesgos",
        startYear: "2016",
        endYear: "2016",
        type: "training",
        sortOrder: "7"
      }
    ];

    educationData.forEach(edu => {
      const id = randomUUID();
      this.educationItems.set(id, { ...edu, id });
    });

    const skillsData: InsertSkill[] = [
      {
        titleEn: "Health & Safety",
        titleEs: "Salud y Seguridad",
        descriptionEn: "Occupational safety programs and compliance management",
        descriptionEs: "Programas de seguridad ocupacional y gestión de cumplimiento",
        icon: "shield",
        sortOrder: "1"
      },
      {
        titleEn: "Management Systems",
        titleEs: "Sistemas de Gestión",
        descriptionEn: "ISO 9001, 14001, 45001 implementation and auditing",
        descriptionEs: "Implementación y auditoría ISO 9001, 14001, 45001",
        icon: "settings",
        sortOrder: "2"
      },
      {
        titleEn: "Environmental Management",
        titleEs: "Gestión Ambiental",
        descriptionEn: "Sustainability programs and waste reduction strategies",
        descriptionEs: "Programas de sostenibilidad y estrategias de reducción de desperdicios",
        icon: "leaf",
        sortOrder: "3"
      },
      {
        titleEn: "Risk Management",
        titleEs: "Gestión de Riesgos",
        descriptionEn: "Comprehensive risk assessment and mitigation planning",
        descriptionEs: "Evaluación integral de riesgos y planificación de mitigación",
        icon: "alert-triangle",
        sortOrder: "4"
      },
      {
        titleEn: "Training & Development",
        titleEs: "Formación y Desarrollo",
        descriptionEn: "Employee education and safety culture development",
        descriptionEs: "Educación de empleados y desarrollo de cultura de seguridad",
        icon: "users",
        sortOrder: "5"
      },
      {
        titleEn: "AI Integration",
        titleEs: "Integración de IA",
        descriptionEn: "Using AI agents to increase productivity",
        descriptionEs: "Uso de agentes de IA para incrementar la productividad",
        icon: "bot",
        sortOrder: "6"
      }
    ];

    skillsData.forEach(skill => {
      const id = randomUUID();
      this.skills.set(id, { ...skill, id });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(contact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const newContact: ContactSubmission = {
      id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone ?? null,
      company: contact.company ?? null,
      message: contact.message,
      read: false,
      createdAt: new Date()
    };
    this.contacts.set(id, newContact);
    return newContact;
  }

  async getContacts(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values()).sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });
  }

  async getContact(id: string): Promise<ContactSubmission | undefined> {
    return this.contacts.get(id);
  }

  async markContactAsRead(id: string): Promise<ContactSubmission | undefined> {
    const contact = this.contacts.get(id);
    if (contact) {
      contact.read = true;
      this.contacts.set(id, contact);
      return contact;
    }
    return undefined;
  }

  async deleteContact(id: string): Promise<boolean> {
    return this.contacts.delete(id);
  }

  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values()).sort((a, b) => 
      a.sortOrder.localeCompare(b.sortOrder)
    );
  }

  async createExperience(experience: InsertExperience): Promise<Experience> {
    const id = randomUUID();
    const newExperience: Experience = {
      id,
      companyEn: experience.companyEn,
      companyEs: experience.companyEs,
      positionEn: experience.positionEn,
      positionEs: experience.positionEs,
      location: experience.location,
      startYear: experience.startYear,
      endYear: experience.endYear ?? null,
      isEarly: experience.isEarly ?? false,
      sortOrder: experience.sortOrder
    };
    this.experiences.set(id, newExperience);
    return newExperience;
  }

  async getEducation(): Promise<Education[]> {
    return Array.from(this.educationItems.values()).sort((a, b) => 
      a.sortOrder.localeCompare(b.sortOrder)
    );
  }

  async createEducation(education: InsertEducation): Promise<Education> {
    const id = randomUUID();
    const newEducation: Education = { ...education, id };
    this.educationItems.set(id, newEducation);
    return newEducation;
  }

  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values()).sort((a, b) => 
      a.sortOrder.localeCompare(b.sortOrder)
    );
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const id = randomUUID();
    const newSkill: Skill = { ...skill, id };
    this.skills.set(id, newSkill);
    return newSkill;
  }
}

export const storage = new MemStorage();
