# Portfolio Website - replit.md

## Overview

This is a modern, responsive portfolio website built for Ritesh Kumar, an Electrical & Electronics Engineering student. The application showcases education, projects, experience, skills, achievements, leadership activities, and provides a contact form. The website is built using a full-stack architecture with React frontend, Express backend, and PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture pattern with clear separation between frontend and backend concerns:

**Frontend**: React-based single-page application with JavaScript (JSX)
**Backend**: Express.js server with JavaScript
**Database**: MongoDB with Mongoose ODM
**Styling**: Tailwind CSS with shadcn/ui components
**Build Tool**: Vite for frontend bundling

## Key Components

### Frontend Architecture
- **React with JavaScript**: Modern component development using JSX
- **Vite**: Fast development server and build tool
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **shadcn/ui**: Pre-built accessible component library
- **Framer Motion**: Animation library for smooth transitions
- **React Query (@tanstack/react-query)**: Server state management
- **Wouter**: Lightweight client-side routing

### Backend Architecture
- **Express.js**: Web application framework
- **JavaScript**: Modern ES6+ server-side code
- **Mongoose ODM**: Document-based database operations
- **MongoDB**: NoSQL document database for data persistence

### UI Components
The application uses a comprehensive set of shadcn/ui components including:
- Navigation, Cards, Buttons, Forms
- Progress bars, Badges, Dialogs
- Toast notifications, Tooltips
- Responsive layout components

### Database Schema
- **Users collection**: Basic user management (currently unused in portfolio context)
- **Contact Messages collection**: Stores form submissions with name, email, message, and timestamp
- **MongoDB ObjectIds**: Auto-generated unique identifiers

## Data Flow

1. **Static Portfolio Data**: Stored in `client/src/data/portfolio.ts` containing all personal information, education, projects, experience, skills, achievements, and leadership activities
2. **Contact Form Submission**: 
   - User fills contact form → Frontend validation → API request to `/api/contact`
   - Backend validates data using Zod schemas → Stores in MongoDB → Returns success response
   - Frontend shows toast notification based on response
3. **Resume Download**: Direct API endpoint `/api/resume/download` serves resume file
4. **Message Retrieval**: Admin endpoint `/api/contact` to retrieve all contact messages

## External Dependencies

### Database
- **MongoDB Atlas**: Cloud-hosted MongoDB database service
- **Mongoose**: MongoDB object modeling for Node.js

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Font Awesome**: Additional icons (referenced in components)

### Development Tools
- **Replit Integration**: Development environment support with banner and cartographer plugins
- **ESBuild**: Fast JavaScript bundler for production builds

### Storage Strategy
**MongoDB Database**: Fully integrated with Mongoose ODM using `DatabaseStorage` class for production-ready data persistence. Contact form submissions are stored in the MongoDB database with proper schema validation.

## Deployment Strategy

### Development
- **Development Server**: Vite dev server with HMR (Hot Module Replacement)
- **Backend Server**: Express server with JavaScript via Node.js
- **Database**: MongoDB connection with Mongoose schema definitions

### Production Build
- **Frontend Build**: Vite builds React app to `dist/public`
- **Backend Build**: ESBuild bundles server code to `dist/index.js`
- **Static File Serving**: Express serves built frontend files
- **Database Migrations**: Drizzle migrations in `./migrations` directory

### Environment Configuration
- Requires `MONGODB_URI` environment variable for MongoDB connection
- Supports both development and production environments
- Replit-specific optimizations for cloud development

### Key Architectural Decisions

1. **Monorepo Structure**: Frontend (`client/`), backend (`server/`), and shared code (`shared/`) in single repository for easier development and deployment

2. **Modern JavaScript**: ES6+ JavaScript implementation across frontend and backend with JSX for React components

3. **Component-Based UI**: Modular React components for each portfolio section (Hero, About, Projects, etc.) promoting reusability and maintainability

4. **Document Database Approach**: Mongoose ODM with MongoDB provides flexible document-based data operations and schema validation

5. **Responsive Design**: Mobile-first approach using Tailwind CSS ensures excellent user experience across all devices

6. **Performance Optimization**: Vite for fast development builds, lazy loading, and optimized production bundles

7. **Accessibility**: shadcn/ui components built on Radix UI primitives ensure WCAG compliance and keyboard navigation support

## Recent Changes: Latest modifications with dates
- **January 26, 2025**: Successfully integrated user's formal profile photo into Hero section replacing placeholder icon
- **January 26, 2025**: Created all missing component files (Navigation, About, Projects, Experience, Skills, Achievements, Leadership, Contact) to fix import errors
- **January 26, 2025**: Complete portfolio website deployed with all sections functional including contact form and resume download
- **January 26, 2025**: Integrated PostgreSQL database with Drizzle ORM for persistent contact form storage
- **January 26, 2025**: Converted entire codebase from TypeScript to JavaScript (TSX to JSX)
- **January 26, 2025**: Migrated from PostgreSQL to MongoDB with Mongoose ODM