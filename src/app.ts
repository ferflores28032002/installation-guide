import cors from "cors";
import express from "express";
import morgan from "morgan";

// Import routes
import contentRoute from "./routes/content.route";

// Create Express server
const app = express();

// Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// es una medida de seguridad utilizada en aplicaciones web para permitir o restringir las solicitudes HTTP
app.use(cors());

// Morgan es un middleware de registro de solicitudes HTTP en Node.js. Se utiliza para registrar información sobre las solicitudes entrantes en el servidor,
app.use(morgan("dev"));

// Define routes
app.use("/api/v1", contentRoute);

// Export express instance
export default app;
