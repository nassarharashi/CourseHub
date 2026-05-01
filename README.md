# CourseHub

<p align="center">
  <img src="src/assets/logo.png" alt="CourseHub logo" width="96" height="96" />
</p>

CourseHub is a clean, responsive learning platform UI built with React and Vite. It focuses on course discovery, a practical dashboard experience, and polished content sections that feel consistent across the whole site.

## Overview

CourseHub is designed as a lightweight education website with a clear visual identity and simple navigation. It includes a branded home page, course browsing, a detail view for each course, a management dashboard, and a contact form with validation.

## Key Features

- Branded landing page with logo-driven navigation and a hero section
- Course listing with search, category filter, and skeleton loading states
- Course details page for deeper course information
- Dashboard with create, edit, and delete flows backed by `localStorage`
- Contact form with validation and success feedback
- Clean responsive layout with reusable UI components
- Light-only styling for a consistent visual experience

## Pages

- Home
- About
- Courses
- Course Details
- Dashboard
- Contact

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS

## Visual Assets

- Logo: `src/assets/logo.png`
- Hero image: `src/assets/hero.png`

## Project Structure

```text
src/
  assets/
  components/
  data/
  layout/
  pages/
  router/
  utils/
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint the Codebase

```bash
npm run lint
```

## Data Storage

Course data is loaded from the built-in JSON dataset and synced with `localStorage` so dashboard changes persist between sessions.

## Notes

- The app is intentionally light-mode only.
- Login and register pages were removed from the current version.
- Course management actions are handled entirely on the client side.

## Screenshots

Add screenshots here if you want to document the UI in more detail.
