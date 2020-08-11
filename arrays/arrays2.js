var isikukood = "39487558723"

var gender = isikukood.split("")[0];
var manOrWoman;

if (gender == 3) {
  console.log("mees");
} else {
  console.log("naine");
}

manOrWoman = gender == 3 ? 'MAN' : "WOMAN";
console.log(manOrWoman);


var numbrid = [1,2,4,8]
numbrid = numbrid.map(number => number*2);

document.getElementById("numbers").innerHTML = numbrid;


var people = [
  {nimi: "Madis", age: 45},
  {nimi: "Kati", age: 25},
  {nimi: "Pille", age: 35},
  {nimi: "Gustav", age: 65},
];

ageArray = people.map(human => ({name: human.name, age: 2020-human.age}));
console.log(ageArray);
