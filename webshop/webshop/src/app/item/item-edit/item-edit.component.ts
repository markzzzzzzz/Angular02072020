import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  editItemForm: FormGroup;
  item: Item;
  id: number;

  constructor(private itemService: ItemService, 
    private route: ActivatedRoute, 
    private router: Router,
    private toastService: ToastService,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
    })

    this.item = this.itemService.getItem(this.id);
    console.log(this.item);

   
   this.initForm();
  }
  initForm() {
  this.editItemForm = new FormGroup({
    title: new FormControl(this.item.title),
    price: new FormControl(this.item.price),
    imgSrc: new FormControl(this.item.imgSrc),
    category: new FormControl(this.item.category),
 });
}

  onSubmit(form: FormGroup) {
    // console.log(form);
    // console.log(form.value);
    // console.log(form.value.title)
    // console.log(form.value["price"]);
    // this.router.navigateByUrl("/item/viewall")
  

    let updatedItem = new Item(
      form.value.imgSrc,
      form.value.title,
      form.value.price,
      form.value.category,
      true
    )

    this.toastService.success(this.translate.instant('Item changed'));
    this.itemService.updateItem(this.id, updatedItem);

    setTimeout(()=>{
      this.router.navigateByUrl("/item/viewall");
    }, 3000)

  //   this.router.navigate("..", {relativeTo: this.route})
   }
}
