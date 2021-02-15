const express = require("express");
const router = express.Router();

const welcomeEveryone = require("./routes/welcome");
const getSingleAyah = require("./routes/getSingleAyah");
const getSurah = require("./routes/getSurah");

router.get("/welcome", welcomeEveryone);

router.get("/ayah/:id", getSingleAyah.byId);
router.get("/ayah/number/:number", getSingleAyah.byNumber);

router.get("/surah/:number?", getSurah);

module.exports = router;
