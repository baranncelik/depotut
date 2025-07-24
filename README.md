# Express.js Project Structure & Usage Guide

This project is a basic Express.js application that uses EJS as a templating engine and serves static files from the `public` folder. Nodemon is used for easier development by auto-restarting the server on file changes.

---

## 🗂 Project File Structure

project-root/
├── app.js # Main Express app setup and server start
├── package.json # Node.js dependencies and scripts
├── routers/
│ └── user.js # User-related routes separated in a router module
├── views/
│ ├── index.ejs # Homepage template
│ ├── depo9.ejs # Depot 9 page template
│ └── depo16.ejs # Depot 16 page template
├── public/
│ └── img/ # Static images served to the client
└── README.md # This file

