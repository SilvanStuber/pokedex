let currentPokemon;

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded loadPokemon', currentPokemon)
    renderPokemonInfo();
}

function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = generateCapitalizeNameOfPokemon();
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['front_shiny'];
}

function generateCapitalizeNameOfPokemon() {
    let currentPokemonName = currentPokemon['name'];
    return currentPokemonName.charAt(0).toUpperCase() + currentPokemonName.slice(1);
}