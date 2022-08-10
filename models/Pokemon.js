const mongoose = require("mongoose");
const PokemonSchema = mongoose.Schema(
  {
    firstUser: { type: String, required: true },
    secondUser: { type: String, required: true },

    // firstUserPokemon: [Pokemon{ type: String, required: true  }],
    // secondUserPokemon: [Pokemon{ type: String, required: true }],
    
    // photo: { type: String, required: [true, "Field is required"] },
    // type: { type: String, required: [true, "Field is required"] },
    
    results: { type: String, require: true },
    scoore: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pokemon", PokemonSchema);


