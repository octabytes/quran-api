const { Model, Field } = require("fireo");

class Ayah extends Model {
  uci = Field.Text();
  number = Field.Number();
  surah_number = Field.Number();
  content = Field.Map();

  static config = {
    collectionName: "quran",
  };
}

module.exports = Ayah;
