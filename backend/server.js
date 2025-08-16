const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Profile, sequelize } = require("./models/profile.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// POST API to save scraped profile
app.post("/api/profiles", async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET API to fetch all profiles
app.get("/api/profiles", async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Sync DB & start server
sequelize.sync().then(() => {
  app.listen(5000, () => console.log("🚀 Server running at http://localhost:5000"));
});
