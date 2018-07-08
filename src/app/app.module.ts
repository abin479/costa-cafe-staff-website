import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { ViewOrdersService } from './services/view-orders.service';
import { ViewOrderDetailsComponent } from './components/view-order-details/view-order-details.component';
import { OrderStatusHighlight } from './directives/order-status-highlight.directive';

const appRoutes: Routes = [
  {
    path: '',
    component : ViewOrdersComponent
  },
  {
    path: 'order/:id',
    component : ViewOrderDetailsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    OrderStatusHighlight,
    ViewOrdersComponent,
    ViewOrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ViewOrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
