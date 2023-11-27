async function loadPokemon() {
  let url = `https://pokeapi.co/api/v2/pokemon/100/`;
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
  loadImageOfThePokemon();
  document.getElementById(
    "idFromPokemon"
  ).innerHTML = `#${currentPokemon["id"]}`;
  document.getElementById("typePokemon").innerHTML += ``;
  for (let i = 0; i < typeFromPokemonInGerman.length; i++) {
    let type = typeFromPokemonInGerman[i];
    document.getElementById(
      "typePokemon"
    ).innerHTML += `<span class="type-pokemon-text">${type}</span>`;
  }
  document.getElementById("headContainer").style = generateBackgroundColor();
  document.getElementById("genraOfPokemon").innerHTML =
    generaOfThePokemonInGerman;
  document.getElementById(
    "heightMeter"
  ).innerHTML = `${heightFromPokemonMeter} m`;
  document.getElementById(
    "heightFoot"
  ).innerHTML = `${heightFromPokemonootFoot} ft`;
  document.getElementById(
    "weightKilogram"
  ).innerHTML = `${weightFromPokemonKilogram} kg`;
  document.getElementById(
    "weightPound"
  ).innerHTML = `${weightFromPokemonootPound} lbs`;
  generateHabitatInGerman();
  document.getElementById(
    "experiencePokemon"
  ).innerHTML = `${experienceFromPokemon} exp`;
}

function loadImageOfThePokemon() {
  let imageFromPokemon =
    currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  if (imageFromPokemon) {
    document.getElementById("pokemonImage").src = imageFromPokemon;
  } else {
    document.getElementById("pokemonImage").src =
      currentPokemon["sprites"]["other"]["home"]["front_default"];
  }
}

function loadAbout() {
  removeCSS();
  document.getElementById("aboutSelection").classList.add("border-bottom");
}

function loadStats() {
  removeCSS();
  document.getElementById("statsSelection").classList.add("border-bottom");
}

function loadEvolution() {
  removeCSS();
  document.getElementById("evolutionSelection").classList.add("border-bottom");
}

function removeCSS() {
  document.getElementById("aboutSelection").classList.remove("border-bottom");
  document.getElementById("statsSelection").classList.remove("border-bottom");
  document.getElementById("evolutionSelection").classList.remove("border-bottom");
  document.getElementById("habitatContainer").classList.remove("d-none");
}


