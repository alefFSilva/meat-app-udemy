import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { MenuItem } from "app/Models/Menu/menu-item.model";
import { RestaurantsService } from "app/Services/Restaurants/restaurant.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
    selector: 'menu-item-component',
    templateUrl: 'menu-item.component.html'
})
export class MenuItemComponent{

    @Input() menuItem: MenuItem;
    @Output() add = new EventEmitter();

    public emitAddEvent(): void{
        this.add.emit(this.menuItem);
    }
}