import express from 'express';
import { connectDB } from './db.js';
import { router } from './routes.js';
import { setupVite } from './vite.js';

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
await connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(router);

// Setup Vite for development/production
await setupVite(app, null);

app.listen(port, '0.0.0.0', () => {
  console.log(`[express] serving on port ${port}`);
});