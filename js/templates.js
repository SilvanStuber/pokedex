function generateInputField() {
  if (!theLanguageIsGerman) {
    return /*html*/ ` 
          <button onclick="renderFavouritesCard()" class="my-pokemon-button" enable>My captured Pokémon</button>
          <form onsubmit="event.preventDefault(); searchPokemon();">
            <input type="text" id="inputField" placeholder="Enter name or ID" required>
            <button class="search-button">Search</button>
          </form>
          <button onclick="renderImpressum()" class="impressum-button">Legal Notice</button>
          `;
  } else {
    return /*html*/ ` 
      <button onclick="renderFavouritesCard()" class="my-pokemon-button">Meine gefangenen Pokémone</button>
      <form onsubmit="event.preventDefault(); searchPokemon();" enable>
        <input type="text" id="inputField" placeholder="Name oder ID eingeben">
        <button class="search-button">Suchen</button>
      </form>
      <button onclick="renderImpressum()" class="impressum-button">Impressum</button>
      `;
  }
}

function generateResponsiveButton() {
  return /*html*/ ` 
  <button onclick="renderFavouritesCard()" class="my-pokemon-button-responsive" enable>
    <img src="./img/pokemonball.png" alt="pokemonball" class="img-button-responsive">
  </button>
  <button onclick="renderImpressum()" class="impressum-button-responsive">
    <img src="./img/impressum.png" alt="impressum" class="img-button-responsive">
  </button>
  `;
}

function generateImpressum() {
  if (!theLanguageIsGerman) {
    return /*html*/ `
        <div class="impressum">
          <h1 class="impressum-headline">Legal Notice</h1>
          <p class="impressum-text">
            Silvan Stuber<br />
            Bernstrasse 46<br />
            3267 Seedorf
           </p>
          <h2 class="second-headline-impressum">Contact</h2>
          <a class="link-impressum" href="mailto:silvan.stuber1@gmail.com"
           >E-Mail: silvan.stuber1@gmail.com</a>
          <h2 class="second-headline-impressum">The icons comes from</h2>
          <a class="link-impressum" href="https://logomakr.com/" rel="nofollow" target="_blank">logomakr</a>
          <h2 class="second-headline-impressum">The data comes from PokeAPI</h2>
          <a class="link-impressum" href="https://pokeapi.co//" rel="nofollow" target="_blank">PokeAPI</a>
        </div>
    `;
  } else {
    return /*html*/ `
    <div class="impressum">
      <h1 class="impressum-headline">Impressum</h1>
      <p class="impressum-text">
        Silvan Stuber<br />
        Bernstrasse 46<br />
        3267 Seedorf
      </p>
      <h2 class="second-headline-impressum">Kontakt</h2>
      <a class="link-impressum" href="mailto:silvan.stuber1@gmail.com">E-Mail: silvan.stuber1@gmail.com</a>
      <h2 class="second-headline-impressum">Die Icons stammen von</h2>
      <a class="link-impressum" href="https://logomakr.com/" rel="nofollow" target="_blank">logomakr</a>
      <h2 class="second-headline-impressum">Die Daten stammen von PokeAPI</h2>
      <a class="link-impressum" href="https://pokeapi.co//" rel="nofollow" target="_blank">PokeAPI</>
    </div>
    `;
  }
}

function generateTextFavouritesEmpty() {
  if (!theLanguageIsGerman) {
    return /*htmal*/ `<b class="text-favourites-empty">You have not yet caught a Pokémon. A grey Pokéball will appear next to each Pokémon in your Pokédex. Click on it to catch a Pokémon and the ball will turn colourful. If you click on a coloured ball, you release the Pokémon and the ball turns grey again. You can find all the Pokémon you have caught in the "My captured Pokémon" section of your Pokédex.</b>`;
  } else {
    return /*htmal*/ `<b class="text-favourites-empty">Du hast noch kein Pokémon gefangen. In deinem Pokédex wird bei jedem Pokémon ein grauer Pokéball angezeigt. Klicke darauf, um ein Pokémon zu fangen, dann wird der Ball bunt. Wenn du auf einen bunten Ball klickst, lässt du das Pokémon frei und der Ball wird wieder grau. Alle deine gefangenen Pokémon findest du im Bereich "Meine gefangenen Pokémone" in deinem Pokédex.</b>`;
  }
}

function generateLoadButton() {
  if (!theLanguageIsGerman) {
    return /*htmal*/ `<button onclick="init()" class="load-button">Load Pokémon</button>`;
  } else {
    return /*htmal*/ `<button onclick="init()" class="load-button">Pokémon laden</button>`;
  }
}

function generateLoadMoreButton() {
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
    <img onclick="doNotCloseOrOpen(event), toFavorites(${id})" id="favouriteButtonCard${id}" alt="pokemonball" class="favourite-button" >
    <div>
      <img id="pokemonImage${id}" class="pokemon-image" />
    </div>`;
}

function generatePopUpCard(id) {
  return /*html*/ `
    <div class="pop-up-card-container" onclick="closePopUpCard()">
       <img onclick="closePopUpCard()" src="./img/cross.png" alt="cross" class="close-cross-pop-up-card">
       <div onclick="doNotCloseOrOpen(event)" class="pop-up-card">
        <div id="headContainerPopUpCard">
          <div class="head-line-container">
            <h1 id="pokemonNamePopUpCard"></h1>
            <h1 id="idPokemonPopUpCard"></h1>
            <img onclick="toFavoritesPopUpCard(${id})" id="favouriteButtonCardPupUpCard${id}" alt="pokemonball" class="favourite-button-pup-up-card" >
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
        <div id="evolutionStep1" class="evolution-pokemon-container">     
        </div>
        <img id="arrowEvolution1PopUpCard" src="./img/arrowright.png" alt="arrowright" class="arrow-evolution">
        <div id="evolutionStep2" class="evolution-pokemon-container">
        </div>
          <img id="arrowEvolution2PopUpCard" src="./img/arrowright.png" alt="arrowright" class="arrow-evolution">
        <div id="evolutionStep3" class="evolution-pokemon-container">
        </div>
      </div> 
   `;
}

function generateEvolutionStepContent(imagePokemonStep, namePokemonPopUpCard, idPokemonStep) {
  return /*html*/ `
  <div onclick="renderPopUpCard(${idPokemonStep})">
   <img src="${imagePokemonStep}" class="img-evolution">
   <div class="id-name-pokemon-evolution ">
     <b>${namePokemonPopUpCard}</b>
     <b>#${idPokemonStep}</b>
   </div>
   </div>
  `;
}
