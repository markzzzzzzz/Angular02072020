import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {
  transform(items: Item[]): Item[] {
    let uniqueItems: Item[] = [];
    
    items.filter((item, index, items)=>{;
      if (items.map(item => item.category).indexOf(item.category)==index) {
        uniqueItems.push(item);
      }
    });

    return uniqueItems;

  }

}
