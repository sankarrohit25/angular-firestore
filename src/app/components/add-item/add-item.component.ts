import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from '../../models/item';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description: ''
  }
  constructor(private is:ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.item.title != '' && this.item.description != ''){
      this.is.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
    }
  }

}
