const mongoose = require("mongoose");

const ArtikelSchema = new mongoose.Schema({
  judul: { type: String, required: true },
  konten: { type: String, required: true },
  penulis: { type: String, required: true },
  tanggal: { type: Date, default: Date.now },
  urlGambar: { type: String, required: false }, // Menambahkan urlGambar
});

module.exports = mongoose.model("Artikel", ArtikelSchema);
