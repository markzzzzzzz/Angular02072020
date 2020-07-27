import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carsArray: {brand: string, name: string, picture: string}[] = [];
  titleText = 'Cars angular';



  onSubmitForm(form: NgForm) {

    let car = form.value;
    this.carsArray.push(car);
  }

  onDeleteCars(i) {
    this.carsArray.splice(i,1)


    }
  }

