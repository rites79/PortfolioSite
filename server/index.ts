// TypeScript entry point that properly imports and runs the JavaScript implementation
import express from 'express';
import { connectDB } from './db.js';
import { router } from './routes.js';
import { registerVite } from './vite.js';

const app = express();
const port = parseInt(process.env.PORT as string) || 5000;

// Initialize the server
async function startServer() {
  try {
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
  } catch (error) {
    console.error('Server startup error:', error);
    process.exit(1);
  }
}

startServer();