import { CartItem } from "app/Models/Cart/cart-item.model";
import { MenuItem } from "app/Models/Menu/menu-item.model";

export class ShoppingCartService {

    items: CartItem[] = [];

    clear(): void {
        this.items = [];
    }

    addItem(item: MenuItem): void {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        if (foundItem) {
            foundItem.quantity++;
        } else {
            this.items.push(new CartItem(item));
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    public total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);

    }
}