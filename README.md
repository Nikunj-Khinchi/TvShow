# React TV Shows App

## Overview

This is a simple React application that allows users to explore TV shows and book tickets for their favorite shows. The app has the following main functionalities:

- **Home Page**: Displays a list of TV shows with brief information.
- **Show Details Page**: Provides detailed information about a specific TV show, including language, rating, genres, and schedule.
- **Booking Page**: Allows users to view and remove their booked shows.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: For handling navigation and routing within the app.
- Redux Toolkit: For state management.
- Redux Persist: For persisting Redux state across page reloads.
- React Hooks:
    - useState: Used for managing state in functional components.
    - useEffect: Used for handling side effects (e.g., fetching data from an API) in functional components.
- Tailwind CSS: A utility-first CSS framework for styling.

## Project Structure

```plaintext
/src
|-- components
|   |-- Home.js
|   |-- ShowSummary.js
|   |-- BookingPage.js
|   |-- Navbar.js
|-- reduxStore
|   |-- slices
|       |-- bookingSlice.js
|   |-- store.js
|-- App.js
|-- index.js
|-- ...
```

## Installation
- git clone <repository-url>
- Install dependencies: `npm install`
- Start the development server: `npm run dev` 