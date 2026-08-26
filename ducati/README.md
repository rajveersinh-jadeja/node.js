
# Node.js Projects

A collection of Node.js projects created for learning and practicing backend development with Express.js, EJS, MVC architecture

## Projects

### video overview
https://drive.google.com/file/d/1A_-FbIB4ZPxitM83ZCO4St731SmgGCkn/view?usp=drivesdk


### Ducati Motorcycle Website

A Ducati-inspired motorcycle website built using Node.js, Express.js, EJS, and MVC architecture.

#### Features

- Ducati-style homepage
- Motorcycle discovery page
- Motorcycle details
- Bike name, image, price, and specifications
- Test ride booking form
- Motorcycle customization page
- Dynamic EJS rendering
- MVC folder structure
- Express.js routing
- Controller-based architecture
- Responsive design
- Direct motorcycle image URLs

#### Technologies Used

- Node.js
- Express.js
- EJS
- JavaScript
- HTML5
- CSS3
- MVC Architecture

#### Project Structure

```text
node.js/
│
├── ducati/
│   │
│   ├── app.js
│   │
│   ├── controllers/
│   │   └── ducaticontroller.js
│   │
│   ├── models/
│   │   └── bikes.js
│   │
│   ├── routes/
│   │   └── ducatiroutes.js
│   │
│   ├── views/
│   │   ├── index.ejs
│   │   ├── discover.ejs
│   │   ├── test-drive.ejs
│   │   └── customize.ejs
│   │
│   ├── public/
│   │   └── css/
│   │       └── style.css
│   │
│   ├── package.json
│   └── README.md
│
└── .gitignore
````

## Installation

Clone the repository:

```bash
git clone https://github.com/rajveersinh-jadeja/node.js
```

Go into the project:

```bash
cd node.js/ducati
```

Install dependencies:

```bash
npm install
```

## Run the Project

Start the server:

```bash
node app.js
```

The website will run at:

```text
http://localhost:3000
```

## Routes

| Route         | Description               |
| ------------- | ------------------------- |
| `/`           | Ducati homepage           |
| `/discover`   | Browse Ducati motorcycles |
| `/test-drive` | Test ride booking         |
| `/customize`  | Motorcycle customization  |

## Bike Data

The project uses motorcycle data containing:

* Bike name
* Price
* Image
* Engine details
* Horsepower

Example:

```javascript
{
  name: "Panigale V4",
  price: "₹32,69,958",
  image: "IMAGE_URL",
  details: "1103 cc, 216 hp"
}
```

## MVC Architecture

The project follows the MVC structure:

### Model

Stores motorcycle data.

```text
models/bikes.js
```

### Controller

Handles application logic and sends data to EJS views.

```text
controllers/ducaticontroller.js
```

### Routes

Defines the website routes.

```text
routes/ducatiroutes.js
```

### Views

Contains the EJS pages.

```text
views/
```

## Author

Jenil Sojitra

## License

This project is created for educational and personal development purposes.

```
```
