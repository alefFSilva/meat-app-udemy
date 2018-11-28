import { Component } from "@angular/core";
import { ShoppingCartService } from "app/Services/ShoppingCart/shopping-cart.service";

@Component({
    selector: 'shopping-cart-component',
    templateUrl: 'shopping-cart.component.html'
})
export class ShoppingCartComponent {

    private shoppingCartService: ShoppingCartService;

    constructor(shoppingCartService: ShoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    items(): any[] {
        return this.shoppingCartService.items;
    }

    public total(): number {
        return this.shoppingCartService.total();
    }

    public clear(): void {
        this.shoppingCartService.clear();
    }

    public addItem(item: any): void {
        this.shoppingCartService.addItem(item);
    }

    public removeItem(item: any): void {
        this.shoppingCartService.removeItem(item);
    }
}