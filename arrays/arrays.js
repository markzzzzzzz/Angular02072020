
var vehicles = [
  {type: "car", price: "$1000"},
  {type: "motorcycle", price: "$2000"},
  {type: "car", price: "$3000"},
  {type: "motorcycle", price: "$1000"},
  {type: "car", price: "$2000"},
  {type: "bus", price: "$1500"},
];

vehicles.forEach(vehicle => {
  document.getElementById("vehicles").
  innerHTML += vehicle.type + "<br>"
});

var vehicleTypes = vehicles.map(vehicle => vehicle.type);


vehicleTypes.forEach(vehicle => {
  // document.getElementById("vehicles").
  // innerHTML += vehicle.type + "<br>"
});

var uniqueItems = [];

vehicleTypes.filter((type, i, types)=>{
  if(types.indexOf(type)==i) {
    uniqueItems.push(type);
  }
});

console.log(uniqueItems);

var vehiclePrices = vehicles.map(vehicle => (Number)(vehicle.price.split("$")[1]));

console.log(vehiclePrices);
