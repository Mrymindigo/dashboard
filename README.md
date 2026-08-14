# Admin Dashboard

A responsive admin dashboard built with React, React Router, Tailwind CSS, and Recharts.

## Overview

This project is a frontend admin dashboard developed as a React learning project. It focuses on building a scalable component structure, client-side routing, reusable UI components, and data visualization.

The dashboard includes a main overview page with summary information, charts, and recent product data, along with additional sections for managing products, users, tickets, and comments.

## Features

* Responsive admin dashboard layout
* Dashboard overview with summary cards
* Data visualization with Recharts
* Recent products table
* Client-side routing with React Router
* Reusable React components
* Feature-based project structure
* Responsive navigation and layout
* Product, user, ticket, and comment sections
* RTL interface

## Tech Stack

* React
* Vite
* JavaScript
* React Router
* Tailwind CSS
* Sass
* Recharts
* React Icons

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── common/
│   └── layout/
├── data/
├── features/
│   ├── detailsChart/
│   ├── lastProductTable/
│   ├── sidebar/
│   ├── summeries/
│   └── topbar/
├── pages/
│   ├── Home/
│   ├── Products/
│   ├── Tickets/
│   ├── Ticket-details/
│   ├── Users/
│   └── Comments/
├── utils/
├── App.jsx
├── routes.jsx
└── main.jsx
```

## Current Status

The main dashboard overview and core layout are implemented.

Some management sections, including product and ticket pages, are currently under development and will be expanded in future updates.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Mrymindigo/dashboard.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Future Improvements

* Complete product management functionality
* Complete ticket management functionality
* Add detailed product views
* Add interactive CRUD operations
* Improve data handling and persistence
* Add authentication and protected routes
* Add additional dashboard analytics

## Purpose

This project was created to practice React development and explore concepts such as component architecture, client-side routing, reusable UI patterns, responsive design, and data visualization.
