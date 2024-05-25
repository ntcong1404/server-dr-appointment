const Doctor = require("../models/doctorModel");

const getalldoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    return res.send(doctors);
  } catch (error) {
    res.status(500).send("Unable to get doctors");
  }
};

const applyfordoctor = async (req, res) => {
  try {
    const doctor = await Doctor({
      name: req.body.name,
      img: req.body.img,
      specialty: req.body.specialty,
      specialInterests: req.body.specialInterests,
      language: req.body.language,
      location: req.body.location,
      desc: req.body.desc,
    });
    await doctor.save();

    return res.status(201).send("Application submitted successfully");
  } catch (error) {
    res.status(500).send("Unable to submit application");
  }
};

const updatedoctor = async (req, res) => {
  try {
    await Doctor.findOneAndUpdate({ _id: req.body.doctorId }, { ...req.body });

    return res.status(201).send("Doctor updated successfully");
  } catch (error) {
    res.status(500).send("Unable to update doctor");
  }
};

const deletedoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.doctorId);

    return res.send("Doctor deleted successfully");
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Unable to delete doctor");
  }
};

module.exports = {
  getalldoctors,
  deletedoctor,
  updatedoctor,
  applyfordoctor,
};
