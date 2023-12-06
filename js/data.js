let url;
let urlFromSpecies;
let startPokemon = 1;
let amountPokemon = 30;
let currentPokemon;
let currentIdPokemon;
let nameUrlFromPokemon;
let specificationsOfThePokemon;
let nameFromPokemon;
let idFromPokemon;
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
let theLanguageIsGerman = false;
let apiLabels = [];
let apiData = [];
let evolutionOfThePokemon;
let evolutionStep2;
let evolutionStep3;
let isSearching = false;
let searchInputNumber;
let searchInputText;
let searchIdPokemon;
let pokemonName;
let resultSearchPokemon = [];
let idFromTextSearch;
let searchIsSuccessful = false;

async function generateImportPokemon() {
  let urlPokemon = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
  currentPokemon = await generateJSON(urlPokemon);
}

async function generateImportData(id) {
  let urlIdPokemon = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  currentIdPokemon = await generateJSON(urlIdPokemon);
  idFromPokemon = currentIdPokemon["id"];
  nameUrlFromPokemon = currentIdPokemon["name"];
  urlFromSpecies = `https://pokeapi.co/api/v2/pokemon-species/${nameUrlFromPokemon}`;
  specificationsOfThePokemon = await generateJSON(urlFromSpecies);
  if (!specificationsOfThePokemon) {
    console.log("evolution not available");
  } else {
    let urlFromEvolution = specificationsOfThePokemon["evolution_chain"]["url"];
    evolutionOfThePokemon = await generateJSON(urlFromEvolution);
  }
}

function generateNamePokemon() {
  if (!specificationsOfThePokemon["names"]) {
    console.log("names not available");
  } else {
    if (!theLanguageIsGerman) {
      nameFromPokemon = specificationsOfThePokemon["names"]["8"]["name"];
    } else {
      nameFromPokemon = specificationsOfThePokemon["names"]["5"]["name"];
    }
  }
}

function generateGeneraPokemon() {
  if (!theLanguageIsGerman) {
    if (!specificationsOfThePokemon["genera"]["7"]) {
      console.log("genera not available");
    } else {
      generaOfThePokemon = specificationsOfThePokemon["genera"]["7"]["genus"];
    }
  } else {
    if (!specificationsOfThePokemon["genera"]["4"]) {
      console.log("genera not available");
    } else {
      generaOfThePokemon = specificationsOfThePokemon["genera"]["4"]["genus"];
    }
  }
}

function generateHeightPokemon() {
  heightFromPokemonMeter = currentIdPokemon["height"] / 10;
  heightFromPokemonootFoot = (heightFromPokemonMeter * 3.281).toFixed(1);
}

function generateWeightPokemon() {
  weightFromPokemonKilogram = currentIdPokemon["weight"] / 10;
  weightFromPokemonootPound = (weightFromPokemonKilogram * 2.205).toFixed(1);
}

async function generateJSON(url) {
  let response = await fetch(url);
  return (currentJSON = await response.json());
}

function generateBackgroundColor() {
  if (!specificationsOfThePokemon["color"]) {
    console.log("color not available");
  } else {
    backgroundColorFromPokemon = specificationsOfThePokemon["color"]["name"];
    switch (backgroundColorFromPokemon) {
      case "white":
        backgroundColor = `background-color: rgb(165, 196, 243);`;
        break;
      case "red":
        backgroundColor = `background-color: rgb(251,108,108);`;
        break;
      case "green":
        backgroundColor = `background-color: rgb(72,207,177);`;
        break;
      case "blue":
        backgroundColor = `background-color: rgb(118,189,254);`;
        break;
      case "brown":
        backgroundColor = `background-color: rgb(137,80,48);`;
        break;
      case "yellow":
        backgroundColor = `background-color: rgb(255,216,111);`;
        break;
      case "gray":
        backgroundColor = `background-color: rgb(102, 103, 106);`;
        break;
      case "purple":
        backgroundColor = `background-color: rgb(65,5,114);`;
        break;
      case "pink":
        backgroundColor = `background-color: rgb(247,102,173);`;
        break;
      case "black":
        backgroundColor = `background-color: rgb(0,0,0);`;
        break;
    }
  }
}

function generateType() {
  typeFromPokemon = [];
  for (let i = 0; i < currentIdPokemon["types"].length; i++) {
    if (!currentIdPokemon["types"][i]["type"]) {
      console.log("types not available");
    } else {
      const typePokemon = currentIdPokemon["types"][i]["type"]["name"];
      if (!theLanguageIsGerman) {
        let type = typePokemon.charAt(0).toUpperCase() + typePokemon.slice(1);
        typeFromPokemon.push(type);
      } else {
        generateGermanType(typePokemon);
      }
    }
  }
}

