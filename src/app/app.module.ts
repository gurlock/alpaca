import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddOrderDashboardComponent } from './add-order-dashboard/add-order-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    OrderDashboardComponent,
    OrderDetailsComponent,
    AddOrderDashboardComponent,
    NotFoundComponent,
    RegisterComponent,
    OrderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
