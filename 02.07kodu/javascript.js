console.log("Javascript ühendatud HTMLga");

// document - käib läbi HTMLi
document.getElementById("hello");

// logime välja konsooli hello HTML elemendi
console.log(document.getElementById("hello"));

// paneme eraldi muutujasse. var = variable
var helloHtmlElement = document.getElementById("hello");

// täpselt sama väljalogimine nagu ülal
console.log(helloHtmlElement);

// innerHTMLiga muudame HTMLi sisest väärtust
helloHtmlElement.innerHTML = "Tere tulemast";


// teeme sama asja mis üleval (prindime välja)
var clockHtmlElement = document.getElementById("clock");
console.log(clockHtmlElement);

// massiiv / list. Elemendid hakkavad 0-st. Täidame ise muutuja andmetega (enne funktsioonide kaudu)
var estonianMonths = ["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"];
var estonianWeekdays = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev"];

console.log(estonianMonths[6]);

updateClock();
setInterval(updateClock, 1000);

function updateClock() {
    // uus kuupäev
    var date = new Date();
    clockHtmlElement.innerHTML = date;

    // muutujatesse paneme date. funktsiooniga saadud vastused
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var dayOfWeek = date.getDay()-1;
    var hour = date.getHours();
    if (hour<10) {
        hour = "0" + hour;
    }

    var minute = date.getMinutes();
    if (minute<10) {
        minute = "0" + minute;
    } 

    var second = date.getSeconds();
    if (second<10) {
        second = "0" + second;
    } 

    // sisestame HTMLi
    clockHtmlElement.innerHTML = "<b>" + estonianWeekdays[dayOfWeek] + "</b><br>" + year + " : " + estonianMonths[month] + ", " + day + "<br>" 
    + hour + ":" + minute + ":" + second;

    // kontrollime, et on olemas
    // console.log(year);
    // console.log(month);
    // console.log(day);
    // console.log(dayOfWeek);
    // console.log(hour);
    // console.log(minute);
    // console.log(second);
}