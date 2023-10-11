# Vistaar Test

## Project Overview

**Vistaar Test** is a full-stack web application developed using the MERN (MongoDB, Express, React, Node.js) stack. It serves as a dashboard app designed to allow users to log in using OAuth. The project incorporates various technologies and features that make it a powerful and user-friendly platform for managing customer data.

## Technologies Used

-   **React:** A JavaScript library for building user interfaces.
-   **Redux:** A state management library for React applications.
-   **MongoDB:** A NoSQL database for storing and managing data.
-   **Node.js:** A JavaScript runtime environment for server-side development.
-   **Express:** A minimal web application framework for Node.js.

## Features

### 1. OAuth Login Page

The application provides a user-friendly login page where users can authenticate via OAuth.

### 2. Customer Dashboard

The dashboard displays a paginated and searchable list of active customers, showcasing the following details:

-   Name
-   Address
-   Accounts

### 3. Reusable and Generic Dashboard

The dashboard is designed from scratch, offering a generic and versatile design that can be easily reused in various projects.

### 4. Redux State Management

Redux is implemented to manage and authenticate the user's login state, ensuring a smooth user experience.

### 5. Protected Routes

The application creates protected routes on both the frontend and backend to enhance security and access control.

### 6. Clean Code Architecture

The codebase adheres to clean code architecture practices, making it easy to maintain and scale the application.

## Installation and Usage

1. Clone this repository.

2. Install the required dependencies for both the client and server:

    ```
    cd client && npm install
    cd server && npm install
    ```

3. Start the development server for both the client and server:

    ```
    cd client && npm run dev
    cd server && npm run dev
    ```

4. Access the application at `http://localhost:3000`.
