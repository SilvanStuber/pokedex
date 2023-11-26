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

async function loadPokemon() {
  let url = `https://pokeapi.co/api/v2/pokemon/1/`;
  currentPokemon = await generateJSON(url);
  generateNameFromPokemon();
  let urlFromSpecies = `https://pokeapi.co/api/v2/pokemon-species/${nameFromPokemon}`;
  specificationsOfThePokemon = await generateJSON(urlFromSpecies);
  generateNameOfPokemonInGerman();
  generateGeneraOfThePokemonInGerman();
  generateHeightOfTHePokemon();
  generateWeightOfTHePokemon();
  console.log("Loaded loadPokemon", currentPokemon);
  console.log(weightFromPokemonKilogram);
  console.log(specificationsOfThePokemon);
  console.log(weightFromPokemonootPound);
  renderPokemonInfo();
}

function renderPokemonInfo() {
  document.getElementById("pokemonName").innerHTML = nameFromPokemonGerman;
  document.getElementById("pokemonImage").src = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  document.getElementById("idFromPokemon").innerHTML = `#${currentPokemon["id"]}`;
  document.getElementById("headContainer").style = generateBackgroundColor();
  document.getElementById("genraOfPokemon").innerHTML = generaOfThePokemonInGerman;
  document.getElementById("heightMeter").innerHTML = `${heightFromPokemonMeter} m`;
  document.getElementById("heightFoot").innerHTML = `${heightFromPokemonootFoot} ft`; 
  document.getElementById("weightKilogram").innerHTML = `${weightFromPokemonKilogram} kg`;
  document.getElementById("weightPound").innerHTML = `${weightFromPokemonootPound} lbs`;
  document.getElementById("habitatPokemon").innerHTML = generateHabitatInGerman(); 
}

function generateNameFromPokemon() {
  nameFromPokemon = currentPokemon["name"];
}

function generateNameOfPokemonInGerman() {
  nameFromPokemonGerman = specificationsOfThePokemon["names"]["5"]["name"];
}

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