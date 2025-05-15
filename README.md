# Doctor Clinic Web Application

A modern, interactive web application for a doctor's clinic, built with React, Three.js, Material-UI, and more. The app provides a visually engaging landing page, appointment booking, contact form, and information about services.

This project demonstrates a full-stack React application with 3D graphics, responsive design, and user-friendly features for a medical clinic.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Core Dependencies](#core-dependencies)
- [Component Overview](#component-overview)
- [Assets](#assets)
- [Customization](#customization)
- [License](#license)

---

## Features

- **3D Interactive Landing Page:** Uses Three.js to render a rotating Earth and animated text.
- **Responsive Navigation:** Customizable navbar with profile icon and quick links.
- **Service Cards:** Interactive cards for emergency, appointments, and opening hours.
- **Appointment Booking:** Integrated calendar and registration form for booking appointments.
- **Contact Form:** Users can send messages and view clinic contact details.
- **Modern UI:** Built with Material-UI, Bootstrap, TailwindCSS, and custom styles.

---

## Project Structure

```
profile/
├── public/
│   └── ... (static files, index.html)
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── Images/
│   │   ├── earth.jpg
│   │   ├── logo.png
│   │   ├── icon.jpeg
│   │   └── space.jpg
│   └── Components/
│       ├── Header/
│       │   └── Header.jsx
│       ├── Home/
│       │   ├── Home.jsx
│       │   └── Home.css
│       ├── Plane/
│       │   ├── Plane.jsx
│       │   └── Plane.css
│       ├── Appoint/
│       │   ├── Appoint.jsx
│       │   └── Appoint.css
│       ├── Register/
│       │   ├── Register.jsx
│       │   └── Register.css
│       ├── StaticDatePickerLandscape/
│       │   ├── StaticDatePickerLandscape.jsx
│       │   └── StaticDatePickerLandscape.css
│       └── Contact/
│           ├── Contact.jsx
│           └── Contact.css
├── package.json
├── README.md
└── ... (other config files)
```

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd profile
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

- `npm start` – Runs the app in development mode.
- `npm run build` – Builds the app for production.
- `npm test` – Launches the test runner.
- `npm run eject` – Ejects the app from Create React App (irreversible).

---

## Core Dependencies

- **React** (v18+)
- **Three.js** – 3D graphics for the landing page.
- **Material-UI** – UI components and date pickers.
- **Bootstrap, TailwindCSS** – Styling frameworks.
- **React Router** – Routing and navigation.
- **Troika-three-text** – 3D text rendering.
- **Overlay-navbar** – Responsive navigation bar.
- **Redux Toolkit** – (Prepared for state management, not heavily used in current code).

See `package.json` for the full list.

---

## Component Overview

### `App.js`

- Main entry point. Sets up routing and renders the `Header` and `Home` components.

### `Header`

- Responsive navigation bar with logo and links to Home, About, Book an Appointment, and Contact.

### `Home`

- Main landing page.
- Renders a 3D Earth and animated text using Three.js and Troika.
- Displays interactive service cards (`Plane`), a list of services, appointment booking (`Appoint`), and contact section.

### `Plane`

- Interactive cards for Emergency Service, Appointment, and Opening Hours.

### `Appoint`

- Section for booking appointments.
- Integrates a landscape date picker (`StaticDatePickerLandscape`) and a registration form (`Register`).

### `Register`

- User registration form for booking appointments, including fields for name, email, phone, and additional info.

### `StaticDatePickerLandscape`

- Material-UI static date picker in landscape mode for selecting appointment dates.

### `Contact`

- Contact information (address, phone, email) and a message form.

---

## Assets

- **Images:** Located in `src/Images/` (e.g., `earth.jpg`, `logo.png`).
- **Icons:** Uses `react-icons` and FontAwesome for UI icons.

---

## Customization

- **Styling:** Modify CSS files in each component's directory for custom styles.
- **Navigation:** Update links and logo in `Header/Header.jsx`.
- **Services:** Edit the services list in `Home/Home.jsx`.
- **Contact Info:** Update address, phone, and email in `Contact/Contact.jsx`.

---

## License

This project is for educational and demonstration purposes. Please update with your own license as needed.
