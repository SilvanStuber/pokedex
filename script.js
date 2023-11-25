let currentPokemon;
let nameFromPokemon;
let specificationsOfThePokemon;


async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/4/`;
    currentPokemon = await generateJSON(url);
    generateNameFromPokemon();
    let urlFromSpecies = `https://pokeapi.co/api/v2/pokemon-species/${nameFromPokemon}`;
    specificationsOfThePokemon = await generateJSON(urlFromSpecies);
    console.log('Loaded loadPokemon', currentPokemon);
    console.log(nameFromPokemon);
    console.log(specificationsOfThePokemon)
    renderPokemonInfo();
}

function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = generateCapitalizeNameOfPokemon();
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('idFromPokemon').innerHTML = `#${currentPokemon['id']}`;
}

function generateNameFromPokemon() {
    nameFromPokemon = currentPokemon['name'];
}

function generateCapitalizeNameOfPokemon() {
    return nameFromPokemon.charAt(0).toUpperCase() + nameFromPokemon.slice(1); //since everything is extracted from the JSON as lowercase letters, we use this function to capitalise the first letter
}

async function generateJSON(url) {
    let response = await fetch(url);
    return currentJSON = await response.json();
}

