import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully", data: message });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ success: false, message: "Failed to send message" });
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Get messages error:", error);
      res.status(500).json({ success: false, message: "Failed to retrieve messages" });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      // In a real application, you would serve the actual resume file
      // For now, we'll create a simple text response indicating the download
      const resumeContent = `
RITESH KUMAR
Electrical & Electronics Engineering Student
IIIT Bhubaneswar

Email: ritesh4403@gmail.com
Phone: +91 7979732458
Location: Patna, Bihar 801503

This is a placeholder for the actual resume PDF.
In production, this would serve the actual resume file.
      `.trim();

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Ritesh_Kumar_Resume.pdf"');
      res.send(resumeContent);
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ success: false, message: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
