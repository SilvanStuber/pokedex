let currentPokemon;
let nameFromPokemon;
let specificationsOfThePokemon;
let nameFromPokemonGerman;
let backgroundColor;


async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/15/`;
    currentPokemon = await generateJSON(url);
    generateNameFromPokemon();
    let urlFromSpecies = `https://pokeapi.co/api/v2/pokemon-species/${nameFromPokemon}`;
    specificationsOfThePokemon = await generateJSON(urlFromSpecies);
    generateNameOfPokemonInGerman();
    console.log('Loaded loadPokemon', currentPokemon);
    console.log(nameFromPokemon);
    console.log(specificationsOfThePokemon)
    renderPokemonInfo();
}

function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = nameFromPokemonGerman;
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('idFromPokemon').innerHTML = `#${currentPokemon['id']}`;
    document.getElementById('headContainer').style = generateBackgroundColor();
}

function generateNameFromPokemon() {
    nameFromPokemon = currentPokemon['name'];
}

function generateNameOfPokemonInGerman() {
    nameFromPokemonGerman = specificationsOfThePokemon['names']['5']['name'];
}

function generateBackgroundColor() {
    backgroundColor = specificationsOfThePokemon['color']['name'];
    console.log(backgroundColor);
    if (backgroundColor == 'white') {
        return `background-color: rgb(165, 196, 243);`
    }
    if (backgroundColor === 'red') {
        return `background-color: rgb(251,108,108);`
    }
    if (backgroundColor === 'green') {
        return `background-color: rgb(72,207,177);`
    }
    if (backgroundColor === 'blue') {
        return `background-color: rgb(118,189,254);`
    }
    if (backgroundColor === 'brown') {
        return `background-color: rgb(137,80,48);`
    }
    if (backgroundColor === 'yellow') {
        return `background-color: rgb(255,216,111);`
    } else {
        console.log('errorColor')
    }

}

async function generateJSON(url) {
    let response = await fetch(url);
    return currentJSON = await response.json();
}

