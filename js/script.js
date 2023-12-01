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
  renderAboutSelectionPopUpCard();
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

function renderAboutSelectionPopUpCard() {
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
  renderRemoveCSS();
  document.getElementById("aboutSelection").classList.add("border-bottom");
  renderDescriptionAbout();
  renderGeneraPokemonPopUpCard();
  renderHeightPokemonPopUpCard();
  renderWeightPokemonPopUpCard();
  renderHabitatPopUpCard();
  renderExperiencePokemonPopUpCard();
}

function renderStatsPopUpCard() {
  renderRemoveCSS();
  document.getElementById("statsSelection").classList.add("border-bottom");
  document.getElementById("descriptionContainer").innerHTML = "";
  document.getElementById("descriptionContainer").innerHTML = generateStatsPopUpCard();
  renderChart();
}

function renderEvolutionPopUpCard() {
  renderRemoveCSS();
  document.getElementById("evolutionSelection").classList.add("border-bottom");
  document.getElementById("descriptionContainer").innerHTML = "";
  generateEvolutionStep1();
  generateEvolutionStep2();
  generateEvolutionStep3();
  
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
  renderRemoveCSS();
  if (!specificationsOfThePokemon["habitat"]) {
    document.getElementById("habitatContainer").classList.add("d-none");
  } else {
    document.getElementById("habitatPokemon").innerHTML = habitatFromPokemon;
  }
}

function renderExperiencePokemonPopUpCard() {
  renderRemoveCSS();
  if (!currentPokemon["base_experience"]) {
    document.getElementById("experienceContainer").classList.add("d-none");
  } else {
    experienceFromPokemon = currentPokemon["base_experience"];
    document.getElementById("experiencePokemon").innerHTML = `${experienceFromPokemon} exp`;
  }
}

function renderRemoveCSS() {
  document.getElementById("aboutSelection").classList.remove("border-bottom");
  document.getElementById("statsSelection").classList.remove("border-bottom");
  document.getElementById("evolutionSelection").classList.remove("border-bottom");
  document.getElementById("habitatContainer").classList.remove("d-none");
}

function renderChart() {
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: apiLabels,
      datasets: [
        {
          label: "# of Votes",
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
