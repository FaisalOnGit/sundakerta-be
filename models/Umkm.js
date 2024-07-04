const mongoose = require("mongoose");

const UMKMSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  deskripsi: { type: String, required: true },
  alamat: { type: String, required: true },
  kontak: { type: String, required: true },
  urlGambar: { type: String, required: false }, // Menambahkan urlGambar
});

module.exports = mongoose.model("UMKM", UMKMSchema);
