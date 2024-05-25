const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    specialty: {
      type: String,
      required: true,
    },
    specialInterests: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", schema);

module.exports = Doctor;
