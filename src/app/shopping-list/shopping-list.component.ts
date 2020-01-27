import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {List, ListItem} from './list';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  lists: List[] = [];

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

  addList() {
    this.lists.push(new List('', [new ListItem('', 0)]));
  }

  addListItemOnEnter(event: any, listIndex) {
    if (event.keyCode === 13) {
      this.lists[listIndex].items.push(new ListItem('', 0));
    }
  }

  addListItem(listIndex, itemIndex) {
    this.lists[listIndex].items.push(new ListItem('', 0));
  }

  removeListItem(listIndex, itemIndex) {
    this.lists[listIndex].items.splice(itemIndex, 1);
  }

  addOrRemoveListItemQuantity(quantity, listIndex, itemIndex) {
    if (quantity === -1 && !this.lists[listIndex].items[itemIndex].quantity) {
      return;
    }
    this.lists[listIndex].items[itemIndex].quantity = this.lists[listIndex].items[itemIndex].quantity + parseInt(quantity, 10);
  }

  removeList(listIndex) {
    this.lists.splice(listIndex, 1);
  }
}
