import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  catsArray: {breed: string, name: string, picture: string}[] = [];
  titleText = 'forms';
  number: number;
  randomNumbers = [];

  onSubmitForm(form: NgForm) {
    // console.log(form); terve vorm
    // console.log(form.value); vormi kõik väärtused
    // console.log(form.value.breed); konkreetne väärtus vormist

    var cat = form.value;
    this.catsArray.push(cat)
  }

  onGenerate() {
    this.number = Math.ceil (Math.random() * (99 - 10) + 10);
    this.randomNumbers.push(this.number);
  }

  onDelete(i) {
    this.randomNumbers.splice(i,1);
  }

}


