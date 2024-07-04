const Umkm = require("../models/Umkm");

exports.getAllUmkm = async (req, res) => {
  try {
    const umkms = await Umkm.find();
    res.json(umkms);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getUmkmById = async (req, res) => {
  try {
    const umkm = await Umkm.findById(req.params.id);
    res.json(umkm);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createUmkm = async (req, res) => {
  const umkm = new Umkm(req.body);
  try {
    await umkm.save();
    res.status(201).send(umkm);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateUmkm = async (req, res) => {
  try {
    const umkm = await Umkm.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(umkm);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteUmkm = async (req, res) => {
  try {
    await Umkm.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
