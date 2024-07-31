
---

# Task Management Project

This is a task management application built with Next.js for the frontend and Express.js for the backend.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Demo

You can watch the demo video [here](https://private-user-images.githubusercontent.com/103263909/353926959-d7232d8c-d97c-4206-8a82-c19f318e9024.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI0NDcwNzcsIm5iZiI6MTcyMjQ0Njc3NywicGF0aCI6Ii8xMDMyNjM5MDkvMzUzOTI2OTU5LWQ3MjMyZDhjLWQ5N2MtNDIwNi04YTgyLWMxOWYzMThlOTAyNC5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDczMVQxNzI2MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMTljZjFlNzI0NDhlYTVhYjA5YzczY2JmOGY2NDk0MDg4MTExOGVhYzk4MmMxZDVjM2YxMmU2ZTk5NWM4MGY4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.m1__68SX5eyFbnY-TByU3ephSVkLh-T9LRrSHNLu3BQ).

You can also find it on the [GitHub issue page](https://github.com/Saurav-Pant/Task-Mgmt/issues) where the video is posted.



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


If you are familiar with Docker, you can run this using Docker as well. Set the environment variable, build the image, and then run the image.






