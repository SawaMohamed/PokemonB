const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const pokemonRoute = require("./models/Pokemon");
dotenv.config({ path: ".env" });
const db = require("./db");

app.use(bodyParser.json());

app.use("/pokemon", pokemonRoute);

//  mongoose.connect(process.env.DB_CONNECTION, () =>{
//     console.log('data connected')
//  });
db();
app.listen(5000);
