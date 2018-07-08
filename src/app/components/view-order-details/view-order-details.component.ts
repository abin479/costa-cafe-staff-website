import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewOrdersService } from './../../services/view-orders.service';
import { Order } from './../../models/order';

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {

  orderId: number;
  order: Order;

  constructor(
    private router: Router,
    private viewOrdersService: ViewOrdersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.params['id'];
    this.order = this.viewOrdersService.getOrder(this.orderId);
  }

  markAsReady() {
    this.viewOrdersService.orderReady(this.orderId);
  }

  backToAllOrders() {
    this.router.navigate(['/']);
  }

}
