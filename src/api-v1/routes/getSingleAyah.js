const Ayah = require("../models/Ayah");
const surah_list = require("./surah_list");

const byId = async (req, res, next) => {
  try {
    const ayah = await Ayah.collection.get({ id: req.params.id });

    const surah = surah_list[ayah.surah_number - 1];

    return res.status(200).json({
      surah: surah,
      ayah: ayah.toObject(),
    });
  } catch (err) {
    next(err);
  }
};

const byNumber = async (req, res, next) => {
  try {
    const number = parseInt(req.params.number);
    const ayah = await Ayah.collection.where("number", "==", number).get();

    const surah = surah_list[ayah.surah_number - 1];

    return res.status(200).json({
      surah: surah,
      ayah: ayah.toObject(),
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  byId,
  byNumber,
};
