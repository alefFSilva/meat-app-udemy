import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { RestaurantsService } from "app/Services/Restaurants/restaurant.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'review-component',
    templateUrl: 'reviews.component.html'
})
export class ReviewsComponent implements OnInit {
    private restaurantService: RestaurantsService;
    private activatedRoute: ActivatedRoute;
    reviews: Observable<any>;

    constructor(restaurantService: RestaurantsService,
        activatedRoute: ActivatedRoute) {
        this.restaurantService = restaurantService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit(): void {
        const restaurantId = this.activatedRoute.parent.snapshot.params['id'];
        this.reviews = this.restaurantService.getRestaurantsReviews(restaurantId);
    }
}