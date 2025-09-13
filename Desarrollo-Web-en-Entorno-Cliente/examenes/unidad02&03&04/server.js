const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Importar cors
const app = express();
const port = 3000;

app.use(cors()); // Usar el middleware cors
app.use(express.json());

// Ruta para obtener los datos de los Pokémon
app.get("/pokemon_data", (req, res) => {
  const filePath = path.join(__dirname, "pokemon_data.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      res.status(500).send("Error al leer los datos");
      return;
    }
    res.send(JSON.parse(data));
  });
});

// Ruta para actualizar los datos de un Pokémon
app.post("/pokemon_data", (req, res) => {
  const updatedPokemon = req.body;

  const filePath = path.join(__dirname, "pokemon_data.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      res.status(500).send("Error al leer los datos");
      return;
    }

    let pokemonList = JSON.parse(data);
    const pokemonIndex = pokemonList.findIndex(
      (p) => p.id === updatedPokemon.id
    );
    if (pokemonIndex !== -1) {
      pokemonList[pokemonIndex] = updatedPokemon;

      fs.writeFile(filePath, JSON.stringify(pokemonList, null, 2), (err) => {
        if (err) {
          console.error("Error al guardar el archivo:", err);
          res.status(500).send("Error al guardar los datos");
          return;
        }
        res.send("Datos del Pokémon actualizados correctamente");
      });
    } else {
      res.status(404).send("Pokémon no encontrado");
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
