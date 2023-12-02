////////////////render functions are located in the script.js file and the generation functions and global variables in the data.js file////////////////


async function init() {
  await generateImportFromAPI();
  loadPokemon();
  renderBackgroundColor();
  renderNamePokemon();
  renderIdPokemon();
  renderImagePokemon();
  renderType();
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
  console.log("Loaded loadPokemon", currentPokemon);
  console.log(specificationsOfThePokemon);
}

function renderPopUpCard() {
  loadPokemon();
  document.getElementById("pokedex").innerHTML = generatePopUpCard();
  document.getElementById("descriptionContainer").innerHTML = generateAboutSectionPopUpCard();
  renderNamePokemonPopUpCard();
  renderIdPokemonPopUpCard();
  renderTypePopUpCard();
  renderImagePokemonPopUpCard();
  renderBackgroundColorPopUpCard();
  renderSelectionPopUpCard();
  renderAboutPopUpCard();
}

function renderEnglish() {
  emptyArray();
  theLanguageIsGerman = false;
  loadPokemon();
}

function renderGerman() {
  emptyArray();
  theLanguageIsGerman = true;
  loadPokemon();
}

function emptyArray() {
  typeFromPokemon = [];
}

function renderNamePokemon() {
  document.getElementById("namePokemon").innerHTML = nameFromPokemon;
}

function renderNamePokemonPopUpCard() {
  document.getElementById("pokemonNamePopUpCard").innerHTML = nameFromPokemon;
}

function renderIdPokemon() {
  document.getElementById("idPokemon").innerHTML = `#${currentPokemon["id"]}`;
}

function renderIdPokemonPopUpCard() {
  document.getElementById("idPokemonPopUpCard").innerHTML = `#${currentPokemon["id"]}`;
}

function renderType() {
  document.getElementById("typePokemon").innerHTML = ``;
  for (let i = 0; i < typeFromPokemon.length; i++) {
    let type = typeFromPokemon[i];
    document.getElementById("typePokemon").innerHTML += `<span class="type-pokemon-text">${type}</span>`;
  }
}

function renderTypePopUpCard() {
  document.getElementById("typePokemonPopUpCard").innerHTML = ``;
  for (let i = 0; i < typeFromPokemon.length; i++) {
    let type = typeFromPokemon[i];
    document.getElementById("typePokemonPopUpCard").innerHTML += `<span class="type-pokemon-text">${type}</span>`;
  }
}

function renderBackgroundColor() {
  document.getElementById("pokemonCard").style = backgroundColor;
}

function renderBackgroundColorPopUpCard() {
  document.getElementById("headContainerPopUpCard").style = backgroundColor;
}
function renderImagePokemon() {
  let imageFromPokemon = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  if (imageFromPokemon) {
    document.getElementById("pokemonImage").src = imageFromPokemon;
  } else {
    document.getElementById("pokemonImage").src = currentPokemon["sprites"]["other"]["home"]["front_default"];
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
