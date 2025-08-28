

// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const dbConnection = require("./config/database");
// const propertyRouter = require("./router/properX");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// dbConnection();

// // Middleware
// app.use(
//     cors({
//       origin: [
//         "http://localhost:5173", // Vite local dev
//         "https://olx-frontend-rtjh-d7mnndftm-shubham-singhs-projects-5c69dcf7.vercel.app", // your Vercel frontend
//       ],
//       methods: ["GET", "POST", "PUT", "DELETE"],
//       credentials: true,
//     })
//   );
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static("uploads")); // serve uploaded images

// // Routes
// app.use("/api/v1/user/property", propertyRouter);

// // Start server
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnection = require("./config/database");
const propertyRouter = require("./router/properX");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
dbConnection();

// CORS setup
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://olx-frontend-rtjh-34rj0udwa-shubham-singhs-projects-5c69dcf7.vercel.app", // deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Preflight requests for POST with multipart/form-data
app.options("*", cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); // local fallback for uploads (optional)

// Routes
app.use("/api/v1/user/property", propertyRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
