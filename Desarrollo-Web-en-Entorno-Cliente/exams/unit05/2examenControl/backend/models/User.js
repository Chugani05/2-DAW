import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { uniqueId } from "../utils/index.js";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true, // Para que Mongo guarde en minusculas
  },
  token: {
    type: String,
    default: () => uniqueId(), // Generado token a partir de fecha
  },
  verified: {
    // Comprobar si verificó su cuenta
    type: Boolean,
    default: false,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

// pre indica a mongo hacer algo antes de.. En este caso de "save", guardar los datos.
// Es decir, anyes de que guarde los datos encripta el password
userSchema.pre("save", async function (next) {
  // Compruebo que si está encriptado. Para evitar encriptar un password ya encriptado.
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); // Si necesita el await.
});

userSchema.methods.checkPassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