function generateGermanType(typePokemon) {
  switch (typePokemon) {
    case "normal":
      typeFromPokemon.push("Normal");
      break;
    case "fighting":
      typeFromPokemon.push("Kampf");
      break;
    case "flying":
      typeFromPokemon.push("Flug");
      break;
    case "poison":
      typeFromPokemon.push("Gift");
      break;
    case "ground":
      typeFromPokemon.push("Boden");
      break;
    case "rock":
      typeFromPokemon.push("Gestein");
      break;
    case "bug":
      typeFromPokemon.push("Käfer");
      break;
    case "ghost":
      typeFromPokemon.push("Geist");
      break;
    case "steel":
      typeFromPokemon.push("Stahl");
      break;
    case "fire":
      typeFromPokemon.push("Feuer");
      break;
    case "water":
      typeFromPokemon.push("Wasser");
      break;
    case "grass":
      typeFromPokemon.push("Pflanze");
      break;
    case "electric":
      typeFromPokemon.push("Elektro");
      break;
    case "psychic":
      typeFromPokemon.push("Psycho");
      break;
    case "ice":
      typeFromPokemon.push("Eis");
      break;
    case "dragon":
      typeFromPokemon.push("Drache");
      break;
    case "dark":
      typeFromPokemon.push("Unlicht");
      break;
    case "fairy":
      typeFromPokemon.push("Fee");
      break;
    case "unknown":
      typeFromPokemon.push("Unbekannt");
      break;
    case "shadow":
      typeFromPokemon.push("Schatten");
      break;
  }
}

function generateHabitat() {
  if (!specificationsOfThePokemon["habitat"]) {
    console.log("habitat not available");
  } else {
    habitatPokemon = specificationsOfThePokemon["habitat"]["name"];
    if (!theLanguageIsGerman) {
      let habitat = habitatPokemon.charAt(0).toUpperCase() + habitatPokemon.slice(1);
      habitatFromPokemon = habitat;
    } else {
      generateHabitatGerman(habitatPokemon);
    }
  }
}

function generateHabitatGerman(habitatPokemon) {
  switch (habitatPokemon) {
    case "cave":
      habitatFromPokemon = `Höhle`;
      break;
    case "forest":
      habitatFromPokemon = `Wald`;
      break;
    case "grassland":
      habitatFromPokemon = `Wiese`;
      break;
    case "mountain":
      habitatFromPokemon = `Berge`;
      break;
    case "rare":
      habitatFromPokemon = `selten`;
      break;
    case "rough-terrain":
      habitatFromPokemon = `unebenes Gebiet`;
      break;
    case "sea":
      habitatFromPokemon = `Meer`;
      break;
    case "urban":
      habitatFromPokemon = `Stadt`;
      break;
    case "waters-edge":
      habitatFromPokemon = `Gewässerrand`;
      break;
  }
}

function generateDataChart() {
  apiLabels = [];
  apiData = [];
  for (let i = 0; i < currentIdPokemon["stats"].length; i++) {
    let labelsFromAPI = currentIdPokemon["stats"][i]["stat"]["name"];
    let dataFromAPI = currentIdPokemon["stats"][i]["base_stat"];
    if (!theLanguageIsGerman) {
      let labels = labelsFromAPI.charAt(0).toUpperCase() + labelsFromAPI.slice(1);
      apiLabels.push(labels);
    } else {
      generateDataChartGerman(labelsFromAPI);
    }
    apiData.push(dataFromAPI);
  }
}

function generateDataChartGerman(labelsFromAPI) {
  switch (labelsFromAPI) {
    case "hp":
      apiLabels.push("Lebenspunkte");
      break;
    case "attack":
      apiLabels.push("Attacke");
      break;
    case "defense":
      apiLabels.push("Verteidigung");
      break;
    case "special-attack":
      apiLabels.push("Spezialangriff");
      break;
    case "special-defense":
      apiLabels.push("Spezialverteidigung");
      break;
    case "speed":
      apiLabels.push("Geschwindigkeit");
      break;
  }
}

async function generateEvolutionStep1() {
  let urlPokemonStep1 = evolutionOfThePokemon["chain"]["species"]["url"];
  let pokemonStep1 = await generateJSON(urlPokemonStep1);
  let idPokemonStep1 = pokemonStep1["id"];
  let urlIdStep1 = `https://pokeapi.co/api/v2/pokemon/${idPokemonStep1}/`;
  let currentPokemonStep1 = await generateJSON(urlIdStep1);
  document.getElementById("imgStep1PopUpCard").src = currentPokemonStep1["sprites"]["other"]["official-artwork"]["front_default"];
  if (!theLanguageIsGerman) {
    document.getElementById("textStep1PopUpCard").innerHTML = pokemonStep1["names"]["8"]["name"] + `<div class="id-pokemon-evolution">#${idPokemonStep1}</div>`;
  } else {
    document.getElementById("textStep1PopUpCard").innerHTML = pokemonStep1["names"]["5"]["name"] + `<div class="id-pokemon-evolution">#${idPokemonStep1}</div>`;
  }
}

