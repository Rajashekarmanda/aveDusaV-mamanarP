import express from "express";
import { fileURLToPath } from "url";
import characters from "./routes/characters.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import path from "path";
const app = express();
const PORT = process.env.PORT || 8000;

// Get the directory name (eg: http://localhost:8080 ---> it will render index.html)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/characters", characters);

// middleware: Catch-all route for 404 errors. (Ex: /characters/unknown)
app.use(notFound);
// middleware: Error handling middleware
app.use(errorHandler);

// Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
