import { Restaurant } from "app/Models/Restaurant/restaurant.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MEAT_API } from "app/API Constants/app.api";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { ErroHandler } from "app/ErrorHandler/erro-handler";

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
}
