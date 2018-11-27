import { Component, OnInit } from "@angular/core";
import { RestaurantsService } from "app/Services/Restaurants/restaurant.service";
import { ActivatedRoute } from "@angular/router";
import { Restaurant } from "app/Models/Restaurant/restaurant.model";

@Component({
    selector: 'restaurant-info',
    templateUrl: 'restaurant-info.component.html'
})
export class RestaurantInfoComponent implements OnInit {
    private restauranteService: RestaurantsService;
    private activatedRoute: ActivatedRoute;
    private restaurant: Restaurant;

    constructor(restaurantService: RestaurantsService, activatedRoute: ActivatedRoute){
        this.restauranteService = restaurantService;
        this.activatedRoute = activatedRoute;
    }

    ngOnInit(): void {
        this.restauranteService.getRestaurantById(this.activatedRoute.snapshot.params['id'])
        .subscribe( (restaurant) => {
            this.restaurant = restaurant;
        });
    }

}