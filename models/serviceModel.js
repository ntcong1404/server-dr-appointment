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
    desc: {
      type: String,
      required: false,
    },
    content: [
      {
        title: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", schema);

module.exports = Service;
