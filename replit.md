# Project Overview

## Overview

This is a full-stack web application built with React and Express.js that appears to be a professional portfolio website for Héctor Párraga, a Safety, Health & Environment expert. The application features a modern, responsive design with multiple sections including hero, about, skills, experience, education, and contact information. The project uses a monorepo structure with shared TypeScript schemas and is configured for both development and production deployment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **Routing**: Wouter for client-side routing
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Custom Vite integration for hot module replacement
- **Build System**: ESBuild for server-side bundling

### Project Structure
- **Monorepo Layout**: Separate `client/`, `server/`, and `shared/` directories
- **Client**: React application with component-based architecture
- **Server**: Express API with modular route organization
- **Shared**: Common TypeScript schemas and types using Drizzle and Zod

### Database Schema
- **Users Table**: Basic user entity with id, username, and password fields
- **Validation**: Zod schemas for runtime type checking and validation
- **Migrations**: Drizzle Kit for database schema management

### Development Features
- **Hot Reload**: Vite dev server integration with Express
- **TypeScript**: Full type safety across client, server, and shared code
- **Path Aliases**: Configured import aliases for clean module resolution
- **Error Handling**: Runtime error overlay for development debugging

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom theming
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets including brand icons

### Data and State Management
- **TanStack React Query**: Server state synchronization and caching
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **Zod**: Runtime type validation and schema definition

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL database service
- **Connect-pg-simple**: PostgreSQL session store for Express sessions

### Development Tools
- **Vite**: Fast build tool with HMR support
- **ESBuild**: JavaScript bundler for production builds
- **TypeScript**: Static type checking and enhanced developer experience
- **Replit Integration**: Custom plugins for Replit development environment

### Form and Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Date and Utility Libraries
- **Date-fns**: Modern JavaScript date utility library
- **Class Variance Authority**: Utility for creating type-safe CSS class variants
- **clsx & tailwind-merge**: Conditional className utilities optimized for Tailwind