////////////////render functions are located in the script.js file and the generation functions and global variables in the data.js file////////////////

async function loadPokemon() {
  await generateImportFriomAPI();
  generateNamePokemon();
  generateGeneraPokemon();
  generateType();
  generateBackgroundColor();
  generateGeneraPokemon();
  generateHeightPokemon();
  generateWeightPokemon();
  generateHabitat();
  console.log("Loaded loadPokemon", currentPokemon);
  console.log(weightFromPokemonKilogram);
  console.log(specificationsOfThePokemon);
  console.log(experienceFromPokemon);
  renderPopUpCard();
}

function renderPopUpCard() {
  renderNamePokemonPopUpCard();
  renderIdPokemonPopUpCard();
  renderTypePopUpCard();
  renderImagePokemonPopUpCard();
  renderBackgroundColorPopUpCard();
  renderAboutPopUpCard();
}

function renderEnglish() {
  emptyArray();
  theLanguageIsGerman = false;
  loadPokemon();
}

function renderGerman() {
  emptyArray();
  theLanguageIsGerman = true;
  loadPokemon();
}

function emptyArray() {
  typeFromPokemon = [];
}

function renderNamePokemonPopUpCard() {
  document.getElementById("pokemonName").innerHTML = nameFromPokemonGerman;
}

function renderIdPokemonPopUpCard() {
  document.getElementById("idFromPokemon").innerHTML = `#${currentPokemon["id"]}`;
}

function renderTypePopUpCard() {
  document.getElementById("typePokemon").innerHTML += ``;
  for (let i = 0; i < typeFromPokemon.length; i++) {
    let type = typeFromPokemon[i];
    document.getElementById("typePokemon").innerHTML += `<span class="type-pokemon-text">${type}</span>`;
  }
}

function renderBackgroundColorPopUpCard() {
  document.getElementById("headContainer").style = backgroundColor;
}

function renderImagePokemonPopUpCard() {
  let imageFromPokemon = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  if (imageFromPokemon) {
    document.getElementById("pokemonImage").src = imageFromPokemon;
  } else {
    document.getElementById("pokemonImage").src = currentPokemon["sprites"]["other"]["home"]["front_default"];
  }
}

function renderAboutPopUpCard() {
  renderRemoveCSS();
  document.getElementById("aboutSelection").classList.add("border-bottom");
  renderGeneraPokemonPopUpCard();
  renderHeightPokemonPopUpCard();
  renderWeightPokemonPopUpCard();
  renderHabitatPopUpCard();
  renderExperiencePokemonPopUpCard();
}

function loadStatsPopUpCard() {
  renderRemoveCSS();
  document.getElementById("statsSelection").classList.add("border-bottom");
}

function loadEvolutionPopUpCard() {
  renderRemoveCSS();
  document.getElementById("evolutionSelection").classList.add("border-bottom");
}

function renderGeneraPokemonPopUpCard() {
  document.getElementById("genraOfPokemon").innerHTML = generaOfThePokemonInGerman;
}

function renderHeightPokemonPopUpCard() {
  document.getElementById("heightMeter").innerHTML = `${heightFromPokemonMeter} m`;
  document.getElementById("heightFoot").innerHTML = `${heightFromPokemonootFoot} ft`;
}

function renderWeightPokemonPopUpCard() {
  document.getElementById("weightKilogram").innerHTML = `${weightFromPokemonKilogram} kg`;
  document.getElementById("weightPound").innerHTML = `${weightFromPokemonootPound} lbs`;
}

function renderHabitatPopUpCard() {
  renderRemoveCSS();
  if (!specificationsOfThePokemon["habitat"]) {
    document.getElementById("habitatContainer").classList.add("d-none");
  } else {
    document.getElementById("habitatPokemon").innerHTML = habitatFromPokemonInGerman;
  }
}

function renderExperiencePokemonPopUpCard() {
  renderRemoveCSS();
  if (!currentPokemon["base_experience"]) {
    document.getElementById("experienceContainer").classList.add("d-none");
  } else {
    experienceFromPokemon = currentPokemon["base_experience"];
    document.getElementById("experiencePokemon").innerHTML = `${experienceFromPokemon} exp`;
  }
}

function renderRemoveCSS() {
  document.getElementById("aboutSelection").classList.remove("border-bottom");
  document.getElementById("statsSelection").classList.remove("border-bottom");
  document.getElementById("evolutionSelection").classList.remove("border-bottom");
  document.getElementById("habitatContainer").classList.remove("d-none");
}
