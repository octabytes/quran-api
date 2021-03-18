const express = require("express");
const router = express.Router();

const welcomeEveryone = require("./routes/welcome");
const getSingleAyah = require("./routes/getSingleAyah");
const getSurah = require("./routes/getSurah");
const getSurahList = require("./routes/getSurahList");

router.get("/welcome", welcomeEveryone);

router.get("/ayah/:id", getSingleAyah.byId);
router.get("/ayah/number/:number", getSingleAyah.byNumber);

router.get("/surah/list", getSurahList);
router.get("/surah/:number?", getSurah);

module.exports = router;
