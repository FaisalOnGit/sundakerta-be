const mongoose = require("mongoose");

const WisataSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  deskripsi: { type: String, required: true },
  lokasi: { type: String, required: true },
  hargaTiket: { type: Number, required: true },
  urlGambar: { type: String, required: false }, // Menambahkan urlGambar
});

module.exports = mongoose.model("Wisata", WisataSchema);
