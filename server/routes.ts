import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get all experiences
  app.get("/api/experiences", async (_req, res) => {
    try {
      const experiences = await storage.getExperiences();
      res.json(experiences);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch experiences" });
    }
  });

  // Get all education
  app.get("/api/education", async (_req, res) => {
    try {
      const education = await storage.getEducation();
      res.json(education);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch education" });
    }
  });

  // Get all skills
  app.get("/api/skills", async (_req, res) => {
    try {
      const skills = await storage.getSkills();
      res.json(skills);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch skills" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Get all contact submissions (admin)
  app.get("/api/contacts", async (_req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Get single contact (admin)
  app.get("/api/contacts/:id", async (req, res) => {
    try {
      const contact = await storage.getContact(req.params.id);
      if (!contact) {
        return res.status(404).json({ error: "Contact not found" });
      }
      res.json(contact);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact" });
    }
  });

  // Mark contact as read (admin)
  app.patch("/api/contacts/:id/read", async (req, res) => {
    try {
      const contact = await storage.markContactAsRead(req.params.id);
      if (!contact) {
        return res.status(404).json({ error: "Contact not found" });
      }
      res.json(contact);
    } catch (error) {
      res.status(500).json({ error: "Failed to update contact" });
    }
  });

  // Delete contact (admin)
  app.delete("/api/contacts/:id", async (req, res) => {
    try {
      const deleted = await storage.deleteContact(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Contact not found" });
      }
      res.json({ success: true, message: "Contact deleted" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete contact" });
    }
  });

  // Portfolio data endpoint - returns all public data
  app.get("/api/portfolio", async (_req, res) => {
    try {
      const [experiences, education, skills] = await Promise.all([
        storage.getExperiences(),
        storage.getEducation(),
        storage.getSkills()
      ]);
      
      res.json({
        experiences,
        education,
        skills,
        profile: {
          name: "Héctor Párraga",
          titleEn: "Safety, Health & Environment Expert",
          titleEs: "Experto en Seguridad, Salud y Medio Ambiente",
          email: "hparraga@gmail.com",
          phone: "+51 993474925",
          linkedin: "https://linkedin.com/in/hector-parraga-35718816",
          location: "Peru"
        }
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio data" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      version: "1.0.0"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
