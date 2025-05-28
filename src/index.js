import express from "express";
import { PORT } from "./config.js";
import usersRoutes from "./routes/users.routes.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev")); // Middleware for logging requests
app.use(express.json()); // Middleware to parse JSON bodies
app.use(usersRoutes);

app.listen(PORT);
console.log("Server on port", PORT);
