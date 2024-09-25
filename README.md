# Task Manager API

![Node.js](https://img.shields.io/badge/Node.js-v16.x-green)
![Express.js](https://img.shields.io/badge/Express.js-v4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-v5.x-brightgreen)

## Introduction

Task Manager API is a backend application built using Node.js, Express.js, and MongoDB. It provides a RESTful API for managing tasks with full CRUD (Create, Read, Update, Delete) functionality. This project is designed to handle common task management needs, such as creating, updating, and deleting tasks, as well as retrieving task information for both individual tasks and task lists.

This application is developed with a focus on scalability, clean code architecture, and optimal performance, adhering to RESTful API best practices.

## Features

- **Task Management:**
  - Create new tasks
  - Retrieve task details (single task or all tasks)
  - Update task details
  - Delete tasks

- **User-Friendly API**
  - Well-structured API routes

- **Data Validation:**
  - Input validation ensure clean data is processed

- **Error Handling:**
  - Centralized error handling for consistent and informative error responses

- **Database:**
  - NoSQL database integration using **MongoDB** with **Mongoose ORM**

- **Environment Configuration:**
  - Configurable via `.env` for easy setup and deployment

## Tech Stack

- **Node.js**: A powerful JavaScript runtime for server-side applications
- **Express.js**: A fast and minimalist web framework for Node.js
- **MongoDB**: A NoSQL database for flexible and scalable storage
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v14.x or higher
- **MongoDB**: v5.x or higher

### Steps to Set Up Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/task-manager-api.git
   cd task-manager-api
2. **Install dependencies**: 
    ```bash
    npm install
3. **Create .env file in the root directory**:
    ```bash
    touch .env
4. **Add environment variables in .env.example to .env file**
4. **Start MongoDB if not already running**
5. **Start application**:
    ```bash
    npm start


## API Endpoints

Here’s a summary of the available routes:

| Method | Endpoint                | Description                |
|--------|-------------------------|----------------------------|
| GET    | `/api/v1/tasks`         | Get all tasks              |
| GET    | `/api/v1/tasks/:id`     | Get task by ID             |
| POST   | `/api/v1/tasks`         | Create a new task          |
| PATCH  | `/api/v1/tasks/:id`     | Update task by ID          |
| DELETE | `/api/v1/tasks/:id`     | Delete task by ID          |

## Sample Request Body for Creating/Updating a Task
{
  "name": "Learn Node",
  "completed": true
}