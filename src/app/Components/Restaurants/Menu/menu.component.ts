import { Component } from "@angular/core";
import { RestaurantsService } from "app/Services/Restaurants/restaurant.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { MenuItem } from "app/Models/Menu/menu-item.model";

@Component({
    selector: 'menu-component',
    templateUrl: 'menu.component.html'
})
export class MenuComponent{
    private restaurantService: RestaurantsService;
    private activatedRoute: ActivatedRoute;
    menuItems: Observable<MenuItem[]>;

    constructor(restaurantService: RestaurantsService,
        activatedRoute: ActivatedRoute) {
        this.restaurantService = restaurantService;
        this.activatedRoute = activatedRoute;
    }

    ngOnInit(): void {
        const restaurantId = this.activatedRoute.parent.snapshot.params['id'];
        this.menuItems = this.restaurantService.getMenuOfRestaurants(restaurantId);
    }

}