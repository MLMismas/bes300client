import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

import {BehaviorSubject, Observable} from 'rxjs';
import { OrderCreate } from '../models/order-create';
import { OrderEntity } from '../reducers/async.reducer';

@Injectable()
export class CurbsideHubService {
    private hubConnection: signalR.HubConnection;
    private subject$: BehaviorSubject<OrderEntity>;
    private order: OrderEntity;

    constructor() {
        this.hubConnection = new signalR.HubConnectionBuilder().withUrl('http://localhost:3000/curbsidehub').build();
        this.hubConnection.start()
            .then(c => console.log('Hub Connection Started'))
            .catch(err => console.error('Hub connected failed', err));

        this.subject$ = new BehaviorSubject<OrderEntity>(null);

        this.hubConnection.on('OrderPlaced', (data) => {
            this.subject$.next(data);
            this.subject$.next(this.order);
        });

        this.hubConnection.on('OrderProcessed', (data) => {
            this.subject$.next(data);
            this.subject$.next(this.order);
        });
        this.hubConnection.on('ItemProcessed', (data) => {
            this.order.location = data.message;
            this.subject$.next(this.order);
        });
        this.hubConnection.on('ShoppingItemAdded', (data => {
            console.log('Somebody added a shopping item', data);
        }))
    }

    sendOrder(request: OrderCreate): void {
        this.hubConnection.send('PlaceOrder', request);
    }

    getOrder(): Observable<OrderEntity> {
        return this.subject$.asObservable();
    }
}