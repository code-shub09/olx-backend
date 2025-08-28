

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
app.use(
    cors()
  );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); // serve uploaded images

// Routes
app.use("/api/v1/user/property", propertyRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const dbConnection = require("./config/database");
// const propertyRouter = require("./router/properX");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// dbConnection();

// // CORS setup
// // Allowed frontend URLs
// const allowedOrigins = [
//     "http://localhost:5173", // local dev
//     "https://olx-frontend-rtjh-34rj0udwa-shubham-singhs-projects-5c69dcf7.vercel.app", // Vercel frontend
// ];

// // CORS options
// const corsOptions = {
//     origin: (origin, callback) => {
//         console.log("Request Origin:", origin);
//         // Allow requests with no origin (like Postman, curl, or mobile apps)
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error("Not allowed by CORS"));
//         }
//     },
   
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
// };

// // Use CORS middleware
// app.use(cors(corsOptions));

// // Preflight requests for POST with multipart/form-data
// app.options("*", cors(corsOptions));


// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static("uploads")); // local fallback for uploads (optional)

// // Routes
// app.use("/api/v1/user/property", propertyRouter);

// // Start server
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
