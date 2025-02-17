import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getUserAppointments } from "../controllers/userController.js";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

router.route("/:user/appointments").get(authMiddleware, getUserAppointments);

// Ruta para obtener todos los usuarios
router.get("/", getUsers);

export default router;
