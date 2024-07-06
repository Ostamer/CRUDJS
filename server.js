const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/routes.js");
const db = require("./src/models");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Synchronize the database
db.sequelize.sync({ force: true }) // Удаление и повторная синхронизация базы данных для тестовых целей
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.error("Failed to sync db:", err);
  });

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.use("/", routes);

// Set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});