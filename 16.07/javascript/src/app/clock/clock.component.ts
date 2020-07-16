import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    document.getElementById("hello");
    var helloHtmlElement =document.getElementById("hello")
    helloHtmlElement.innerHTML = "Tere tulemast";
    var clockHtmlElement = document.getElementById("clock");
    var estonianMonths = ["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"];
    var estonianWeekdays = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev"];
   
       
    updateClock();
    setInterval(updateClock, 1000);
    
    function updateClock() {
        var date = new Date();
        clockHtmlElement.innerHTML = date.toDateString();
    
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var dayOfWeek = date.getDay()-1;
        var hour = date.getHours();
        if (hour<10) {
            hour = (Number) ("0" + hour);
        }
    
        var minute = date.getMinutes();
        if (minute<10) {
            minute = (Number) ("0" + minute);
        } 
    
        var second = date.getSeconds();
        if (second<10) {
            second = (Number) ("0" + second);
        } 
    
        clockHtmlElement.innerHTML = "<b>" + estonianWeekdays[dayOfWeek] + "</b><br>" + year + " : " + estonianMonths[month] + ", " + day + "<br>" 
        + hour + ":" + minute + ":" + second;
    
  }
  }

}

