
---

# Task Management Project

This is a task management application built with Next.js for the frontend and Express.js for the backend.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Saurav-Pant/Task-Mgmt.git
   cd Task-Mgmt
   ```

2. **Frontend (Client) Setup:**

   - Navigate to the client directory:

     ```bash
     cd client
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

    - **Configure Environment Variables:**

     - Rename `.env.example` file to `.env`:

       ```bash
       cp .env.example .env
       ```


   - Start the frontend server:

     ```bash
     npm run dev
     ```

   The frontend will run on `http://localhost:3000`.

3. **Backend (Server) Setup:**

   - Navigate to the server directory:

     ```bash
     cd ../server
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - **Configure Environment Variables:**

     - Rename `.env.example` file to `.env`:

       ```bash
       cp .env.example .env
       ```

     - Add your MongoDB URI to the `.env` file:

       ```
       DATABASE_URL=<your-mongo-uri>
       ```

   - Build the TypeScript code:

     ```bash
     tsc -b
     ```

   - Start the backend server:

     ```bash
     npm start
     ```

   The backend will run on `http://localhost:3002`.

