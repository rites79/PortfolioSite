import express from 'express';
import { storage } from './storage.js';
import { insertContactMessageSchema } from '../shared/schema.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const router = express.Router();

// Contact form submission
router.post('/api/contact', async (req, res) => {
  try {
    const validatedData = insertContactMessageSchema.parse(req.body);
    const message = await storage.createContactMessage(validatedData);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    if (error.name === 'ZodError') {
      res.status(400).json({ 
        success: false, 
        message: 'Invalid form data', 
        errors: error.errors 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      });
    }
  }
});

// Get all contact messages (admin endpoint)
router.get('/api/contact', async (req, res) => {
  try {
    const messages = await storage.getAllContactMessages();
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch messages' 
    });
  }
});

// Resume download endpoint
router.get('/api/resume/download', (req, res) => {
  const resumePath = path.join(__dirname, '..', 'attached_assets', 'Resume..._1753541345269.pdf');
  
  res.download(resumePath, 'Ritesh_Kumar_Resume.pdf', (err) => {
    if (err) {
      console.error('Resume download error:', err);
      res.status(404).json({ 
        success: false, 
        message: 'Resume file not found' 
      });
    }
  });
});