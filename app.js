const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Koneksi ke MongoDB Atlas
const dbURI =
  "mongodb+srv://faisal:Faisal123.@cluster0.xrejb.mongodb.net/explore-desa-sundakerta?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

// Rute
const artikelRouter = require("./routes/Artikel");
const galeriRouter = require("./routes/Galeri");
const umkmRouter = require("./routes/Umkm");
const wisataRouter = require("./routes/Wisata");

app.use("/api/artikel", artikelRouter);
app.use("/api/galeri", galeriRouter);
app.use("/api/umkm", umkmRouter);
app.use("/api/wisata", wisataRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
