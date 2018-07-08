import { Order, CoffeeInterfacePrivate } from '../models/order';

export class ViewOrdersService implements CoffeeInterfacePrivate {

    orders = [
        {
            email: '',
            name: 'John Smith',
            orderId: 54753749,
            orderItems : ['Latte', 'Mocha', 'Cappuccinno'],
            orderStatus : 'Pending',
            orderTime : '1531009102929',
            phoneNumber: '0411200300'
        },
        {
            email: 'kelly.gardiner@gmail.com',
            name: 'Kelly Gardiner',
            orderId: 21962471,
            orderItems : ['Latte'],
            orderStatus : 'Pending',
            orderTime : '1531009102929',
            phoneNumber: ''
        },
        {
            email: 'richy_123@gmail.com',
            name: 'Richard Piper',
            orderId: 90127396,
            orderItems : ['Mocha', 'Cappuccinno'],
            orderStatus : 'Ready',
            orderTime : '1531009102929',
            phoneNumber: ''
        },
        {
            email: '',
            name: 'Brian Foster',
            orderId: 45648152,
            orderItems : ['Cappuccinno'],
            orderStatus : 'Pending',
            orderTime : '1531009102929',
            phoneNumber: '0480456198'
        }
    ];

    constructor() {}

    getOrders(): Array<Order> {
        return this.orders;
    }

    getOrder(orderId: number): Order {
        for (const order of this.orders) {
            if (order.orderId == orderId) {
                return order;
            }
        }
    }

    orderReady(orderId: number) {
        for (const order of this.orders) {
            if (orderId == order.orderId) {
                order.orderStatus = 'Ready';
                break;
            }
        }
    }

}
