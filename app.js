

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnection = require("./config/database");
const propertyRouter = require("./router/properX");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
dbConnection();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); // serve uploaded images

// Routes
app.use("/api/v1/user/property", propertyRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
