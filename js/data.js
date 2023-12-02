////////////////render functions are located in the script.js file and the generation functions and global variables in the data.js file////////////////

let url;
let urlFromSpecies;
let currentPokemon;
let nameUrlFromPokemon;
let specificationsOfThePokemon;
let nameFromPokemon;
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
let theLanguageIsGerman = true;
let apiLabels = [];
let apiData = [];
let evolutionOfThePokemon;
let evolutionStep2;
let evolutionStep3;

async function generateImportFromAPI(id) {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  currentPokemon = await generateJSON(url);
  generateUrlNamePokemon();
  let urlFromSpecies = `https://pokeapi.co/api/v2/pokemon-species/${nameUrlFromPokemon}`;
  specificationsOfThePokemon = await generateJSON(urlFromSpecies);
  let urlFromEvolution = specificationsOfThePokemon["evolution_chain"]["url"];
  evolutionOfThePokemon = await generateJSON(urlFromEvolution);
  console.log("evolution_chain", evolutionOfThePokemon);
}

function generateUrlNamePokemon() {
  nameUrlFromPokemon = currentPokemon["name"];
}

function generateNamePokemon() {
  if (theLanguageIsGerman === false) {
    nameFromPokemon = specificationsOfThePokemon["names"]["8"]["name"];
  } else {
    nameFromPokemon = specificationsOfThePokemon["names"]["5"]["name"];
  }
}

function generateGeneraPokemon() {
  if (theLanguageIsGerman === false) {
    generaOfThePokemon = specificationsOfThePokemon["genera"]["7"]["genus"];
  } else {
    generaOfThePokemon = specificationsOfThePokemon["genera"]["4"]["genus"];
  }
}

function generateHeightPokemon() {
  heightFromPokemonMeter = currentPokemon["height"] / 10;
  heightFromPokemonootFoot = (heightFromPokemonMeter * 3.281).toFixed(1);
}

function generateWeightPokemon() {
  weightFromPokemonKilogram = currentPokemon["weight"] / 10;
  weightFromPokemonootPound = (weightFromPokemonKilogram * 2.205).toFixed(1);
}

async function generateJSON(url) {
  let response = await fetch(url);
  return (currentJSON = await response.json());
}

function generateBackgroundColor() {
  backgroundColorFromPokemon = specificationsOfThePokemon["color"]["name"];
  if (backgroundColorFromPokemon === "white") {
    backgroundColor = `background-color: rgb(165, 196, 243);`;
  }
  if (backgroundColorFromPokemon === "red") {
    backgroundColor = `background-color: rgb(251,108,108);`;
  }
  if (backgroundColorFromPokemon === "green") {
    backgroundColor = `background-color: rgb(72,207,177);`;
  }
  if (backgroundColorFromPokemon === "blue") {
    backgroundColor = `background-color: rgb(118,189,254);`;
  }
  if (backgroundColorFromPokemon === "brown") {
    backgroundColor = `background-color: rgb(137,80,48);`;
  }
  if (backgroundColorFromPokemon === "yellow") {
    backgroundColor = `background-color: rgb(255,216,111);`;
  }
  if (backgroundColorFromPokemon === "gray") {
    backgroundColor = `background-color: rgb(102, 103, 106);`;
  }
  if (backgroundColorFromPokemon === "purple") {
    backgroundColor = `background-color: rgb(65,5,114);`;
  }
  if (backgroundColorFromPokemon === "pink") {
    backgroundColor = `background-color: rgb(247,102,173);`;
  }
  if (backgroundColorFromPokemon === "black") {
    backgroundColor = `background-color: rgb(0,0,0);`;
  }
}

function generateType() {
  typeFromPokemon = [];
  for (let i = 0; i < currentPokemon["types"].length; i++) {
    const typePokemon = currentPokemon["types"][i]["type"]["name"];
    if (theLanguageIsGerman === false) {
      let type = typePokemon.charAt(0).toUpperCase() + typePokemon.slice(1);
      typeFromPokemon.push(type);
    } else {
      if (typePokemon === "normal") {
        typeFromPokemon.push("Normal");
      }
      if (typePokemon === "fighting") {
        typeFromPokemon.push("Kampf");
      }
      if (typePokemon === "flying") {
        typeFromPokemon.push("Flug");
      }
      if (typePokemon === "poison") {
        typeFromPokemon.push("Gift");
      }
      if (typePokemon === "ground") {
        typeFromPokemon.push("Boden");
      }
      if (typePokemon === "rock") {
        typeFromPokemon.push("Gestein");
      }
      if (typePokemon === "bug") {
        typeFromPokemon.push("Käfer");
      }
      if (typePokemon === "ghost") {
        typeFromPokemon.push("Geist");
      }
      if (typePokemon === "steel") {
        typeFromPokemon.push("Stahl");
      }
      if (typePokemon === "fire") {
        typeFromPokemon.push("Feuer");
      }
      if (typePokemon === "water") {
        typeFromPokemon.push("Wasser");
      }
      if (typePokemon === "grass") {
        typeFromPokemon.push("Pflanze");
      }
      if (typePokemon === "electric") {
        typeFromPokemon.push("Elektro");
      }
      if (typePokemon === "psychic") {
        typeFromPokemon.push("Psycho");
      }
      if (typePokemon === "ice") {
        typeFromPokemon.push("Eis");
      }
      if (typePokemon === "dragon") {
        typeFromPokemon.push("Drache");
      }
      if (typePokemon === "dark") {
        typeFromPokemon.push("Unlicht");
      }
      if (typePokemon === "fairy") {
        typeFromPokemon.push("Fee");
      }
      if (typePokemon === "unknown") {
        typeFromPokemon.push("Unbekannt");
      }
      if (typePokemon === "shadow") {
        typeFromPokemon.push("Schatten");
      }
    }
  }
}

