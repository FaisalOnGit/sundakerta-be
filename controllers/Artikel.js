const Artikel = require("../models/Artikel");

exports.getAllArtikel = async (req, res) => {
  try {
    const artikels = await Artikel.find();
    res.json(artikels);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getArtikelById = async (req, res) => {
  try {
    const artikel = await Artikel.findById(req.params.id);
    res.json(artikel);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createArtikel = async (req, res) => {
  const artikel = new Artikel(req.body);
  try {
    await artikel.save();
    res.status(201).send(artikel);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateArtikel = async (req, res) => {
  try {
    const artikel = await Artikel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(artikel);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteArtikel = async (req, res) => {
  try {
    await Artikel.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
