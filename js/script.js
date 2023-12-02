////////////////render functions are located in the script.js file and the generation functions and global variables in the data.js file////////////////

function init() {
  document.getElementById("pokedex").innerHTML = ``;
  renderCard();
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

async function renderCard() {
  for (let i = 995; i < 1001; i++) {
    await generateImportFromAPI(i);
    document.getElementById("pokedex").innerHTML += generateCard(i);
    loadPokemon(i);
    renderBackgroundColor(i);
    renderNamePokemon(i);
    renderIdPokemon(i);
    renderImagePokemon(i);
    renderType(i);
  }
}

async function renderPopUpCard(id) {
  await generateImportFromAPI(id);
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
  if (id > 1){
    document.getElementById("arrowLeftPopUpCard").classList.remove("d-none"); 
  } else {
    document.getElementById("arrowLeftPopUpCard").classList.add("d-none"); 
  }
}

function closePopUpCard() {
  document.getElementById("popUpCard").innerHTML = ``;
}

function renderPreviousPokemon(id) {
    id--
    renderPopUpCard(id) 
}

function renderNextPokemon(id) {
 id++
 renderPopUpCard(id)
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

function emptyArray() {
  typeFromPokemon = [];
  apiLabels = [];
  apiData = [];
}

function renderNamePokemon(id) {
  document.getElementById(`namePokemon${id}`).innerHTML = nameFromPokemon;
}

function renderNamePokemonPopUpCard() {
  document.getElementById("pokemonNamePopUpCard").innerHTML = nameFromPokemon;
}

function renderIdPokemon(id) {
  document.getElementById(`idPokemon${id}`).innerHTML = `#${currentPokemon["id"]}`;
}

function renderIdPokemonPopUpCard() {
  document.getElementById("idPokemonPopUpCard").innerHTML = `#${currentPokemon["id"]}`;
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
  let imageFromPokemon = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  if (imageFromPokemon) {
    document.getElementById(`pokemonImage${id}`).src = imageFromPokemon;
  } else {
    document.getElementById(`pokemonImage${id}`).src = currentPokemon["sprites"]["other"]["home"]["front_default"];
  }
}

function renderImagePokemonPopUpCard() {
  let imageFromPokemon = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  if (imageFromPokemon) {
    document.getElementById("pokemonImagePopUpCard").src = imageFromPokemon;
  } else {
    document.getElementById("pokemonImagePopUpCard").src = currentPokemon["sprites"]["other"]["home"]["front_default"];
  }
}

function renderSelectionPopUpCard() {
  if (theLanguageIsGerman === false) {
    document.getElementById("aboutSelectionPopUpCard").innerHTML = "About";
    document.getElementById("statsSelectionPopUpCard").innerHTML = "Base Stats";
    document.getElementById("evolutionSelectionPopUpCard").innerHTML = "Evolution";
  } else {
    document.getElementById("aboutSelectionPopUpCard").innerHTML = "Über";
    document.getElementById("statsSelectionPopUpCard").innerHTML = "Basiswerte";
    document.getElementById("evolutionSelectionPopUpCard").innerHTML = "Entwicklung";
  }
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
  if (theLanguageIsGerman === false) {
    document.getElementById("noEvolutionPopUpCard").innerHTML = `<b> The Pokemon does not evolve </b>`;
  } else {
    document.getElementById("noEvolutionPopUpCard").innerHTML = `<b> Das Pokemon entwickelt sich nicht </b>`;
  }
}

function renderGeneraPokemonPopUpCard() {
  document.getElementById("genraPokemonPopUpCard").innerHTML = generaOfThePokemon;
}

function renderDescriptionAbout() {
  if (theLanguageIsGerman === false) {
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
  if (!currentPokemon["base_experience"]) {
    document.getElementById("experienceContainerPopUpCard").classList.add("d-none");
  } else {
    document.getElementById("experienceContainerPopUpCard").classList.remove("d-none");
    document.getElementById("experiencePokemonPopUpCard").innerHTML = `${currentPokemon["base_experience"]} exp`;
  }
}

function renderRemoveSelectionCSS() {
  document.getElementById("aboutSelectionPopUpCard").classList.remove("border-bottom");
  document.getElementById("statsSelectionPopUpCard").classList.remove("border-bottom");
  document.getElementById("evolutionSelectionPopUpCard").classList.remove("border-bottom");
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

function  doNotClose(event) {
  event.stopPropagation();
 }
