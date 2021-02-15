const Ayah = require("../models/Ayah");

const getSurah = async (req, res, next) => {
  try {
    let query;

    if (req.params.number) {
      query = Ayah.collection.where(
        "surah_number",
        "==",
        parseInt(req.params.number)
      );
    }

    if (req.query.cursor) {
      query = Ayah.collection.cursor(req.query.cursor);
    }

    if (req.query.maxResult) {
      query.limit(parseInt(req.query.maxResult));
    } else if (!req.query.cursor) {
      query.limit(2);
    }

    const snapShot = await query.fetch();

    const ayahList = [];

    for (ayah of snapShot.list) {
      ayahList.push(ayah.toObject());
    }

    res.status(200).json({
      cursor: snapShot.cursor,
      ayahs: ayahList,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getSurah;