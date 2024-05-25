const express = require("express");
const auth = require("../middleware/auth");

const serviceController = require("../controllers/serviceController");
// const auth = require("../middleware/auth");

const serviceRouter = express.Router();

serviceRouter.get("/getallservices", serviceController.getAllServices);
serviceRouter.post("/addservice", auth, serviceController.addService);
serviceRouter.delete(
  "/deleteservice/:serviceId",
  auth,
  serviceController.deleteService
);

serviceRouter.post(
  "/addcontentservice",
  auth,
  serviceController.addContentObject
);
serviceRouter.delete(
  "/deletecontentservice/:contentId/:serviceId",
  auth,
  serviceController.deleteContentObject
);

module.exports = serviceRouter;
