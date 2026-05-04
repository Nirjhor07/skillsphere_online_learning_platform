# SkillSphere - Online Learning Platform

## Project Overview

**SkillSphere** is a modern, interactive online learning platform built with Next.js 16, React 19, and MongoDB. It provides a comprehensive learning experience where users can discover courses, learn from expert instructors, and track their educational progress.

## Purpose

SkillSphere aims to democratize education by providing a user-friendly platform where:

- Students can explore and enroll in diverse courses
- Instructors can share their expertise with a global audience
- Learning is accessible, engaging, and personalized
- Educational content is organized and easy to navigate

## Live URL

### Frontend

The application is deployed on **Vercel**:

- **Live Link:** https://skillsphere-online-learning-platfor-psi.vercel.app

### Backend & API

The fake JSON API is deployed on **Render**:

- **API URL:** https://fake-live-server-json.onrender.com

## Key Features

### User Management

- **User Authentication** - Secure login/registration with email-based authentication
- **Profile Management** - Users can create and manage their profiles
- **User Roles** - Support for different user types (Students, Instructors)

### Course Discovery

- **Popular Courses** - Browse trending and highly-rated courses
- **New Releases** - Stay updated with newly published courses
- **Course Categories** - Organized course catalog by subject
- **Course Details** - Comprehensive course information including instructor details, curriculum, and reviews
- **Search & Filter** - Find courses by keywords and categories

### Learning Resources

- **Expert Instructors** - Learn from experienced professionals in their fields
- **Learning Tips Section** - Guidance on effective study techniques
- **Study Techniques** - Evidence-based learning strategies
- **Time Management** - Tips for balancing learning with other commitments
- **Course Progress Tracking** - Monitor learning journey

### UI/UX

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging visual transitions using Framer Motion
- **Dark/Light Mode Support** - User-friendly interface themes via DaisyUI
- **Notifications** - Toast notifications for user feedback

## NPM Packages Used

### Core Dependencies

- **next** (16.2.4) - React framework for production
- **react** (19.2.4) - JavaScript library for building user interfaces
- **react-dom** (19.2.4) - React package for working with the DOM

### Authentication & Backend

- **better-auth** (1.6.9) - Modern, lightweight authentication library
- **@better-auth/mongo-adapter** (1.6.9) - MongoDB adapter for better-auth
- **mongodb** (7.2.0) - Official MongoDB driver for Node.js

### UI & Styling

- **tailwindcss** (4) - Utility-first CSS framework
- **@tailwindcss/postcss** (4) - PostCSS plugin for Tailwind CSS
- **daisyui** (5.5.19) - Component library built on Tailwind CSS
- **react-icons** (5.6.0) - Popular icon library for React

### Forms & Animation

- **react-hook-form** (7.75.0) - Performant, flexible form validation library
- **framer-motion** (12.38.0) - Animation library for React components

### Notifications

- **react-toastify** (11.1.0) - Toast notification library for React

### Development Dependencies

- **eslint** (9) - JavaScript linter for code quality
- **eslint-config-next** (16.2.4) - ESLint configuration for Next.js
- **babel-plugin-react-compiler** (1.0.0) - React compiler for optimized builds

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- MongoDB instance

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nirjhor07/skillsphere_online_learning_platform.git
   cd skillsphere_online_learning_platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with your configuration:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to see the application

## 🔌 API Documentation

The application uses a fake JSON API deployed on Render for development and testing:

**API Base URL:** `https://fake-live-server-json.onrender.com`

### Available Endpoints

- Course data endpoints
- Instructor information
- User profiles
- Course reviews and ratings

_Note: This is a mock API for development purposes. For production, configure your backend API endpoint in environment variables._

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Authentication

The platform uses **Better Auth** for secure authentication with MongoDB integration. Features include:

- Email/password authentication
- Secure session management
- Protected routes and API endpoints

## Styling

The project uses:

- **Tailwind CSS** for utility-first styling
- **DaisyUI** for pre-built, accessible components
- **Framer Motion** for smooth animations

## Responsive Design

The platform is fully responsive and optimized for:

- Desktop (1920px and above)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private. All rights reserved.

## Author

**Nirjhor07** - [GitHub Profile](https://github.com/Nirjhor07)

## 📞 Support

For questions, issues, or suggestions, please open an issue on the GitHub repository.

---

**Last Updated:** May 2026
