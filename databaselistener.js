let database = firebase.database();
//Electricity Used
database.ref("Users/CodeDayUser/Stats/Electricity/ElectricityUsed").on("value", function(snapshot) {
	console.log(snapshot.val());
	var element = document.querySelector('#elecUsed');
	var repEl = document.createElement('p');
	repEl.id = "elecUsed";
	repEl.innerHTML =  snapshot.val() + "Electricity Used";
	element.parentNode.replaceChild(repEl, element);

}, (error) => console.log(error));
//Recommended Usage
database.ref("Users/CodeDayUser/Stats/Electricity/RecommendedUsage").on("value", function(snapshot) {
	console.log(snapshot.val());
	var element = document.querySelector('#recUsed');
	var repEl = document.createElement('p');
	repEl.id = "recUsed";
	repEl.innerHTML =  snapshot.val() + "RecommendedUsage";
	element.parentNode.replaceChild(repEl, element);

}, (error) => console.log(error));
//Electricity Savings
database.ref("Users/CodeDayUser/Stats/Electricity/Savings").on("value", function(snapshot) {
	console.log(snapshot.val());
	var element = document.querySelector('#savingsElec');
	var repEl = document.createElement('p');
	repEl.id = "savingElec";
	repEl.innerHTML =  snapshot.val() + "Savings";
	element.parentNode.replaceChild(repEl, element);

}, (error) => console.log(error));
//Waste Produced
database.ref("Users/CodeDayUser/Stats/Electricity/ElectricityUsed").on("value", function(snapshot) {
	console.log(snapshot.val());
	var element = document.querySelector('#elecUsed');
	var repEl = document.createElement('p');
	repEl.id = "elecUsed";
	repEl.innerHTML =  snapshot.val() + "Electricity Used";
	element.parentNode.replaceChild(repEl, element);

}, (error) => console.log(error));
//Recommended Waste
database.ref("Users/CodeDayUser/Stats/Waste/RecommendedWaste").on("value", function(snapshot) {
	console.log(snapshot.val());
	var element = document.querySelector('#recWaste');
	var repEl = document.createElement('p');
	repEl.id = "recWaste";
	repEl.innerHTML =  snapshot.val() + "Recommended Waste";
	element.parentNode.replaceChild(repEl, element);

}, (error) => console.log(error));
//WaterUsed
database.ref("Users/CodeDayUser/Stats/Water/WaterUsed").on("value", function(snapshot) {
	console.log(snapshot.val());
	var element = document.querySelector('#waterUsed');
	var repEl = document.createElement('p');
	repEl.id = "waterUsed";
	repEl.innerHTML =  snapshot.val() + "Water Used";
	element.parentNode.replaceChild(repEl, element);

}, (error) => console.log(error));
//Recommended Water Usage
database.ref("Users/CodeDayUser/Stats/Water/RecommendedUsage").on("value", function(snapshot) {
	console.log(snapshot.val());
	var element = document.querySelector('#recWater');
	var repEl = document.createElement('p');
	repEl.id = "recWater";
	repEl.innerHTML =  snapshot.val() + "Recommended Water";
	element.parentNode.replaceChild(repEl, element);

}, (error) => console.log(error));
//Water Savings
database.ref("Users/CodeDayUser/Stats/Water/Savings").on("value", function(snapshot) {
	console.log(snapshot.val());
	var element = document.querySelector('#waterSavings');
	var repEl = document.createElement('p');
	repEl.id = "waterSavings";
	repEl.innerHTML =  snapshot.val() + "Water Savings";
	element.parentNode.replaceChild(repEl, element);

}, (error) => console.log(error));

