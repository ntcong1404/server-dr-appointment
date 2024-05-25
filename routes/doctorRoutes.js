const express = require("express");
const doctorController = require("../controllers/doctorController");
const auth = require("../middleware/auth");

const doctorRouter = express.Router();

doctorRouter.get("/getalldoctors", doctorController.getalldoctors);

doctorRouter.post("/applyfordoctor", auth, doctorController.applyfordoctor);
doctorRouter.put("/updatedoctor", auth, doctorController.updatedoctor);

doctorRouter.delete(
  "/deletedoctor/:doctorId",
  auth,
  doctorController.deletedoctor
);

module.exports = doctorRouter;
