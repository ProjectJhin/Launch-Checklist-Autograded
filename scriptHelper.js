// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   document.getElementById("missionTarget").innerHTML = `<h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">
   `
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";
    } else {
        return "Is a Number";
    } 
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) != "Not a Number" || validateInput(copilot) != "Not a Number" || validateInput(Number(fuelLevel)) != "Is a Number" || validateInput(Number(cargoLevel)) != "Is a Number") {
        //window.alert("Valid Input Required");
    } else {   
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        document.getElementById("faultyItems").style = "visibility: visible";
        if (Number(fuelLevel) < 10000 && Number(cargoLevel) > 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
        } else if (Number(fuelLevel) >= 10000 && Number(cargoLevel) > 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
        } else if (Number(fuelLevel) < 10000 &&  Number(cargoLevel) <= 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
        } else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
            document.getElementById("launchStatus").style.color = "green";
        }
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await (await fetch("https://handlers.education.launchcode.org/static/planets.json")).json()
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
