const Galeri = require("../models/Galeri");

exports.getAllGaleri = async (req, res) => {
  try {
    const galeris = await Galeri.find();
    res.json(galeris);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getGaleriById = async (req, res) => {
  try {
    const galeri = await Galeri.findById(req.params.id);
    res.json(galeri);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createGaleri = async (req, res) => {
  const galeri = new Galeri(req.body);
  try {
    await galeri.save();
    res.status(201).send(galeri);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateGaleri = async (req, res) => {
  try {
    const galeri = await Galeri.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(galeri);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteGaleri = async (req, res) => {
  try {
    await Galeri.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
