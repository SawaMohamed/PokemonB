const express = require("express");
const router = express.Router();
const Pokemon = require("../models/Pokemon");

router.get("/", async (req, res) => {
  const data = await Pokemon.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const {
    firstUser,
    secondUser,
    // firstUserPokemon,
    // secondUserPokemon,
    // photo,
    // type,
    results,
    scoore,
  } = req.body;
  const pok = new Pokemon({
    firstUser,
    secondUser,
    firstUserPokemon,
    secondUserPokemon,
    photo,
    type,
    results,
    scoore,
  });
  const data = await Pokemon.create(pok);
  res.json(data);
});

module.exports = router;
