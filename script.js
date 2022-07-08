// // // Write your JavaScript code here!

// //const { addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
    response.json().then( function(json) {
        let div = document.getElementById('missionTarget');
          let random = Math.floor((Math.random() * json.length)+ 0);

          div.innerHTML =
          `
          <h2>Mission Destination</h2>
          <ol>
              <li>Name: ${json[Number(random)].name} </li>
              <li>Diameter: ${json[Number(random)].diameter}</li>
              <li>Star: ${json[Number(random)].star}</li><li>Distance from Earth: ${json[Number(random)].distance}</li><li>Number of Moons: ${json[Number(random)].moons} </li></>
          </ol>
          <img src="${json[Number(random)].image}">`;

       });
        //event.preventDefault();
//     })
// })

//     // formsubmission function below

     //formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        let form = document.querySelector("form");
        form.addEventListener('submit', function(event){
         event.preventDefault();

//     //      //DOM elements here
         let pilotName = document.querySelector('input[name=pilotName]');
         //let pilotValue = pilotInput.value;
         let coPilotName = document.querySelector('input[name=coPilotName]');
         let fuelLevel = document.querySelector('input[name=fuelLevel]');
         let cargoMass = document.querySelector('input[name=cargoMass]');

         let faultyItems = document.querySelector('input[name=faultyItems]');
         let pilotStatus = document.querySelector('input[name=pilotStatus]');
         let copilotStatus = document.querySelector('input[name=coPilotStatus]');
         let fuelStatus = document.querySelector('input[name=fuelStatus]');
         let launchStatus = document.querySelector('input[name=launchStatus]');
         formSubmission();
        });

    })

})

//      // let submitBtn = document.getElementById('formSubmit');
//      // submitBtn.addEventListener('click', function(){

// alert windows values for elements

// stop call formsubmission

// load event listener

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);

      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let selectedPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.moons,
        selectedPlanet.image
      );
    });

  let list = document.getElementById("faultyItems");
  list.style.visibility = "hidden";
  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;

    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotInput.value;

    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelInput.value);

    let cargoInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = Number(cargoInput.value);

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
});
