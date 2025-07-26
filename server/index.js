import express from 'express';
import 'dotenv/config';
import { connectDB } from './db.js';
import { router } from './routes.js';
import { registerVite } from './vite.js';

// Initialize Express app
const app = express();
const port = parseInt(process.env.PORT) || 5000;

// Initialize the server
async function startServer() {
  // Connect to MongoDB
  await connectDB();

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.use(router);

  // Setup Vite for development/production
  await registerVite(app);

  app.listen(port, '0.0.0.0', () => {
    console.log(`[express] serving on port ${port}`);
  });
}

startServer().catch(console.error);