import { Component, Input, OnInit } from "@angular/core";
import { Restaurant } from "app/Models/Restaurant/restaurant.model";
import { RestaurantsService } from "app/Services/Restaurants/restaurant.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'restaurant-details-component',
    templateUrl: 'restaurant-details-component.html'
})
export class RestaurantDetailsComponent implements OnInit{
    
    @Input()
    restaurant: Restaurant;
    
    ngOnInit(): void {
       console.log(this.restaurant);
    }

}
