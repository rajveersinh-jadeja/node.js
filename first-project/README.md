# 🚀 Node.js Basic HTTP Server

A super simple HTTP server built with Node.js using the built-in `http` module. This project is perfect for beginners who want to understand how web servers work before learning frameworks like Express.js.

---

## 📸 Preview

```text
Browser: http://localhost:3000

Output:
This server is created from node.js
```

---

## 📂 Project Structure

```text
first-project/
│
├── app.js
└── README.md
```

---

## 🧠 How It Works

1. Imports the built-in `http` module.
2. Creates a server using `http.createServer()`.
3. Sends a response to the browser with `res.end()`.
4. Starts the server on port `3000`.

---

## 📄 Code

```javascript
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('This server is created from node.js');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

## ⚙️ Getting Started

### Clone the repository

```bash
git clone https://github.com/rajveersinh9773-hub/node.js/tree/main/first-project

cd node-http-server
```

### Run the server

```bash
node app.js
```

---

## 🌐 Open in Browser

Visit:

```text
http://localhost:3000
```

Response:

```text
This server is created from node.js
```

---

## 🛠️ Built With

* Node.js
* HTTP Module

---
---

## 🎥 Project Explanation Video

Watch the complete explanation of this Node.js HTTP Server project:

[▶️ Watch Video Explanation](https://drive.google.com/file/d/1_ywaQF5FK0DYUsgwP_7eSR595szAbntE/view?usp=sharing)


---

## 🎯 What You'll Learn

* Creating an HTTP server
* Listening on a port
* Sending responses to clients
* Running a Node.js application locally

---

## ⭐ If you found this project useful, consider giving it a star on GitHub!
