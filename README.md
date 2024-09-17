# Application

This is a web application dashboard that visualizes various types of data using charts. It integrates a frontend built with Next.js and TypeScript with a backend API built using Django.

## Setup and Running the Application

### Prerequisites

- **Node.js** (v14 or later) - For running the Next.js frontend
- **Python** (v3.8 or later) - For running the Django backend
- **Django** - Django installed
- **Django REST Framework** - For API creation

# Backend Instructions on how to set up

source virtualenv/Scripts/activate-activate virtual environment

python manage.py runserver - run the application 

# Frontend Instructions on how to set up
npm run dev- Run the frontend bit of the application


# Libraries and Tools Used
# Frontend
Next.js - React framework for server-side rendering and static site generation.
TypeScript - For static type checking in JavaScript.
react-chartjs-2 - React wrapper for Chart.js, used for rendering charts.
axios - Promise-based HTTP client for making API requests.


# Backend
Django - Python framework for building the web API.
Django REST Framework - Toolkit for building Web APIs.
Chart.js - JavaScript library for creating charts (used via react-chartjs-2).

# Development Tools
ESLint - Linter for identifying and reporting on patterns in JavaScript.
Prettier - Code formatter to maintain consistent code style.
Approach and Thought Process
Frontend: Built using Next.js for its powerful SSR (Server-Side Rendering) and SSG (Static Site Generation) capabilities, which ensures that the application is fast and SEO-friendly. TypeScript is used to catch errors early in the development process and enhance code quality. react-chartjs-2 is used to create and manage various types of charts.

# Backend: Utilized Django due to its robust features for rapid development and its integrated ORM (Object-Relational Mapping) for database operations. Django REST Framework was chosen to build the API endpoints for serving data to the frontend charts.

# Data Handling: The data is fetched from the Django API using axios and is then mapped to the required format for each chart type (Line, Bar, Pie). The frontend state management and chart rendering are handled in the Dashboard component.

# Error Handling: Included error handling and loading states to enhance user experience and reliability of the application.