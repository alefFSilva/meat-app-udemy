import { Routes } from "@angular/router";
import { HomeComponent } from "app/Components/Home/home.component";
import { AboutComponent } from "app/Components/About/about.component";
import { RestaurantsComponent } from "app/Components/Restaurants/restaurants.component";
import { RestaurantInfoComponent } from "app/Components/Restaurants/info/restaurant-info.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'restaurants', component: RestaurantsComponent},
    { path: 'restaurants/:id', component: RestaurantInfoComponent}

]