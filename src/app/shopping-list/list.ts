export class List {
  constructor(public listName: string,
              public items: Array<ListItem>) {
    this.listName = listName;
    this.items = items;
  }
}

export class ListItem {
  constructor(public itemName: string,
              public quantity: number) {
    this.itemName = itemName;
    this.quantity = quantity;
  }
}
