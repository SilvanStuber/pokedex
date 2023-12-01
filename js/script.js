////////////////render functions are located in the script.js file and the generation functions and global variables in the data.js file////////////////

async function loadPokemon() {
  await generateImportFromAPI();
  generateNamePokemon();
  generateGeneraPokemon();
  generateType();
  generateBackgroundColor();
  generateGeneraPokemon();
  generateHeightPokemon();
  generateWeightPokemon();
  generateHabitat();
  generateDataChart();
  console.log("Loaded loadPokemon", currentPokemon);
  console.log(specificationsOfThePokemon);
  renderPopUpCard();
}

function renderPopUpCard() {
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

function renderNamePokemonPopUpCard() {
  document.getElementById("pokemonName").innerHTML = nameFromPokemon;
}

function renderIdPokemonPopUpCard() {
  document.getElementById("idFromPokemon").innerHTML = `#${currentPokemon["id"]}`;
}

function renderTypePopUpCard() {
  document.getElementById("typePokemon").innerHTML = ``;
  for (let i = 0; i < typeFromPokemon.length; i++) {
    let type = typeFromPokemon[i];
    document.getElementById("typePokemon").innerHTML += `<span class="type-pokemon-text">${type}</span>`;
  }
}

function renderBackgroundColorPopUpCard() {
  document.getElementById("headContainer").style = backgroundColor;
}

function renderImagePokemonPopUpCard() {
  let imageFromPokemon = currentPokemon["sprites"]["other"]["dream_world"]["front_default"];
  if (imageFromPokemon) {
    document.getElementById("pokemonImage").src = imageFromPokemon;
  } else {
    document.getElementById("pokemonImage").src = currentPokemon["sprites"]["other"]["home"]["front_default"];
  }
}

function renderSelectionPopUpCard() {
  if (theLanguageIsGerman === false) {
    document.getElementById("aboutSelection").innerHTML = "About";
    document.getElementById("statsSelection").innerHTML = "Base Stats";
    document.getElementById("evolutionSelection").innerHTML = "Evolution";
  } else {
    document.getElementById("aboutSelection").innerHTML = "Über";
    document.getElementById("statsSelection").innerHTML = "Basiswerte";
    document.getElementById("evolutionSelection").innerHTML = "Entwicklung";
  }
}

function renderAboutPopUpCard() {
  document.getElementById("habitatContainer").classList.remove("d-none");
  document.getElementById("aboutSelection").classList.add("border-bottom");
  renderDescriptionAbout();
  renderGeneraPokemonPopUpCard();
  renderHeightPokemonPopUpCard();
  renderWeightPokemonPopUpCard();
  renderHabitatPopUpCard();
  renderExperiencePokemonPopUpCard();
}

function renderStatsPopUpCard() {
  renderRemoveSelectionCSS();
  document.getElementById("statsSelection").classList.add("border-bottom");
  document.getElementById("descriptionContainer").innerHTML = "";
  document.getElementById("descriptionContainer").innerHTML = generateStatsPopUpCard();
  renderChart();
}

function renderEvolutionPopUpCard() {
  renderRemoveSelectionCSS();
  document.getElementById("evolutionSelection").classList.add("border-bottom");
  document.getElementById("descriptionContainer").innerHTML = "";
  document.getElementById("descriptionContainer").innerHTML = generateEvolutionSectionPopUpCard();
  if (evolutionOfThePokemon["chain"]["evolves_to"]["0"]) {
    generateEvolutionStep1();
    generateEvolutionStep2();
    generateEvolutionStep3();
  } else {
    renderNoEvolution();
  }
}

function renderNoEvolution() {
  document.getElementById("arrowEvolution1").classList.add("d-none");
  document.getElementById("arrowEvolution2").classList.add("d-none");
  if (theLanguageIsGerman === false) {
    document.getElementById("noEvolution").innerHTML = `<b> The Pokemon does not evolve </b>`;
  } else {
    document.getElementById("noEvolution").innerHTML = `<b> Das Pokemon entwickelt sich nicht </b>`;
  }
}

function renderGeneraPokemonPopUpCard() {
  document.getElementById("genraPokemon").innerHTML = generaOfThePokemon;
}

function renderDescriptionAbout() {
  if (theLanguageIsGerman === false) {
    document.getElementById("generaDescription").innerHTML = "Species";
    document.getElementById("heightDescription").innerHTML = "Height";
    document.getElementById("weightDescription").innerHTML = "Weight";
    document.getElementById("habitatDescription").innerHTML = "Habitat";
    document.getElementById("experienceDescription").innerHTML = "Experience";
  } else {
    document.getElementById("generaDescription").innerHTML = "Spezies";
    document.getElementById("heightDescription").innerHTML = "Höhe";
    document.getElementById("weightDescription").innerHTML = "Gewicht";
    document.getElementById("habitatDescription").innerHTML = "Lebensraum";
    document.getElementById("experienceDescription").innerHTML = "Erfahrung";
  }
}

function renderHeightPokemonPopUpCard() {
  document.getElementById("heightMeter").innerHTML = `${heightFromPokemonMeter} m`;
  document.getElementById("heightFoot").innerHTML = `${heightFromPokemonootFoot} ft`;
}

function renderWeightPokemonPopUpCard() {
  document.getElementById("weightKilogram").innerHTML = `${weightFromPokemonKilogram} kg`;
  document.getElementById("weightPound").innerHTML = `${weightFromPokemonootPound} lbs`;
}

function renderHabitatPopUpCard() {
  if (!specificationsOfThePokemon["habitat"]) {
    document.getElementById("habitatContainer").classList.add("d-none");
  } else {
    document.getElementById("habitatContainer").classList.remove("d-none");
    document.getElementById("habitatPokemon").innerHTML = habitatFromPokemon;
  }
}

function renderExperiencePokemonPopUpCard() {
  if (!currentPokemon["base_experience"]) {
    document.getElementById("experienceContainer").classList.add("d-none");
  } else {
    document.getElementById("experienceContainer").classList.remove("d-none");
    document.getElementById("experiencePokemon").innerHTML = `${currentPokemon["base_experience"]} exp`;
  }
}

function renderRemoveSelectionCSS() {
  document.getElementById("aboutSelection").classList.remove("border-bottom");
  document.getElementById("statsSelection").classList.remove("border-bottom");
  document.getElementById("evolutionSelection").classList.remove("border-bottom");
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
