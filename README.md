# NLOGN Portfolio

A modern **MERN Stack Portfolio Website** built with **React (Vite)**, **Node.js**, **Express**, and **MongoDB** using a **Yarn Workspace Monorepo**.

## Tech Stack

### Frontend

* React 19
* Vite
* React Router
* Axios
* Framer Motion
* React Helmet Async
* React Icons
* Three.js

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Helmet
* CORS
* Morgan
* Compression
* Express Validator

---

# Project Structure

```text
nlogn-portfolio/
│
├── client/          # React Frontend
├── server/          # Express Backend
├── package.json     # Root workspace configuration
└── README.md
```

This project uses **Yarn Workspaces**, so you only need to install dependencies once from the project root.

---

# Requirements

Before starting, make sure you have installed:

* Node.js **18 or newer**
* Yarn Classic **1.22.x**
* MongoDB (local or MongoDB Atlas)

Check your versions:

```bash
node -v
yarn -v
```

---

# Installation

## 1. Clone the repository

```bash
git clone <repository-url>
cd nlogn-portfolio
```

## 2. Install dependencies

From the project root:

```bash
yarn install
```

This installs dependencies for both the **client** and **server**.

---

# Environment Variables

Create a `.env` file inside the **server** folder.

Example:

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/nlogn_portfolio

CLIENT_URL=http://localhost:5173
```

Update these values according to your environment.

---

# Running the Project

## Start both frontend and backend

```bash
yarn dev
```

This starts:

* React Client
* Express Server

---

## Run only the frontend

```bash
yarn dev:client
```

Default URL:

```
http://localhost:5173
```

---

## Run only the backend

```bash
yarn dev:server
```

Default URL:

```
http://localhost:5000
```

---

# Production Build

Build the React application:

```bash
yarn build
```

---

Start the production server:

```bash
yarn start
```

---

# Database Seed

To populate the database with sample data:

```bash
yarn workspace nlogn-server seed
```

---

# Useful Commands

| Command                            | Description                         |
| ---------------------------------- | ----------------------------------- |
| `yarn install`                     | Install all dependencies            |
| `yarn dev`                         | Run frontend and backend together   |
| `yarn dev:client`                  | Run React application               |
| `yarn dev:server`                  | Run Express server                  |
| `yarn build`                       | Build the frontend                  |
| `yarn start`                       | Start backend in production mode    |
| `yarn lint`                        | Run ESLint on the frontend          |
| `yarn format`                      | Format project files using Prettier |
| `yarn workspace nlogn-server seed` | Seed the MongoDB database           |

---

# Development Workflow

1. Start MongoDB.
2. Create the `server/.env` file.
3. Run:

```bash
yarn dev
```

4. Open the frontend:

```
http://localhost:5173
```

5. Backend API:

```
http://localhost:5000
```

---

# Yarn Workspaces

This project uses **Yarn Workspaces**, allowing both the frontend and backend to share a single `node_modules` directory.

You generally do **not** need to install dependencies inside the `client` or `server` folders separately. Run all installation commands from the project root.

---

# Contributing

1. Create a new branch.
2. Make your changes.
3. Test the application.
4. Run:

```bash
yarn lint
```

5. Commit your changes and open a Pull Request.

---

# License

This project is intended for personal and portfolio use. Feel free to modify and extend it for your own projects.
