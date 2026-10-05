# Admin Panel — Student CRUD

A simple student management admin panel built with Express, EJS, MongoDB, and Mongoose. It uses Passport.js for admin authentication.

## Project Overview

The Student CRUD Admin Panel is a web application for managing student records through a simple, authenticated admin interface. It allows an administrator to create, view, update, and delete student information without interacting directly with the database.

The application follows a basic MVC-style structure, separating routes, controllers, database models, and EJS views to keep the code organized and maintainable. Passport.js handles admin authentication, while Express sessions maintain login state.

This project demonstrates practical skills in backend development, server-side rendering, database integration, authentication, middleware, and CRUD operations using the Node.js ecosystem.

**Purpose:** To learn how a complete Express and MongoDB web application works, from handling HTTP requests to storing data and rendering dynamic pages.

## Features

- Admin login with Passport.js and sessions
- Add, view, edit, and delete student records
- Student list displayed in a table
- Individual student details
- Delete confirmation prompt
- Flash messages after creating, updating, and deleting records
- Empty states and a custom 404 page

## Technologies

- Node.js
- Express 5
- EJS
- MongoDB and Mongoose
- Passport.js and passport-local
- express-session
- connect-flash
- dotenv
- CSS

## Installation

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/adminDB
SESSION_SECRET=replace-with-a-long-random-string
ADMIN_USERNAME=admin
ADMIN_PASSWORD=replace-with-a-strong-password
```

Ensure MongoDB is running locally on port `27017`. The application uses the `adminDB` database and creates collections when needed.

## Run the Application

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Login

Use the admin username and password configured in your `.env` file.

## Project Structure

```text
admin-panel/
├── config/
│   └── passport.js
├── controllers/
│   ├── authController.js
│   └── studentController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── Student.js
├── routes/
│   ├── authRoutes.js
│   └── studentRoutes.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── login.ejs
│   ├── students.ejs
│   ├── details.ejs
│   ├── add.ejs
│   ├── edit.ejs
│   └── 404.ejs
├── public/
│   └── css/
│       └── style.css
├── .env
├── .env.example
├── .gitignore
├── app.js
└── package.json
```

## Routes

| Method | Route | Description |
|---|---|---|
| GET | `/login` | Display login page |
| POST | `/login` | Authenticate admin |
| POST | `/logout` | Log out admin |
| GET | `/students` | List students |
| GET | `/students/add` | Display add form |
| POST | `/students/add` | Create student |
| GET | `/students/:id` | View student details |
| GET | `/students/edit/:id` | Display edit form |
| POST | `/students/edit/:id` | Update student |
| POST | `/students/delete/:id` | Delete student |

## Environment Variables

All credentials and database settings are stored in `.env`. This file should be excluded from version control using `.gitignore`.

Use `.env.example` as a template when setting up the project on another machine. Never commit real credentials or secrets.

## License

Created for learning purposes. Free to use and modify.
