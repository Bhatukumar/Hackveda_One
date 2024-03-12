const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  experience: { type: Number },
  discription: { type: String },
  area:{type: String},
  image: {type: String}
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
