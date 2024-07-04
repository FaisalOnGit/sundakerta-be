const mongoose = require("mongoose");

const GaleriSchema = new mongoose.Schema({
  judul: { type: String, required: true },
  deskripsi: { type: String },
  urlGambar: { type: String, required: true },
  tanggal: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Galeri", GaleriSchema);