async function generateEvolutionStep2() {
  let urlPokemonStep2 = evolutionOfThePokemon["chain"]["evolves_to"]["0"]["species"]["url"];
  let pokemonStep2 = await generateJSON(urlPokemonStep2);
  let idPokemonStep2 = pokemonStep2["id"];
  let urlIdStep2 = `https://pokeapi.co/api/v2/pokemon/${idPokemonStep2}/`;
  let currentPokemonStep2 = await generateJSON(urlIdStep2);
  document.getElementById("imgStep2PopUpCard").src = currentPokemonStep2["sprites"]["other"]["official-artwork"]["front_default"];
  if (!theLanguageIsGerman) {
    document.getElementById("textStep2PopUpCard").innerHTML = pokemonStep2["names"]["8"]["name"] + `<div class="id-pokemon-evolution">#${idPokemonStep2}</div>`;
  } else {
    document.getElementById("textStep2PopUpCard").innerHTML = pokemonStep2["names"]["5"]["name"] + `<div class="id-pokemon-evolution">#${idPokemonStep2}</div>`;
  }
}

async function generateEvolutionStep3() {
  if (!evolutionOfThePokemon["chain"]["evolves_to"]["0"]["evolves_to"]["0"]) {
    document.getElementById("arrowEvolution2PopUpCard").classList.add("d-none");
  } else {
    document.getElementById("arrowEvolution2PopUpCard").classList.remove("d-none");
    let urlPokemonStep3 = evolutionOfThePokemon["chain"]["evolves_to"]["0"]["evolves_to"]["0"]["species"]["url"];
    let pokemonStep3 = await generateJSON(urlPokemonStep3);
    let idPokemonStep3 = pokemonStep3["id"];
    let urlIdStep3 = `https://pokeapi.co/api/v2/pokemon/${idPokemonStep3}/`;
    let currentPokemonStep3 = await generateJSON(urlIdStep3);
    document.getElementById("imgStep3PopUpCard").src = currentPokemonStep3["sprites"]["other"]["official-artwork"]["front_default"];
    if (!theLanguageIsGerman) {
      document.getElementById("textStep3PopUpCard").innerHTML = pokemonStep3["names"]["8"]["name"] + `<div class="id-pokemon-evolution">#${idPokemonStep3}</div>`;
    } else {
      document.getElementById("textStep3PopUpCard").innerHTML = pokemonStep3["names"]["5"]["name"] + `<div class="id-pokemon-evolution">#${idPokemonStep3}</div>`;
    }
  }
}

async function generateSearchTextInputgEnglish(searchInputText) {
  renderLoadScreenSearch();
  searchInputText = searchInputText.toLowerCase();
  searchIsSuccessful = false;
  for (let i = 0; i < 1010; i++) {
    let pokemonNameSearch = currentPokemon["results"][i]["name"];
    if (pokemonNameSearch.toLowerCase().includes(searchInputText)) {
      await generateExistingPokemon(i);
    } 
  }
  if (!searchIsSuccessful) {
    notFound();
  }
}

async function generateSearchTextInputgGerman(searchInputText) {
  renderLoadScreenSearch();
  searchInputText = searchInputText.toLowerCase();
  searchIsSuccessful = false;
  for (let i = 0; i < 1010; i++) {
    let pokemonNameSearch = currentPokemon["results"][i]["name"];
    let urlFromSpeciesSearch = `https://pokeapi.co/api/v2/pokemon-species/${pokemonNameSearch}`;
    specificationsOfThePokemon = await generateJSON(urlFromSpeciesSearch);
    let nameFromPokemonGerman = specificationsOfThePokemon["names"]["5"]["name"].toLowerCase();
    if (nameFromPokemonGerman.toLowerCase().includes(searchInputText)) {
      await generateExistingPokemon(i);
    } 
  }
  if (!searchIsSuccessful) {
    notFound();
  }
}

async function generateExistingPokemon(i) {
  let pokemonSearchURL = currentPokemon["results"][i]["url"];
  dataNamePokemon = await generateJSON(pokemonSearchURL);
  await renderCard(dataNamePokemon["id"]);
  searchIsSuccessful = true;
  renderCloseLoadScreenSearch();
}