function generateHabitat() {
  if (!specificationsOfThePokemon["habitat"]) {
    console.log("habitat not available");
  } else {
    habitatPokemon = specificationsOfThePokemon["habitat"]["name"];
    if (theLanguageIsGerman === false) {
      let habitat = habitatPokemon.charAt(0).toUpperCase() + habitatPokemon.slice(1);
      habitatFromPokemon = habitat;
    } else {
      if (habitatPokemon === "cave") {
        habitatFromPokemon = `Höhle`;
      }
      if (habitatPokemon === "forest") {
        habitatFromPokemon = `Wald`;
      }
      if (habitatPokemon === "grassland") {
        habitatFromPokemon = `Wiese`;
      }
      if (habitatPokemon === "mountain") {
        habitatFromPokemon = `Berge`;
      }
      if (habitatPokemon === "rare") {
        habitatFromPokemon = `selten`;
      }
      if (habitatPokemon === "rough-terrain") {
        habitatFromPokemon = `unebenes Gebiet`;
      }
      if (habitatPokemon === "sea") {
        habitatFromPokemon = `Meer`;
      }
      if (habitatPokemon === "urban") {
        habitatFromPokemon = `Stadt`;
      }
      if (habitatPokemon === "waters-edge") {
        habitatFromPokemon = `Gewässerrand`;
      }
    }
  }
}

function generateCard(id) {
  return /*html*/ `  <div id="pokemonCard${id}" onclick="renderPopUpCard(${id})" class="pokemon-card">
  <div class="description-container">
    <b id="namePokemon${id}" class="name-pokemon"></b>
    <b id="idPokemon${id}" class="id-pokemon"></b>
    <div id="typePokemon${id}" class="type-pokemon"></div>
  </div>
  <div>
    <img id="pokemonImage${id}" class="pokemon-image" />
  </div>`;
}

function generatePopUpCard(id) {
  return /*html*/ `
  <div class="pop-up-card-container" onclick="closePopUpCard()">
     <img onclick="closePopUpCard()" src="./img/cross.png" alt="cross" class="close-cross-pop-up-card">
     
     <div onclick="doNotClose(event)" class="pop-up-card">
      <div id="headContainerPopUpCard">
        <div class="head-line-container">
          <h1 id="pokemonNamePopUpCard"></h1>
          <h1 id="idPokemonPopUpCard"></h1>
        </div>
        <div>
          <div id="typePokemonPopUpCard"></div>
        </div>
        <div class="image-container">  
          <img id="pokemonImagePopUpCard" />    
        </div>
      </div>
      <div class="info-container">
      <div class="arrow-pop-up-container">
      <img onclick="renderPreviousPokemon(${id})" id="arrowLeftPopUpCard" src="./img/arrowleft.png" alt="arrowleft" class="arrow-left-pop-up-card">
      <img onclick="renderNextPokemon(${id})" id="arrowRightPopUpCard" src="./img/arrowright.png" alt="arrowright" class="arrow-right-pop-up-card">
      </div>
      <div class="card-selection-container">
          <b onclick="renderPopUpCard(${id})" id="aboutSelectionPopUpCard" class="selection-text"></b>
          <b onclick="renderStatsPopUpCard()" id="statsSelectionPopUpCard" class="selection-text"></b>
          <b onclick="renderEvolutionPopUpCard()" id="evolutionSelectionPopUpCard" class="selection-text"></b>
        </div>
        <div id="descriptionContainerPopUpCard" class="description-container-pop-up-card"></div>
      </div>
    </div>
    
  </div> `;
}

function generateAboutSectionPopUpCard() {
  return /*html*/ `
    <div class="about-text">
        <b id="generaDescriptionPopUpCard" class="bold-text"></b>
        <span id="genraPokemonPopUpCard"></span>
      </div>
      <div class="about-text">
        <b id="heightDescriptionPopUpCard" class="bold-text"></b>
        <span id="heightMeterPopUpCard"></span>
        <span id="heightFootPopUpCard"></span>
      </div>
      <div class="about-text">
        <b id="weightDescriptionPopUpCard" class="bold-text"></b>
        <span id="weightKilogramPopUpCard"></span>
        <span id="weightPoundPopUpCard"></span>
      </div>
      <div id="habitatContainerPopUpCard" class="about-text">
        <b id="habitatDescriptionPopUpCard" class="bold-text"></b>
        <span id="habitatPokemonPopUpCard"></span>
      </div>
      <div id="experienceContainerPopUpCard" class="about-text">
        <b id="experienceDescriptionPopUpCard" class="bold-text"></b>
        <span id="experiencePokemonPopUpCard"></span>
      </div>
  `;
}

