async function init() {
  renderLoadScreen();
  document.getElementById("pokedex").innerHTML = ``;
  await generateImportPokemon();
  renderInputField();
  renderContent();
  renderLoadMoreButton();
}

async function renderContent() {
  renderLoadScreen();
  for (let i = startPokemon; i < amountPokemon; i++) {
    await renderCard(i);
  }
  renderCloseLoadScreen();
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

async function renderCard(i) {
  await generateImportData(i);
  document.getElementById("pokedex").innerHTML += generateCard(i);
  loadPokemon(i);
  renderBackgroundColor(i);
  renderNamePokemon(i);
  renderIdPokemon(i);
  renderImagePokemon(i);
  renderType(i);
}

async function searchPokemon() {
  emptyArray();
  renderLoadButton();
  document.getElementById("pokedex").innerHTML = generateLoadScreenSearch();
  searchInputNumber = +document.getElementById("inputField").value;
  searchInputText = document.getElementById("inputField").value;
  document.getElementById("pokedex").innerHTML = "";
  if (searchInputNumber) {
    if (searchInputNumber < 1011) {
      await renderCard(searchInputNumber);
    } else {
      notFound();
    }
  } else {
    if (!theLanguageIsGerman) {
      await generateSearchTextInputgEnglish(searchInputText);
    } else {
      await generateSearchTextInputgGerman(searchInputText);
    }
  }
}

function notFound() {
  renderCloseLoadScreenSearch();
  if (!theLanguageIsGerman) {
    document.getElementById("pokedex").innerHTML = "not found :(";
  } else {
    document.getElementById("pokedex").innerHTML = "nicht gefunden :(";
  }
}

function doNotClose(event) {
  event.stopPropagation();
}

function emptyArray() {
  typeFromPokemon = [];
  apiLabels = [];
  apiData = [];
  resultSearchPokemon = [];
  startPokemon = 1;
  amountPokemon = 30;
}

function errorFunction() {
  console.log("not available");
}

function renderNextPokemon() {
  startPokemon = startPokemon + 29;
  amountPokemon = amountPokemon + 29;
  renderLoadScreen();
  renderContent();
}

function renderLoadScreen() {
  document.getElementById("loadScreen").innerHTML = generateLoadScreen();
  document.body.style.overflow = "hidden";
}

function renderCloseLoadScreen() {
  document.body.style.overflow = "";
  document.getElementById("loadScreen").innerHTML = "";
}

function renderLoadScreenSearch() {
  document.getElementById("loadScreenSearch").innerHTML = generateLoadScreenSearch();
}

function renderCloseLoadScreenSearch() {
  document.getElementById("loadScreenSearch").innerHTML = "";
}

function renderInputField() {
  document.getElementById("inputFieldContainer").innerHTML = generateInputField();
}

function renderLoadButton() {
  document.getElementById("buttonLoadPokemon").innerHTML = generateLoadButton();
}

function renderLoadMoreButton() {
  document.getElementById("buttonLoadPokemon").innerHTML = generateLoadMoreButton();
}

async function renderPopUpCard(id) {
  await generateImportData(id);
  loadPokemon(id);
  document.getElementById("popUpCard").innerHTML = generatePopUpCard(id);
  document.getElementById("descriptionContainerPopUpCard").innerHTML = generateAboutSectionPopUpCard(id);
  renderNamePokemonPopUpCard(id);
  renderIdPokemonPopUpCard(id);
  renderTypePopUpCard(id);
  renderImagePokemonPopUpCard(id);
  renderBackgroundColorPopUpCard(id);
  renderSelectionPopUpCard(id);
  renderAboutPopUpCard(id);
}

function closePopUpCard() {
  document.getElementById("popUpCard").innerHTML = ``;
}

function renderPreviousPokemonPopUpCard(id) {
  if (id < 2) {
    id = 1010;
  } else {
    id--;
  }
  renderPopUpCard(id);
}

function renderNextPokemonPopUpCard(id) {
  if (id > 1009) {
    id = 1;
  } else {
    id++;
  }
  renderPopUpCard(id);
}

function renderEnglish() {
  emptyArray();
  theLanguageIsGerman = false;
  init();
}

function renderGerman() {
  emptyArray();
  theLanguageIsGerman = true;
  init();
}

function renderNamePokemon(id) {
  document.getElementById(`namePokemon${id}`).innerHTML = nameFromPokemon;
}

function renderNamePokemonPopUpCard() {
  document.getElementById("pokemonNamePopUpCard").innerHTML = nameFromPokemon;
}

function renderIdPokemon(id) {
  document.getElementById(`idPokemon${id}`).innerHTML = `#${currentIdPokemon["id"]}`;
}

function renderIdPokemonPopUpCard() {
  document.getElementById("idPokemonPopUpCard").innerHTML = `#${currentIdPokemon["id"]}`;
}

function renderType(id) {
  document.getElementById(`typePokemon${id}`).innerHTML = ``;
  for (let i = 0; i < typeFromPokemon.length; i++) {
    let type = typeFromPokemon[i];
    document.getElementById(`typePokemon${id}`).innerHTML += `<span class="type-pokemon-text">${type}</span>`;
  }
}

function renderTypePopUpCard() {
  document.getElementById("typePokemonPopUpCard").innerHTML = ``;
  for (let i = 0; i < typeFromPokemon.length; i++) {
    let type = typeFromPokemon[i];
    document.getElementById("typePokemonPopUpCard").innerHTML += `<span class="type-pokemon-text">${type}</span>`;
  }
}

function renderBackgroundColor(id) {
  document.getElementById(`pokemonCard${id}`).style = backgroundColor;
}

function renderBackgroundColorPopUpCard() {
  document.getElementById("headContainerPopUpCard").style = backgroundColor;
}
function renderImagePokemon(id) {
  document.getElementById(`pokemonImage${id}`).src = currentIdPokemon["sprites"]["other"]["official-artwork"]["front_default"];
}

function renderImagePokemonPopUpCard() {
  document.getElementById("pokemonImagePopUpCard").src = currentIdPokemon["sprites"]["other"]["official-artwork"]["front_default"];
}

function renderSelectionPopUpCard() {
  if (!theLanguageIsGerman) {
    document.getElementById("aboutSelectionPopUpCard").innerHTML = "About";
    document.getElementById("statsSelectionPopUpCard").innerHTML = "Base Stats";
    document.getElementById("evolutionSelectionPopUpCard").innerHTML = "Evolution";
  } else {
    document.getElementById("aboutSelectionPopUpCard").innerHTML = "Über";
    document.getElementById("statsSelectionPopUpCard").innerHTML = "Basiswerte";
    document.getElementById("evolutionSelectionPopUpCard").innerHTML = "Entwicklung";
  }
}

function renderRemoveSelectionCSS() {
  document.getElementById("aboutSelectionPopUpCard").classList.remove("border-bottom");
  document.getElementById("statsSelectionPopUpCard").classList.remove("border-bottom");
  document.getElementById("evolutionSelectionPopUpCard").classList.remove("border-bottom");
}

function renderAboutPopUpCard() {
  document.getElementById("habitatContainerPopUpCard").classList.remove("d-none");
  document.getElementById("aboutSelectionPopUpCard").classList.add("border-bottom");
  renderDescriptionAbout();
  renderGeneraPokemonPopUpCard();
  renderHeightPokemonPopUpCard();
  renderWeightPokemonPopUpCard();
  renderHabitatPopUpCard();
  renderExperiencePokemonPopUpCard();
}

function renderStatsPopUpCard() {
  renderRemoveSelectionCSS();
  document.getElementById("statsSelectionPopUpCard").classList.add("border-bottom");
  document.getElementById("descriptionContainerPopUpCard").innerHTML = "";
  document.getElementById("descriptionContainerPopUpCard").innerHTML = generateStatsPopUpCard();
  renderChart();
}

function renderEvolutionPopUpCard() {
  renderRemoveSelectionCSS();
  document.getElementById("evolutionSelectionPopUpCard").classList.add("border-bottom");
  document.getElementById("descriptionContainerPopUpCard").innerHTML = "";
  document.getElementById("descriptionContainerPopUpCard").innerHTML = generateEvolutionSectionPopUpCard();
  if (evolutionOfThePokemon["chain"]["evolves_to"]["0"]) {
    generateEvolutionStep1();
    generateEvolutionStep2();
    generateEvolutionStep3();
  } else {
    renderNoEvolution();
  }
}

function renderNoEvolution() {
  document.getElementById("arrowEvolution1PopUpCard").classList.add("d-none");
  document.getElementById("arrowEvolution2PopUpCard").classList.add("d-none");
  if (!theLanguageIsGerman) {
    document.getElementById("noEvolutionPopUpCard").innerHTML = `<b> The Pokemon does not evolve </b>`;
  } else {
    document.getElementById("noEvolutionPopUpCard").innerHTML = `<b> Das Pokemon entwickelt sich nicht </b>`;
  }
}

function renderGeneraPokemonPopUpCard() {
  document.getElementById("genraPokemonPopUpCard").innerHTML = generaOfThePokemon;
}

function renderDescriptionAbout() {
  if (!theLanguageIsGerman) {
    document.getElementById("generaDescriptionPopUpCard").innerHTML = "Species";
    document.getElementById("heightDescriptionPopUpCard").innerHTML = "Height";
    document.getElementById("weightDescriptionPopUpCard").innerHTML = "Weight";
    document.getElementById("habitatDescriptionPopUpCard").innerHTML = "Habitat";
    document.getElementById("experienceDescriptionPopUpCard").innerHTML = "Experience";
  } else {
    document.getElementById("generaDescriptionPopUpCard").innerHTML = "Spezies";
    document.getElementById("heightDescriptionPopUpCard").innerHTML = "Höhe";
    document.getElementById("weightDescriptionPopUpCard").innerHTML = "Gewicht";
    document.getElementById("habitatDescriptionPopUpCard").innerHTML = "Lebensraum";
    document.getElementById("experienceDescriptionPopUpCard").innerHTML = "Erfahrung";
  }
}

function renderHeightPokemonPopUpCard() {
  document.getElementById("heightMeterPopUpCard").innerHTML = `${heightFromPokemonMeter} m`;
  document.getElementById("heightFootPopUpCard").innerHTML = `${heightFromPokemonootFoot} ft`;
}

function renderWeightPokemonPopUpCard() {
  document.getElementById("weightKilogramPopUpCard").innerHTML = `${weightFromPokemonKilogram} kg`;
  document.getElementById("weightPoundPopUpCard").innerHTML = `${weightFromPokemonootPound} lbs`;
}

function renderHabitatPopUpCard() {
  if (!specificationsOfThePokemon["habitat"]) {
    document.getElementById("habitatContainerPopUpCard").classList.add("d-none");
  } else {
    document.getElementById("habitatContainerPopUpCard").classList.remove("d-none");
    document.getElementById("habitatPokemonPopUpCard").innerHTML = habitatFromPokemon;
  }
}

function renderExperiencePokemonPopUpCard() {
  if (!currentIdPokemon["base_experience"]) {
    document.getElementById("experienceContainerPopUpCard").classList.add("d-none");
  } else {
    document.getElementById("experienceContainerPopUpCard").classList.remove("d-none");
    document.getElementById("experiencePokemonPopUpCard").innerHTML = `${currentIdPokemon["base_experience"]} exp`;
  }
}

function renderChart() {
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: apiLabels,
      datasets: [
        {
          label: "",
          axis: "y",
          data: apiData,
          fill: false,
          backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
