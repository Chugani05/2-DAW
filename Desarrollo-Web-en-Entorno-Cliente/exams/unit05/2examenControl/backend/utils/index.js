import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { format } from "date-fns";
import es from "date-fns/locale/es/index.js";

function validateObjectId(id, res) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error("El ID no es válido");
    return res.status(400).json({
      msg: error.message,
    });
  }
}

function handleNotFoundError(message, res) {
  const error = new Error(message);
  return res.status(404).json({
    msg: error.message,
  });
}

// Para generar token
const uniqueId = () =>
  Date.now().toString(32) + Math.random().toString(32).substring(2);

const generateJWT = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

function formatDate(date) {
  return format(date, "PPPP", { locale: es });
}

export {
  validateObjectId,
  handleNotFoundError,
  uniqueId,
  generateJWT,
  formatDate,
};
