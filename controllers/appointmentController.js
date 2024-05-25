const Appointment = require("../models/appointmentModel");

const getallappointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("doctorId")
      .populate("userId");
    return res.send(appointments);
  } catch (error) {
    res.status(500).send("Unable to get apponintments");
  }
};

const bookappointment = async (req, res) => {
  try {
    const appointment = await Appointment({
      date: req.body.date,
      time: req.body.time,
      doctorId: req.body.doctorId,
      clinic: req.body.clinic,
      desc: req.body.desc,
      reason: req.body.reason,
      userId: req.locals,
    });
    await appointment.save();
    return res.status(201).send("Appointment successfully");
  } catch (error) {
    res.status(500).send("Unable to book appointment");
  }
};

const accepted = async (req, res) => {
  try {
    await Appointment.findOneAndUpdate(
      { _id: req.body.appointId },
      { status: "accepted" }
    );

    return res.status(201).send("Appointment accepted successfully");
  } catch (error) {
    res.status(500).send("Unable to complete appointment");
  }
};

const cancelled = async (req, res) => {
  try {
    await Appointment.findOneAndUpdate(
      { _id: req.body.appointId },
      { status: "cancelled" }
    );

    return res.status(201).send("Appointment cancelled successfully");
  } catch (error) {
    res.status(500).send("Unable to cancel appointment");
  }
};

const deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.appointId);
    return res.status(201).send("Appointment deleted successfully");
  } catch (error) {
    res.status(500).send("Unable to delete appointment");
  }
};

module.exports = {
  getallappointments,
  bookappointment,
  accepted,
  cancelled,
  deleteAppointment,
};
