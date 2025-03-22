# Angular Resume Builder

A feature-rich resume builder application built with Angular, featuring an Amazon-inspired template design. This project demonstrates advanced Angular concepts, including reactive forms, lazy loading, local storage management, and more. It’s designed to help users create, save, and display resumes in a creative and professional way, with scalability for future template additions.

## Features

- **Resume Creation**: Build resumes using a dynamic, validated reactive form.
- **Amazon-Style Template**: Display resumes in a design mimicking Amazon product pages, complete with star ratings for skills and experience.
- **Storage Management**: Save and manage multiple resumes using LocalStorage with CRUD operations.
- **Modular Architecture**: Lazy-loaded modules for scalability and performance optimization.
- **Animations**: Smooth fade-in effects for a polished user experience.
- **Responsive Design**: Adapts to various screen sizes, inspired by Amazon’s layout.
- **Type Safety**: Strongly typed TypeScript with explicit array function typing (e.g., `.forEach((x: Type) => {})`).

## Tech Stack

- **Angular**: Frontend framework (v17+ assumed based on current date: March 21, 2025).
- **TypeScript**: For type-safe coding.
- **SCSS**: For styling with Amazon-like aesthetics.
- **RxJS**: Reactive programming with Observables for state management.
- **LocalStorage**: Persistent storage of resume data.
- **Angular Animations**: For UI transitions.

## Prerequisites

- **Node.js**: v18.x or later (download from [nodejs.org](https://nodejs.org/)).
- **Angular CLI**: Install globally with `npm install -g @angular/cli`.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/angular-resume-builder.git
cd angular-resume-builder
npm install
```

## Run the application:
```
ng serve
```
Open your browser at http://localhost:4200.

## Usage
1. Create a Resume:
  Navigate to the /form route.
  Fill out the form with your details (name, title, skills, experience, etc.).
  Click "Generate Resume" to save and view your resume.

2. View Saved Resumes:
  Go to the /list route to see all saved resumes.
  Click "View" to display a resume or "Delete" to remove it.

3. Display Resume:
  The /resume route shows the selected resume in the Amazon-style template.

## Deployment
Deploy to GitHub Pages for a live demo:
```
ng build --base-href "https://<your-username>.github.io/angular-resume-builder/"
npm install -g angular-cli-ghpages
ng deploy
```

## Tech
Angular: Reactive Forms, Routing, Lazy Loading, Animations.
TypeScript: Strong typing and interface usage.
RxJS: Observables for reactive state management.
Frontend Design: SCSS styling with a focus on responsive, Amazon-like UI.
Best Practices: Lifecycle hooks (ngOnDestroy for cleanup), modular architecture, and clean code.

## Future Enhancements
Add more templates (e.g., Minimal, Modern) via the TemplateService.
Integrate a backend (e.g., Firebase) for cloud storage.
Implement drag-and-drop reordering of skills/experience.
Add export functionality (e.g., PDF generation).
