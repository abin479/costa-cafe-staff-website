import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { ViewOrdersService } from './../../services/view-orders.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  orders: Array<Order>;

  constructor(
    private viewOrdersService: ViewOrdersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.orders = this.viewOrdersService.getOrders();
  }

  fetchOrderDetails(orderId) {
    this.router.navigate(['/order/' +  orderId]);
  }

}
