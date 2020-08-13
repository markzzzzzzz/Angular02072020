import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-all',
  templateUrl: './item-all.component.html',
  styleUrls: ['./item-all.component.css']
})
export class ItemAllComponent implements OnInit {
  items: Item[];
  selectedCategory: string;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    console.log(this.items);
  }

  onInactive(i) {
    // this.items[i]["visible"] = !this.items[i]["visible"]
    this.itemService.changeVisibleState(i);
    this.items = this.itemService.getItems();
  }

}
