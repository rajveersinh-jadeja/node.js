# Passport Authentication

A simple authentication system built using Node.js, Express, Passport.js, Express Session, and EJS.

## video explaination
[Video  explaination](https://drive.google.com/file/d/14hW6MDCMJmgtwLpQAAND_Ec_AChLNdci/view?usp=drive_link)

## Features

* Login
* Logout
* Session authentication
* Protected routes
* EJS views

## Technologies

* Node.js
* Express.js
* Passport.js
* Express Session
* EJS

## Installation

```bash
npm install
```

## Run

```bash
node app.js
```

Open:

```text
http://localhost:3000
```

## Login

```text
Username: admin
Password: password
```

## Routes

| Method | Route     | Description         |
| ------ | --------- | ------------------- |
| GET    | `/login`  | Login page          |
| POST   | `/login`  | Login               |
| GET    | `/`       | Protected home page |
| POST   | `/logout` | Logout              |

## Note

This project uses hardcoded credentials for learning purposes. A production application should use a database and hashed passwords.
