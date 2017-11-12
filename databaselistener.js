let database = firebase.database();

database.ref("Users/CodeDayUser/gal_waterUsed").on("value", function(snapshot) {
	console.log(snapshot.val());
	var element = document.querySelector('#water');
	var repEl = document.createElement('p');
	repEl.id = "water";
	repEl.innerHTML = "Water Used: " + snapshot.val() + "Gallons";
	element.parentNode.replaceChild(repEl, element);

}, (error) => console.log(error));
console.log(document);

database.ref("Users/CodeDayUser/kWh_powerUsed").on("value", function(snapshot) {
	console.log(snapshot.val());
	var element = document.querySelector('#energy');
	var repEl = document.createElement('p');
	repEl.id = "energy";
	repEl.innerHTML = "Energy Used: " + snapshot.val() + "kWh";
	element.parentNode.replaceChild(repEl, element);

}, (error) => console.log(error));
console.log(document);

database.ref("Users/CodeDayUser/lb_wasteProduced").on("value", function(snapshot) {
	console.log(snapshot.val());
	var element = document.querySelector('#waste');
	var repEl = document.createElement('p');
	repEl.id = "wasteProduced";
	repEl.innerHTML = "Waste Produced: " + snapshot.val() + "lbs";
	element.parentNode.replaceChild(repEl, element);

}, (error) => console.log(error));


function power_Used(value){
 this.value = value;
}
