function generateInputField() {
    if (!theLanguageIsGerman) {
        return /*html*/ ` 
          <form onsubmit="event.preventDefault(); searchPokemon();">
            <input type="text" id="inputField" placeholder="Pokémon names in English or the Pokémon ID" required>
            <button>Search</button>
          </form>`;
    } else {
    return /*html*/ ` 
      <form onsubmit="event.preventDefault(); searchPokemon();">
        <input type="text" id="inputField" placeholder="Pokémon-Namen auf Englisch oder die Pokémon-Id">
        <button>Suchen</button>
      </form>`;
    }
}


function generateLoadButton() {
  if (!theLanguageIsGerman) {
    return /*htmal*/ `<button onclick="renderNextPokemon()" class="load-button">Load more Pokémon</button>`;
  } else {
    return /*htmal*/ `<button onclick="renderNextPokemon()" class="load-button">Weitere Pokémon laden</button>`;
  }
}

function generateLoadScreen() {
  let textLoadin;
  if (!theLanguageIsGerman) {
    textLoadin = "Pokémon are loaded...";
  } else {
    textLoadin = "Pokémon werden geladen...";
  }
  return /*html*/ `
    <div class="loader-container" id="loadScreen">
    <img src="./img/pokemonball.png" alt="pokemonball">
    <b>${textLoadin}</b>
    <div class="loader"></div>
    </div>
    `;
}

function generateLoadScreenSearch() {
  let textLoadin;
  if (!theLanguageIsGerman) {
    textLoadin = "Pokémon are loaded...";
  } else {
    textLoadin = "Pokémon werden geladen...";
  }
  return /*html*/ `
    <div class="loader-search-container" id="loadScreen">
    <img src="./img/pokemonball.png" alt="pokemonball">
    <b>${textLoadin}</b>
    <div class="loader"></div>
    </div>
    `;
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
        <img onclick="renderPreviousPokemonPopUpCard(${id})" id="arrowLeftPopUpCard" src="./img/arrowleft.png" alt="arrowleft" class="arrow-left-pop-up-card">
        <img onclick="renderNextPokemonPopUpCard(${id})" id="arrowRightPopUpCard" src="./img/arrowright.png" alt="arrowright" class="arrow-right-pop-up-card">
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