function generateDataChart() {
  apiLabels = [];
  apiData = [];
  for (let i = 0; i < currentPokemon["stats"].length; i++) {
    let labelsFromAPI = currentPokemon["stats"][i]["stat"]["name"];
    let dataFromAPI = currentPokemon["stats"][i]["base_stat"];
    if (theLanguageIsGerman === false) {
      let labels = labelsFromAPI.charAt(0).toUpperCase() + labelsFromAPI.slice(1);
      apiLabels.push(labels);
    } else {
      if (labelsFromAPI === "hp") {
        apiLabels.push("Lebenspunkte");
      }
      if (labelsFromAPI === "attack") {
        apiLabels.push("Attacke");
      }
      if (labelsFromAPI === "defense") {
        apiLabels.push("Verteidigung");
      }
      if (labelsFromAPI === "special-attack") {
        apiLabels.push("Spezialangriff");
      }
      if (labelsFromAPI === "special-defense") {
        apiLabels.push("Spezialverteidigung");
      }
      if (labelsFromAPI === "speed") {
        apiLabels.push("Geschwindigkeit");
      } else {
        console.log("Stats not available");
      }
    }
    apiData.push(dataFromAPI);
  }
}

function generateStatsPopUpCard() {
  return /*html*/ `
   <div>
      <canvas id="myChart"></canvas>
   </div>`;
}

function generateEvolutionSectionPopUpCard() {
  return /*html*/ `
     <div  id="noEvolutionPopUpCard" class="evolution-container">
      <div class="evolution-pokemon-container">
        <img id="imgStep1PopUpCard" class="img-evolution">
        <b id="textStep1PopUpCard"></b>
      </div>
      <img id="arrowEvolution1PopUpCard" src="./img/arrowright.png" alt="arrowright" class="arrow-evolution">
      <div class="evolution-pokemon-container">
        <img id="imgStep2PopUpCard" class="img-evolution">
        <b id="textStep2PopUpCard"></b>
      </div>
        <img id="arrowEvolution2PopUpCard" src="./img/arrowright.png" alt="arrowright" class="arrow-evolution">
      <div class="evolution-pokemon-container">
        <img id="imgStep3PopUpCard" class="img-evolution">
        <b id="textStep3PopUpCard"></b>
      </div>
    </div> 
 `;
}

async function generateEvolutionStep1() {
  let urlPokemonStep1 = evolutionOfThePokemon["chain"]["species"]["url"];
  let pokemonStep1 = await generateJSON(urlPokemonStep1);
  let idPokemonStep1 = pokemonStep1["id"];
  let urlIdStep1 = `https://pokeapi.co/api/v2/pokemon/${idPokemonStep1}/`;
  let currentPokemonStep1 = await generateJSON(urlIdStep1);
  let imageFromPokemonStep1 = currentPokemonStep1["sprites"]["other"]["dream_world"]["front_default"];
  if (imageFromPokemonStep1) {
    document.getElementById("imgStep1PopUpCard").src = imageFromPokemonStep1;
  } else {
    document.getElementById("imgStep1PopUpCard").src = currentPokemonStep1["sprites"]["other"]["home"]["front_default"];
  }
  if (theLanguageIsGerman === false) {
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
  let imageFromPokemonStep2 = currentPokemonStep2["sprites"]["other"]["dream_world"]["front_default"];
  if (imageFromPokemonStep2) {
    document.getElementById("imgStep2PopUpCard").src = imageFromPokemonStep2;
  } else {
    document.getElementById("imgStep2PopUpCard").src = currentPokemonStep2["sprites"]["other"]["home"]["front_default"];
  }
  if (theLanguageIsGerman === false) {
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
    let imageFromPokemonStep3 = currentPokemonStep3["sprites"]["other"]["dream_world"]["front_default"];
    if (imageFromPokemonStep3) {
      document.getElementById("imgStep3PopUpCard").src = imageFromPokemonStep3;
    } else {
      document.getElementById("imgStep3PopUpCard").src = currentPokemonStep3["sprites"]["other"]["home"]["front_default"];
    }
    if (theLanguageIsGerman === false) {
      document.getElementById("textStep3PopUpCard").innerHTML = pokemonStep3["names"]["8"]["name"] + `<div class="id-pokemon-evolution">#${idPokemonStep3}</div>`;
    } else {
      document.getElementById("textStep3PopUpCard").innerHTML = pokemonStep3["names"]["5"]["name"] + `<div class="id-pokemon-evolution">#${idPokemonStep3}</div>`;
    }
  }
}
