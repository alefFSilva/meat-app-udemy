import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from "@angular/common/http"
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component'
import { HeaderComponent } from './Components/Header/header.component';
import { HomeComponent } from './Components/Home/home.component';
import { AboutComponent } from './Components/About/about.component';
import { ROUTES } from './Routes/app.route';
import { RestaurantsComponent } from './Components/Restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './Components/Restaurants/Details/restaurantsDetails.component';
import { RestaurantsService } from './Services/Restaurants/restaurant.service';
import { RestaurantInfoComponent } from './Components/Restaurants/info/restaurant-info.component';
import { MenuComponent } from './Components/Restaurants/Menu/menu.component';
import { ShoppingCartComponent } from './Components/Restaurants/ShoppingCart/shopping-cart.component';
import { MenuItemComponent } from './Components/Restaurants/Menu/MenuItem/menu-Item.component';
import { ReviewsComponent } from './Components/Restaurants/Reviews/reviews.component';
import { ShoppingCartService } from './Services/ShoppingCart/shopping-cart.service';
import { OrderComponent } from './Components/Order/order.component';
import { InputContainer } from './Components/Shared/Input/input-container';
import { RadioComponent } from './Components/Shared/Radio/radio-component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantDetailsComponent,
    RestaurantInfoComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,

    InputContainer,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ RestaurantsService, ShoppingCartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
