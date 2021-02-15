const Ayah = require("../models/Ayah");

const byId = async (req, res, next) => {
  try {
    const ayah = await Ayah.collection.get({ id: req.params.id });
    return res.status(200).json(ayah.toObject());
  } catch (err) {
    next(err);
  }
};

const byNumber = async (req, res, next) => {
  try {
    const number = parseInt(req.params.number);
    const ayah = await Ayah.collection.where("number", "==", number).get();

    return res.status(200).json(ayah.toObject());
  } catch (err) {
    next(err);
  }
};

module.exports = {
  byId,
  byNumber,
};
