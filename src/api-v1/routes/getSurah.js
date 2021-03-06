const Ayah = require("../models/Ayah");
const surah_list = require("./surah_list");

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

    if (req.query.offset) {
      query.offset(parseInt(req.query.offset));
    }

    if (req.query.maxResult) {
      if (req.query.direction) {
        if (req.query.direction == "start") {
          query.limit(parseInt(req.query.maxResult));
        } else if (req.query.direction == "end") {
          query.limitToLast(parseInt(req.query.maxResult));
        }
      } else {
        query.limit(parseInt(req.query.maxResult));
      }
    } else if (!req.query.cursor) {
      query.limit(30);
    }

    query.orderBy("number");

    const snapShot = await query.fetch();

    const ayahList = [];

    for (ayah of snapShot.list) {
      ayahList.push(ayah.toObject());
    }

    const surah = surah_list[ayahList[0].surah_number - 1];

    res.status(200).json({
      cursor: snapShot.cursor,
      surah: surah,
      ayahs: ayahList,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getSurah;
