const express = require("express");
const auth = require("../middleware/auth");
const appointmentController = require("../controllers/appointmentController");

const appointRouter = express.Router();

appointRouter.get(
  "/getallappointments",
  auth,
  appointmentController.getallappointments
);

appointRouter.post(
  "/bookappointment",
  auth,
  appointmentController.bookappointment
);

appointRouter.put("/accept", auth, appointmentController.accepted);
appointRouter.put("/cancel", auth, appointmentController.cancelled);
appointRouter.delete(
  "/delete/:appointId",
  auth,
  appointmentController.deleteAppointment
);

module.exports = appointRouter;
