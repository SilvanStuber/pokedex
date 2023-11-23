async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    let response = await fetch(url);
    let responseAtJson = await response.json();

    console.log(responseAtJson)
}