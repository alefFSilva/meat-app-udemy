import { Component, OnInit } from "@angular/core";
import { Restaurant } from "app/Models/Restaurant/restaurant.model";
import { RestaurantsService } from "app/Services/Restaurants/restaurant.service";

@Component({
    selector: 'restaurants-component',
    templateUrl: 'restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

    private restaurantsServices: RestaurantsService;
    public restaurants: Restaurant[] = [];

    constructor(restaurantsServices: RestaurantsService) {
        this.restaurantsServices = restaurantsServices;
    }

    ngOnInit(): void {
        this.restaurantsServices.getRestaurants()
            .subscribe(restaurantsResponse => {
                this.restaurants = restaurantsResponse;
            });
    }

}