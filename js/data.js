////////////////render functions are located in the script.js file and the generation functions and global variables in the data.js file////////////////

let url;
let urlFromSpecies;
let currentPokemon;
let nameUrlFromPokemon;
let specificationsOfThePokemon;
let nameFromPokemon;
let backgroundColor;
let generaOfThePokemon;
let heightFromPokemonMeter;
let heightFromPokemonootFoot;
let weightFromPokemonKilogram;
let weightFromPokemonootPound;
let typeFromPokemon = [];
let experienceFromPokemon;
let habitatPokemon;
let habitatFromPokemon;
let theLanguageIsGerman = true;

async function generateImportFriomAPI() {
  let url = `https://pokeapi.co/api/v2/pokemon/6/`;
  currentPokemon = await generateJSON(url);
  generateUrlNamePokemon();
  let urlFromSpecies = `https://pokeapi.co/api/v2/pokemon-species/${nameUrlFromPokemon}`;
  specificationsOfThePokemon = await generateJSON(urlFromSpecies);
}

function generateUrlNamePokemon() {
  nameUrlFromPokemon = currentPokemon["name"];
}

function generateNamePokemon() {
  if (theLanguageIsGerman === false) {
    nameFromPokemon = specificationsOfThePokemon["names"]["8"]["name"];
  } else {
    nameFromPokemon = specificationsOfThePokemon["names"]["5"]["name"];
  }
}

function generateGeneraPokemon() {
  if (theLanguageIsGerman === false) {
    generaOfThePokemon = specificationsOfThePokemon["genera"]["7"]["genus"];
  } else {
    generaOfThePokemon = specificationsOfThePokemon["genera"]["4"]["genus"];
  }
}

function generateHeightPokemon() {
  heightFromPokemonMeter = currentPokemon["height"] / 10;
  heightFromPokemonootFoot = (heightFromPokemonMeter * 3.281).toFixed(1);
}

function generateWeightPokemon() {
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

function generateType() {
  typeFromPokemon = [];
  for (let i = 0; i < currentPokemon["types"].length; i++) {
    const typePokemon = currentPokemon["types"][i]["type"]["name"];
    if (theLanguageIsGerman === false) {
      let type = typePokemon.charAt(0).toUpperCase() + typePokemon.slice(1);
      typeFromPokemon.push(type);
    } else {
      if (typePokemon === "normal") {
        typeFromPokemon.push("Normal");
      }
      if (typePokemon === "fighting") {
        typeFromPokemon.push("Kampf");
      }
      if (typePokemon === "flying") {
        typeFromPokemon.push("Flug");
      }
      if (typePokemon === "poison") {
        typeFromPokemon.push("Gift");
      }
      if (typePokemon === "ground") {
        typeFromPokemon.push("Boden");
      }
      if (typePokemon === "rock") {
        typeFromPokemon.push("Gestein");
      }
      if (typePokemon === "bug") {
        typeFromPokemon.push("Käfer");
      }
      if (typePokemon === "ghost") {
        typeFromPokemon.push("Geist");
      }
      if (typePokemon === "steel") {
        typeFromPokemon.push("Stahl");
      }
      if (typePokemon === "fire") {
        typeFromPokemon.push("Feuer");
      }
      if (typePokemon === "water") {
        typeFromPokemon.push("Wasser");
      }
      if (typePokemon === "grass") {
        typeFromPokemon.push("Pflanze");
      }
      if (typePokemon === "electric") {
        typeFromPokemon.push("Elektro");
      }
      if (typePokemon === "psychic") {
        typeFromPokemon.push("Psycho");
      }
      if (typePokemon === "ice") {
        typeFromPokemon.push("Eis");
      }
      if (typePokemon === "dragon") {
        typeFromPokemon.push("Drache");
      }
      if (typePokemon === "dark") {
        typeFromPokemon.push("Unlicht");
      }
      if (typePokemon === "fairy") {
        typeFromPokemon.push("Fee");
      }
      if (typePokemon === "unknown") {
        typeFromPokemon.push("Unbekannt");
      }
      if (typePokemon === "shadow") {
        typeFromPokemon.push("Schatten");
      }
    }
  }
}

function generateHabitat() {
  habitatPokemon = specificationsOfThePokemon["habitat"]["name"];
  if (theLanguageIsGerman === false) {
    let habitat = habitatPokemon.charAt(0).toUpperCase() + habitatPokemon.slice(1);
    habitatFromPokemon = habitat;
  } else {
    if (habitatPokemon === "cave") {
      habitatFromPokemon = `Höhle`;
    }
    if (habitatPokemon === "forest") {
      habitatFromPokemon = `Wald`;
    }
    if (habitatPokemon === "grassland") {
      habitatFromPokemon = `Wiese`;
    }
    if (habitatPokemon === "mountain") {
      habitatFromPokemon = `Berge`;
    }
    if (habitatPokemon === "rare") {
      habitatFromPokemon = `selten`;
    }
    if (habitatPokemon === "rough-terrain") {
      habitatFromPokemon = `unebenes Gebiet`;
    }
    if (habitatPokemon === "sea") {
      habitatFromPokemon = `Meer`;
    }
    if (habitatPokemon === "urban") {
      habitatFromPokemon = `Stadt`;
    }
    if (habitatPokemon === "waters-edge") {
      habitatFromPokemon = `Gewässerrand`;
    }
  }
}

function generatePopUpCard() {}

function generateAboutSectionPopUpCard() {}
