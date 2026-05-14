# AnythingAI Task Management Application

## Overview

This is a full-stack Task Management Application built using:

* Frontend: React.js
* Backend: Node.js, Express.js
* Database: MongoDB
* Authentication: JWT (JSON Web Token)

Users can:

* Register a new account
* Login securely
* Create tasks
* View their tasks
* Edit tasks
* Delete tasks

Each user can only access their own tasks.

---

## Tech Stack

### Frontend

* React.js
* HTML
* CSS
* JavaScript
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt for password hashing

---

## Project Structure

```
anythingai-task/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## Installation Instructions

### 1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/anythingai-frontend-task.git
cd anythingai-frontend-task
```

---

### 2. Setup Backend

```
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### 3. Setup Frontend

Open new terminal:

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## API Endpoints

### Authentication

Register

```
POST /api/auth/register
```

Login

```
POST /api/auth/login
```

---

### Tasks

Create Task

```
POST /api/tasks
```

Get Tasks

```
GET /api/tasks
```

Update Task

```
PUT /api/tasks/:id
```

Delete Task

```
DELETE /api/tasks/:id
```

---

## Authentication Flow

* User registers
* Password is hashed using bcrypt
* User logs in
* JWT token is generated
* Token is stored in frontend
* Token is sent in Authorization header
* Backend verifies token before allowing access

---

## Features Implemented

* User Registration
* User Login
* JWT Authentication
* Create Task
* View Tasks
* Edit Task
* Delete Task
* Protected Routes
* MongoDB Database Integration

---

## Author

Shakthi S

---


