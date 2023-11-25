let currentPokemon;

async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/1/`; 
    let response = await fetch(url);
    currentPokemon = await response.json();
    let nameFromPokemon = currentPokemon['name'];
    console.log('Loaded loadPokemon', currentPokemon)
    console.log(nameFromPokemon)
    renderPokemonInfo();
}

function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = generateCapitalizeNameOfPokemon();
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('idFromPokemon').innerHTML = `#${currentPokemon['id']}`;
}

function generateCapitalizeNameOfPokemon() {
    let currentPokemonName = currentPokemon['name']; //reads the name of the Pokemon from the JSON
    return currentPokemonName.charAt(0).toUpperCase() + currentPokemonName.slice(1); //since everything is extracted from the JSON as lowercase letters, we use this function to capitalise the first letter
}