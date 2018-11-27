import { Routes } from "@angular/router";
import { HomeComponent } from "app/Components/Home/home.component";
import { AboutComponent } from "app/Components/About/about.component";
import { RestaurantsComponent } from "app/Components/Restaurants/restaurants.component";
import { RestaurantInfoComponent } from "app/Components/Restaurants/info/restaurant-info.component";
import { MenuComponent } from "app/Components/Restaurants/Menu/menu.component";
import { ReviewsComponent } from "app/Components/Restaurants/Reviews/reviews.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'restaurants', component: RestaurantsComponent},
    { path: 'restaurants/:id', component: RestaurantInfoComponent,
            children: [
                { path: '', redirectTo: 'menu', pathMatch: 'full'},
                { path: 'menu', component: MenuComponent},
                { path: 'reviews', component: ReviewsComponent }
            ]
        }
];
