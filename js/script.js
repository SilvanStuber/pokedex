////////////////render functions are in the script.js folder and the generate functions and global variables are in the data.js folder////////////////

async function loadPokemon() {
  await generateImportFriomAPI();
  generateNameOfPokemonInGerman();
  generateGeneraOfThePokemonInGerman();
  generateTypeInGerman();
  generateBackgroundColor();
  generateGeneraOfThePokemonInGerman();
  generateHeightOfTHePokemon();
  generateWeightOfTHePokemon();
  generateHabitatInGerman();
  console.log("Loaded loadPokemon", currentPokemon);
  console.log(weightFromPokemonKilogram);
  console.log(specificationsOfThePokemon);
  console.log(experienceFromPokemon);
  renderCardPokemonInfo();
}

function renderCardPokemonInfo() {
  renderNameFromPokemonToCard();
  renderImageOfThePokemon();
  renderIdFromPokemonToCard();
  renderTypeInGerman();
  renderBackgroundColorToCard();
  renderGeneraOfThePokemonInGerman();
  renderHeightOfTHePokemonToCard();
  renderWeightOfTHePokemonToCard();
  renderExperienceOfTHePokemonToCard();
  renderHabitatInGermanToCard();
}

function renderNameFromPokemonToCard() {
  document.getElementById("pokemonName").innerHTML = nameFromPokemonGerman;
}

function renderIdFromPokemonToCard() {
  document.getElementById("idFromPokemon").innerHTML = `#${currentPokemon["id"]}`;
}

function renderTypeInGerman() {
  document.getElementById("typePokemon").innerHTML += ``;
  for (let i = 0; i < typeFromPokemonInGerman.length; i++) {
    let type = typeFromPokemonInGerman[i];
    document.getElementById("typePokemon").innerHTML += `<span class="type-pokemon-text">${type}</span>`;
  }
}

function renderBackgroundColorToCard() {
  document.getElementById("headContainer").style = backgroundColor;
}

function renderImageOfThePokemon() {
  let imageFromPokemon = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  if (imageFromPokemon) {
    document.getElementById("pokemonImage").src = imageFromPokemon;
  } else {
    document.getElementById("pokemonImage").src = currentPokemon["sprites"]["other"]["home"]["front_default"];
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

function renderGeneraOfThePokemonInGerman() {
  document.getElementById("genraOfPokemon").innerHTML = generaOfThePokemonInGerman;
}

function renderHeightOfTHePokemonToCard() {
  document.getElementById("heightMeter").innerHTML = `${heightFromPokemonMeter} m`;
  document.getElementById("heightFoot").innerHTML = `${heightFromPokemonootFoot} ft`;
}

function renderWeightOfTHePokemonToCard() {
  document.getElementById("weightKilogram").innerHTML = `${weightFromPokemonKilogram} kg`;
  document.getElementById("weightPound").innerHTML = `${weightFromPokemonootPound} lbs`;
}

function renderHabitatInGermanToCard() {
  if (!specificationsOfThePokemon["habitat"]) {
    document.getElementById("habitatContainer").classList.add("d-none");
  } else {
    document.getElementById("habitatPokemon").innerHTML = habitatFromPokemonInGerman;
  }
}

function renderExperienceOfTHePokemonToCard() {
  if (!currentPokemon["base_experience"]) {
    document.getElementById("experienceContainer").classList.add("d-none");
  } else {
    experienceFromPokemon = currentPokemon["base_experience"];
    document.getElementById("experiencePokemon").innerHTML = `${experienceFromPokemon} exp`;
  }
}

function removeCSS() {
  document.getElementById("aboutSelection").classList.remove("border-bottom");
  document.getElementById("statsSelection").classList.remove("border-bottom");
  document.getElementById("evolutionSelection").classList.remove("border-bottom");
  document.getElementById("habitatContainer").classList.remove("d-none");
}
