const Wisata = require("../models/Wisata");

exports.getAllWisata = async (req, res) => {
  try {
    const wisatas = await Wisata.find();
    res.json(wisatas);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getWisataById = async (req, res) => {
  try {
    const wisata = await Wisata.findById(req.params.id);
    res.json(wisata);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createWisata = async (req, res) => {
  const wisata = new Wisata(req.body);
  try {
    await wisata.save();
    res.status(201).send(wisata);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateWisata = async (req, res) => {
  try {
    const wisata = await Wisata.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(wisata);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteWisata = async (req, res) => {
  try {
    await Wisata.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
