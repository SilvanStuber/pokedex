////////////////render functions are in the script.js folder and the generate functions and global variables are in the data.js folder////////////////

let url;
let urlFromSpecies;
let currentPokemon;
let nameFromPokemon;
let specificationsOfThePokemon;
let nameFromPokemonGerman;
let backgroundColor;
let generaOfThePokemonInGerman;
let heightFromPokemonMeter;
let heightFromPokemonootFoot;
let weightFromPokemonKilogram;
let weightFromPokemonootPound;
let typeFromPokemonInGerman = [];
let experienceFromPokemon;
let habitatFromPokemonInEnglish;
let habitatFromPokemonInGerman;

async function generateImportFriomAPI() {
  let url = `https://pokeapi.co/api/v2/pokemon/9/`;
  currentPokemon = await generateJSON(url);
  generateNameFromPokemon();
  let urlFromSpecies = `https://pokeapi.co/api/v2/pokemon-species/${nameFromPokemon}`;
  specificationsOfThePokemon = await generateJSON(urlFromSpecies);
}

function generateNameFromPokemon() {
  nameFromPokemon = currentPokemon["name"];
}

function generateNameOfPokemonInGerman() {
  nameFromPokemonGerman = specificationsOfThePokemon["names"]["5"]["name"];
}

function generateGeneraOfThePokemonInGerman() {
  generaOfThePokemonInGerman = specificationsOfThePokemon["genera"]["4"]["genus"];
}

function generateHeightOfTHePokemon() {
  heightFromPokemonMeter = currentPokemon["height"] / 10;
  heightFromPokemonootFoot = (heightFromPokemonMeter * 3.281).toFixed(1);
}

function generateWeightOfTHePokemon() {
  weightFromPokemonKilogram = currentPokemon["weight"] / 10;
  weightFromPokemonootPound = (weightFromPokemonKilogram * 2.205).toFixed(1);
}

async function generateJSON(url) {
  let response = await fetch(url);
  return (currentJSON = await response.json());
}

function generateBackgroundColor() {
  backgroundColorFromPokemon = specificationsOfThePokemon["color"]["name"];
  if (backgroundColorFromPokemon === "white") {
    backgroundColor = `background-color: rgb(165, 196, 243);`;
  }
  if (backgroundColorFromPokemon === "red") {
    backgroundColor = `background-color: rgb(251,108,108);`;
  }
  if (backgroundColorFromPokemon === "green") {
    backgroundColor = `background-color: rgb(72,207,177);`;
  }
  if (backgroundColorFromPokemon === "blue") {
    backgroundColor = `background-color: rgb(118,189,254);`;
  }
  if (backgroundColorFromPokemon === "brown") {
    backgroundColor = `background-color: rgb(137,80,48);`;
  }
  if (backgroundColorFromPokemon === "yellow") {
    backgroundColor = `background-color: rgb(255,216,111);`;
  }
  if (backgroundColorFromPokemon === "gray") {
    backgroundColor = `background-color: rgb(102, 103, 106);`;
  }
  if (backgroundColorFromPokemon === "purple") {
    backgroundColor = `background-color: rgb(65,5,114);`;
  }
  if (backgroundColorFromPokemon === "pink") {
    backgroundColor = `background-color: rgb(247,102,173);`;
  }
  if (backgroundColorFromPokemon === "black") {
    backgroundColor = `background-color: rgb(0,0,0);`;
  }
}

function generateTypeInGerman() {
  typeFromPokemonInGerman = [];
  for (let i = 0; i < currentPokemon["types"].length; i++) {
    const typeFromPokemon = currentPokemon["types"][i]["type"]["name"];
    if (typeFromPokemon === "normal") {
      typeFromPokemonInGerman.push("Normal");
    }
    if (typeFromPokemon === "fighting") {
      typeFromPokemonInGerman.push("Kampf");
    }
    if (typeFromPokemon === "flying") {
      typeFromPokemonInGerman.push("Flug");
    }
    if (typeFromPokemon === "poison") {
      typeFromPokemonInGerman.push("Gift");
    }
    if (typeFromPokemon === "ground") {
      typeFromPokemonInGerman.push("Boden");
    }
    if (typeFromPokemon === "rock") {
      typeFromPokemonInGerman.push("Gestein");
    }
    if (typeFromPokemon === "bug") {
      typeFromPokemonInGerman.push("Käfer");
    }
    if (typeFromPokemon === "ghost") {
      typeFromPokemonInGerman.push("Geist");
    }
    if (typeFromPokemon === "steel") {
      typeFromPokemonInGerman.push("Stahl");
    }
    if (typeFromPokemon === "fire") {
      typeFromPokemonInGerman.push("Feuer");
    }
    if (typeFromPokemon === "water") {
      typeFromPokemonInGerman.push("Wasser");
    }
    if (typeFromPokemon === "grass") {
      typeFromPokemonInGerman.push("Pflanze");
    }
    if (typeFromPokemon === "electric") {
      typeFromPokemonInGerman.push("Elektro");
    }
    if (typeFromPokemon === "psychic") {
      typeFromPokemonInGerman.push("Psycho");
    }
    if (typeFromPokemon === "ice") {
      typeFromPokemonInGerman.push("Eis");
    }
    if (typeFromPokemon === "dragon") {
      typeFromPokemonInGerman.push("Drache");
    }
    if (typeFromPokemon === "dark") {
      typeFromPokemonInGerman.push("Unlicht");
    }
    if (typeFromPokemon === "fairy") {
      typeFromPokemonInGerman.push("Fee");
    }
    if (typeFromPokemon === "unknown") {
      typeFromPokemonInGerman.push("Unbekannt");
    }
    if (typeFromPokemon === "shadow") {
      typeFromPokemonInGerman.push("Schatten");
    }
  }
}

function generateHabitatInGerman() {
  habitatFromPokemonInEnglish = specificationsOfThePokemon["habitat"]["name"];
  if (habitatFromPokemonInEnglish === "cave") {
    habitatFromPokemonInGerman = `Höhle`;
  }
  if (habitatFromPokemonInEnglish === "forest") {
    habitatFromPokemonInGerman = `Wald`;
  }
  if (habitatFromPokemonInEnglish === "grassland") {
    habitatFromPokemonInGerman = `Wiese`;
  }
  if (habitatFromPokemonInEnglish === "mountain") {
    habitatFromPokemonInGerman = `Berge`;
  }
  if (habitatFromPokemonInEnglish === "rare") {
    habitatFromPokemonInGerman = `selten`;
  }
  if (habitatFromPokemonInEnglish === "rough-terrain") {
    habitatFromPokemonInGerman = `unebenes Gebiet`;
  }
  if (habitatFromPokemonInEnglish === "sea") {
    habitatFromPokemonInGerman = `Meer`;
  }
  if (habitatFromPokemonInEnglish === "urban") {
    habitatFromPokemonInGerman = `Stadt`;
  }
  if (habitatFromPokemonInEnglish === "waters-edge") {
    habitatFromPokemonInGerman = `Gewässerrand`;
  }
}
