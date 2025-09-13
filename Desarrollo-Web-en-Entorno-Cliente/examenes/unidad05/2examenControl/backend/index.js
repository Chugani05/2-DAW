import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { db } from "./config/db.js";
import servicesRoutes from "./routes/servicesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Variables de entorno
dotenv.config();

// Configurar la app
const app = express();

// Leer datos via body
app.use(express.json());

// Conectar a BD
db();

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

if (process.argv[2] === "--postman") {
  whitelist.push(undefined);
}

const corsOptions = {
  origin: function (origin, callback) {
    console.log("Origen de la solicitud:", origin); // Debug
    if (!origin || whitelist.includes(origin)) {
      callback(null, true); // Permitir
    } else {
      callback(new Error("Error de CORS")); // Bloquear
    }
  },
};

app.use(cors(corsOptions));

// Definir una ruta
app.use("/api/services", servicesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/users", userRoutes);

// Definir puerto
const PORT = process.env.PORT || 4000;

// arrancar la app
app.listen(PORT, () => {
  console.log(
    colors.blue("El servidor se esta ejecutando en el puerto:"),
    colors.blue.bold(PORT)
  );
});
