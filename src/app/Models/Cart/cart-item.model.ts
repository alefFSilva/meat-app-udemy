import { MenuItem } from "../Menu/menu-item.model";

export class CartItem {
    public menuItem: MenuItem;
    public quantity: number;


    constructor(menuItem: MenuItem, quantity = 1) {
        this.menuItem = menuItem;
        this.quantity = quantity;
    }

    public value(): number {
        return this.menuItem.price * this.quantity;
    }
}