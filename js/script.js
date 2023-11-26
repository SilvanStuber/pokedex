async function loadPokemon() {
  let url = `https://pokeapi.co/api/v2/pokemon/80/`;
  currentPokemon = await generateJSON(url);
  generateNameFromPokemon();
  let urlFromSpecies = `https://pokeapi.co/api/v2/pokemon-species/${nameFromPokemon}`;
  specificationsOfThePokemon = await generateJSON(urlFromSpecies);
  generateNameOfPokemonInGerman();
  generateGeneraOfThePokemonInGerman();
  generateHeightOfTHePokemon();
  generateWeightOfTHePokemon();
  generateTypeInGerman();
  generateExperienceOfTHePokemon();
  console.log("Loaded loadPokemon", currentPokemon);
  console.log(weightFromPokemonKilogram);
  console.log(specificationsOfThePokemon);
  console.log(experienceFromPokemon);
  renderPokemonInfo();
}

function renderPokemonInfo() {
  document.getElementById("pokemonName").innerHTML = nameFromPokemonGerman;
  document.getElementById("pokemonImage").src = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  document.getElementById("idFromPokemon").innerHTML = `#${currentPokemon["id"]}`;
  document.getElementById("typePokemon").innerHTML += ``;
  for (let i = 0; i < typeFromPokemonInGerman.length; i++) {
    let type = typeFromPokemonInGerman[i];
    document.getElementById("typePokemon").innerHTML += ` <span class="type-pokemon-text">${type}</span>`;
  }
  document.getElementById("headContainer").style = generateBackgroundColor();
  document.getElementById("genraOfPokemon").innerHTML = generaOfThePokemonInGerman;
  document.getElementById("heightMeter").innerHTML = `${heightFromPokemonMeter} m`;
  document.getElementById("heightFoot").innerHTML = `${heightFromPokemonootFoot} ft`; 
  document.getElementById("weightKilogram").innerHTML = `${weightFromPokemonKilogram} kg`;
  document.getElementById("weightPound").innerHTML = `${weightFromPokemonootPound} lbs`;
  document.getElementById("habitatPokemon").innerHTML = generateHabitatInGerman();
  document.getElementById("experiencePokemon").innerHTML = `${experienceFromPokemon} exp`;
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

function generateExperienceOfTHePokemon() {
  experienceFromPokemon = currentPokemon["base_experience"];
}

async function generateJSON(url) {
  let response = await fetch(url);
  return (currentJSON = await response.json());
}

