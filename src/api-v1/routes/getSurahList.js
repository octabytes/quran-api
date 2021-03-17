const surahList = require("./surah_list");

const getSurahList = async (req, res, next) => {
  try {
    res.status(200).json(surahList);
  } catch (err) {
    next(err);
  }
};

module.exports = getSurahList;
