import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
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
    form.reset();
  }

  onGenerate() {
    this.number = Math.ceil (Math.random() * (99 - 10) + 10);
    this.randomNumbers.push(this.number);
  }

  onDeleteCat(i) {
    this.catsArray.splice(i,1);
  }

  onDelete(i) {
    this.randomNumbers.splice(i,1);
  }


}
