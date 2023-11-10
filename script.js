// Write your JavaScript code here!

window.addEventListener("load", function() {

    document.getElementById("inputForm").addEventListener("submit", function(event) {
        let list = [];
        formSubmission(document, list, document.getElementsByName("pilotName")[0].value, document.getElementsByName("copilotName")[0].value, document.getElementsByName("fuelLevel")[0].value, document.getElementsByName("cargoMass")[0].value);
    });
    debugger;
    let listedPlanets = myFetch();
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = listedPlanets;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let ans = pickPlanet(listedPlanets);
        addDestinationInfo(document, ans.name, ans.diameter, ans.star, ans.distance, ans.moons, ans.image);
    })
    
 });
