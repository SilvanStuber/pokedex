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
let pokemonFavorites = [];
let myPokemonIsLoaded = false;
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
  currentPokemon = await generateJSON(urlPokemon).catch(errorFunction);
}

async function generateImportData(id) {
  let urlIdPokemon = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  currentIdPokemon = await generateJSON(urlIdPokemon).catch(errorFunction);
  idFromPokemon = currentIdPokemon["id"];
  nameUrlFromPokemon = currentIdPokemon["name"];
  urlFromSpecies = `https://pokeapi.co/api/v2/pokemon-species/${nameUrlFromPokemon}`;
  specificationsOfThePokemon = await generateJSON(urlFromSpecies).catch(errorFunction);
  if (!specificationsOfThePokemon) {
    console.log("evolution not available");
  } else {
    let urlFromEvolution = specificationsOfThePokemon["evolution_chain"]["url"];
    evolutionOfThePokemon = await generateJSON(urlFromEvolution);
  }
}

function loadPokemon() {
  generateNamePokemon();
  generateType();
  generateBackgroundColor();
  generateGeneraPokemon();
  generateHeightPokemon();
  generateWeightPokemon();
  generateHabitat();
  generateDataChart();
}
