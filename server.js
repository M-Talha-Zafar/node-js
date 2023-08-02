require("dotenv").config();
const express = require("express");
const usersRoutes = require("./routes/users");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Doodle API",
      version: "1.0.0",
      description: "API documentation for my Doodle app",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.set("views", "./views");

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("/view", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.use("/users", usersRoutes);

module.exports = app;
