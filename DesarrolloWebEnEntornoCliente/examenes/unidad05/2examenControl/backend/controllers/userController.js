import Appointment from "../models/Appointment.js";
import User from "../models/User.js";

const getUserAppointments = async (req, res) => {
  const { user } = req.params;

  if (user !== req.user._id.toString()) {
    const error = new Error("Acceso Denegado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const query = req.user.admin
      ? { date: { $gte: new Date() } }
      : { user, date: { $gte: new Date() } };
    const appointments = await Appointment.find(query)
      .populate("services")
      .populate({ path: "user", select: "name email" })
      .sort({ date: "asc" });

    res.json(appointments);
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Consulta todos los usuarios
    res.json(users); // Devuelve los usuarios en formato JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getUserAppointments, getUsers };
