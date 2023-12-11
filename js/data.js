let url;
let urlFromSpecies;
let startPokemon = 1;
let amountPokemon = 11;
let currentPokemon;
let pokemonDataSearchPokemonMap = {};
let myPokemonIsLoaded = false;
let nameUrlFromPokemon;
let specificationsOfThePokemon;
let nameFromPokemon;
let idFromPokemon;
let pokemonFavorites = [];
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
let renderUpperLimit;

async function generateImportPokemon() {
  for (let i = 1; i < 1010; i++) {
    let urlFromSpeciesSearch = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
    let dataSearchPokemon = await generateJSON(urlFromSpeciesSearch);
    pokemonDataSearchPokemonMap[dataSearchPokemon["id"]] = dataSearchPokemon;
  }
}

async function generateImportData(id) {
  let urlIdPokemon = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  currentIdPokemon = await generateJSON(urlIdPokemon).catch(errorFunction);
  idFromPokemon = currentIdPokemon["id"];
  urlFromSpecies = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  specificationsOfThePokemon = await generateJSON(urlFromSpecies).catch(errorFunction);
  if (!specificationsOfThePokemon) {
    console.info("evolution not available");
  } else {
    let urlFromEvolution = specificationsOfThePokemon["evolution_chain"]["url"];
    evolutionOfThePokemon = await generateJSON(urlFromEvolution);
  }
}

function loadPokemon(id) {
  generateNamePokemon(id);
  generateType(id);
  generateBackgroundColor(id);
  generateGeneraPokemon(id);
  generateHeightPokemon(id);
  generateWeightPokemon(id);
  generateHabitat(id);
  generateDataChart(id);
}

function emptyArray() {
  myPokemonIsLoaded = false;
  typeFromPokemon = [];
  apiLabels = [];
  apiData = [];
  resultSearchPokemon = [];
  startPokemon = 1;
  amountPokemon = 11;
  renderUpperLimit = 0;
}

function save() {
  let pokemonFavoritesAtText = JSON.stringify(pokemonFavorites);
  localStorage.setItem("pokemonfavorites", pokemonFavoritesAtText);
}
function load() {
  let pokemonFavoritesAtText = localStorage.getItem("pokemonfavorites");
  if (pokemonFavoritesAtText) {
    pokemonFavorites = JSON.parse(pokemonFavoritesAtText);
  }
}
