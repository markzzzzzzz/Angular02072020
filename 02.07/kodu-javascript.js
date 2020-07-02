console.log("Javascript ühendatud HTMLga");

// document - käib läbi HTMLi
document.getElementById("hello");
console.log(document.getElementById("hello"));

// logime välja konsooli hello HTML elemendi
console.log(document.getElementById("hello"))

// paneme eraldi muutujasse. var = variable
var helloHtmlElement = document.getElementById("hello");

//täpselt sama väljalogimise nagu ülal
console.log(helloHtmlElement);

helloHtmlElement.innerHTML = "Tere tulemast"

//innerHTMLiga muudame HTMLi sisest väärtust

helloHtmlElement.innerHTML = "Tere tulemast";
//Teeme sama asja mis üleval (prindime välja)
var clockHtmlElement = document.getElementById("clock");
console.log(clockHtmlElement);

// massiiv / list. Elemendid hakkavad 0-st. Täidame ise muutuja andmetega (enne funktsioonide kaudu)
var estonianMonths = ["undefined","jaanuar","veebruat","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"];
var estonianWeekdays = ["esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev","pühapäev"];
console.log(estonianMonths[7]);

updateClock();
setInterval(updateClock, 1000);

function updateClock () {
    //uus kuupäev
    var date = new Date();
clockHtmlElement.innerHTML = date;

// muutujasse paneme date. funktsiooniga saadud vastused
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var dayOfWeek = date.getDay()-1;
var hour = date.getHours();
var minute = date.getMinutes();
if(minute<10) {
    console.log("väiksem kui -10");
} else {
    console.log("suurem kui-10");    
}


var seconds = date.getSeconds();
if (seconds<10) {
    seconds = "0" + seconds;
}

// sisestame HTMLi
clockHtmlElement.innerHTML = "<b>" + estonianWeekdays[dayOfWeek] + "</b></br>" + year + " : " + estonianMonths[month] + ", " + day + "<br>" 
                + hour + ":" + minute + ":" + seconds;



// Kontrollime, et on olemas
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(dayOfWeek);
// console.log(hour);
// console.log(minute);
// console.log(seconds);
}