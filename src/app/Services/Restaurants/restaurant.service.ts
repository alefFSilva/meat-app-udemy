import { Restaurant } from "app/Models/Restaurant/restaurant.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MEAT_API } from "app/API Constants/app.api";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { ErroHandler } from "app/ErrorHandler/erro-handler";
import { errorHandler } from "@angular/platform-browser/src/browser";
import { MenuItem } from "app/Models/Menu/menu-item.model";

@Injectable()
export class RestaurantsService {

    private httpClient: HttpClient;

    constructor( httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public getRestaurants(): Observable<Restaurant[]> {
        return this.httpClient.get<Restaurant[]>(`${MEAT_API}/restaurants`)
        .pipe(
            catchError(ErroHandler.errorHandler)
        );
    }

    public getRestaurantById(restaurantId: string): Observable<Restaurant>{
        return this.httpClient.get<Restaurant>(`${MEAT_API}/restaurants/${restaurantId}`)
        .pipe(
            catchError(ErroHandler.errorHandler)
        );
    }

    public getRestaurantsReviews(id: string): Observable<Restaurant>{
        return this.httpClient.get<Restaurant>(`${MEAT_API}/restaurants/${id}/reviews`)
        .pipe( catchError(ErroHandler.errorHandler));
    };

    public getMenuOfRestaurants(id: string): Observable<MenuItem[]>{
        return this.httpClient.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
        .pipe( catchError(ErroHandler.errorHandler));
    }
}
