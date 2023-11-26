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

function generateBackgroundColor() {
  backgroundColor = specificationsOfThePokemon["color"]["name"];
  console.log();
  if (backgroundColor === "white") {
    return `background-color: rgb(165, 196, 243);`;
  }
  if (backgroundColor === "red") {
    return `background-color: rgb(251,108,108);`;
  }
  if (backgroundColor === "green") {
    return `background-color: rgb(72,207,177);`;
  }
  if (backgroundColor === "blue") {
    return `background-color: rgb(118,189,254);`;
  }
  if (backgroundColor === "brown") {
    return `background-color: rgb(137,80,48);`;
  }
  if (backgroundColor === "yellow") {
    return `background-color: rgb(255,216,111);`;
  }
  if (backgroundColor === "gray") {
    return `background-color: rgb(102, 103, 106);`;
  }
  if (backgroundColor === "purple") {
    return `background-color: rgb(65,5,114);`;
  }
  if (backgroundColor === "pink") {
    return `background-color: rgb(247,102,173);`;
  }
  if (backgroundColor === "black") {
    return `background-color: rgb(0,0,0);`;
  } else {
    console.log(`${backgroundColor} does not exist`);
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
  habitatFromPokemon = specificationsOfThePokemon["habitat"]["name"];
  console.log(habitatFromPokemon);
  if (habitatFromPokemon === "cave") {
    return `Höhle`;
  }
  if (habitatFromPokemon === "forest") {
    return `Wald`;
  }
  if (habitatFromPokemon === "grassland") {
    return `Wiese`;
  }
  if (habitatFromPokemon === "mountain") {
    return `Berge`;
  }
  if (habitatFromPokemon === "rare") {
    return `selten`;
  }
  if (habitatFromPokemon === "rough-terrain") {
    return `unebenes Gebiet`;
  }
  if (habitatFromPokemon === "sea") {
    return `Meer`;
  }
  if (habitatFromPokemon === "urban") {
    return `Stadt`;
  }
  if (habitatFromPokemon === "waters-edge") {
    return `Gewässerrand`;
  } else {
    console.log(`${habitatFromPokemon} does not exist`);
  }
}
