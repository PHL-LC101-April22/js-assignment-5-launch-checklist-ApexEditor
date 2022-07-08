// Write your helper functions here!
//import 'isomorphic-fetch';

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
//    let div = document.getElementById('missionTarget');
//    div.innerHTML = 
//    ` 
//                 <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: ${name}</li>
//                     <li>Diameter: ${diameter}</li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: ${distance} </li>
//                     <li>Number of Moons: ${moons}</li>
//                 </ol>
//                 <img src="${imageUrl}">
//    ` 
}

// ValidateInput function should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate


function validateInput(testInput) {
   if (testInput === Number) {
    return 'Is a Number';
    } else if (isNaN(testInput)=== true) {
        return 'Not a Number';
    } else if ( testInput === '') {
        return 'Empty';
    };
};

//FOrmSub function will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass.

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let form = document.querySelector('form');
   
    

    //DOM methods here
    let pilotName = document.querySelector('input[name=pilotName]');
    let coPilotName = document.querySelector('input[name=coPilotName]');
    //let fuelLevel = document.querySelector('input[name=fuelLevel]');
    let cargoMass = document.querySelector('input[name=cargoMass]');
    let faultyItems = document.querySelector('input[name=faultyItems]');

    // let submitBtn = document.getElementById('formSubmit');
    // submitBtn.addEventListener('click', function()){ 
       
    
        //Add validation to notify the user if they forgot to enter a value for any one of the fields.
        
        // window.addEventListener("load", function() {
        //     let form = document.querySelector("form");
        //     form.addEventListener("submit", function(event) {
            // event.preventDefault(); 
            console.log('Hello')
        if (validateInput(pilot) === 'Empty' || coPilotName.value === ' ' || fuelLevel.value === ' ' || cargoMass.value === ' ') {
            alert('All fields are REQUIRED!');
           
            
    
           if (isNan(pilotName.value) === false || isNaN(coPilotName.value) === false ){
                alert('Pilot Name is not valid please use appropriate letters');
                //event.preventDefault();

        //combine fuelLevel.value AND cargoMass.value with an OR operator
             }else if ((isNaN(fuelLevel.value)) === true || isNaN(cargoMass.value) === true){
                alert('Fuel level is not valid please use appropriate numbers');
                //event.preventDefault();
             }else if (isNaN(cargoMass.value)){
                alert('Cargo mass is not valid please use appropriate numbers');
                //event.preventDefault();
             } else {
               document.getElementById('pilotStatus').innerHTML == 'Pilot' + pilotName.value + 'Ready to launch';
               document.getElementById('coPilotStatus').innerHTML == 'coPilot' + coPilotName.value + 'Ready to launch';
               if (fuelLevelInput.value <= 10000) {
                   document.getElementById("faultyItems").style.visibility = "visible";
                   document.getElementById('launchStatus').innerHTML = "Shuttle not ready to launch";
                   document.getElementById('launchStatus').style.color = "red";
                   document.getElementById('fuelStatus').innerHTML = "Fuel level too low to launch";

               } else { 
                   document.getElementById("fuelStatus").innerHTML = "Fuel level high enough to launch";
               }
               if (cargoMassInput.value >= 10000) {
                   document.getElementById("faultyItems").style.visibility = "visible";
                   document.getElementById("launchStatus").innerHTML = "Shuttle not Ready to launch";
                   document.getElementById("launchStatus").style.color = "red";
                   document.getElementById("cargoStatus").innerHTML = "Cargo mass too high to launch";
                } else {
                   document.getElementById("cargoStatus").innerHTML = "Cargo mass too low to launch";
                }
                if (cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000) {
                   document.getElementById("launchStatus").innerHTML = "Shuttle Ready to Launch";
                   document.getElementById("launchStatus").style.color = "green";
                   document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough to launch";
                   document.getElementById("faultyItems").style.visibility = "not visable";
                }
                
             formSubmission();
         }
    
        }
    }
    
 
// Fetch below here
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor((Math.random() * planets.length));
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;