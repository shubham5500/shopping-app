import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {List, ListItem} from './list';
import {StorageService} from '../../shared/storage.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  lists: List[] = [];

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.lists = StorageService.getItem('lists');
  }

  addList() {
    this.lists.push(new List('', [new ListItem('', 0)]));
    StorageService.setItem('lists', this.lists);
  }

  addListItemOnEnter(event: any, listIndex) {
    if (event.keyCode === 13) {
      this.lists[listIndex].items.push(new ListItem('', 0));
      StorageService.setItem('lists', this.lists);
    }
  }

  addListItem(listIndex, itemIndex) {
    this.lists[listIndex].items.push(new ListItem('', 0));
    StorageService.setItem('lists', this.lists);
  }

  removeListItem(listIndex, itemIndex) {
    this.lists[listIndex].items.splice(itemIndex, 1);
    StorageService.setItem('lists', this.lists);
  }

  addOrRemoveListItemQuantity(quantity, listIndex, itemIndex) {
    if (quantity === -1 && !this.lists[listIndex].items[itemIndex].quantity) {
      return;
    }
    this.lists[listIndex].items[itemIndex].quantity = this.lists[listIndex].items[itemIndex].quantity + parseInt(quantity, 10);
    StorageService.setItem('lists', this.lists);
  }

  removeList(listIndex) {
    this.lists.splice(listIndex, 1);
    StorageService.setItem('lists', this.lists);
  }
}
