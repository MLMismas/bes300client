import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order, OrderCreate } from 'src/app/models/order-create';
import { SavingDialogComponent } from '../saving-dialog/saving-dialog.component';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.scss']
})
export class SyncComponent implements OnInit {
  order: Order = null;
  constructor(private client: HttpClient, private dialogSvc: MatDialog) { }

  ngOnInit(): void {
  }

  onOrderPlaced(order: OrderCreate): void {
    const dialogRef = this.dialogSvc.open(SavingDialogComponent, {
      height: '130px',
      width: '400px',
      disableClose: true
    });
    console.log('Dialog is open');
    this.client.post<Order>('http://localhost:3000/curbsideorders/sync', order)
      .pipe(
        tap(response => this.order = response),
        tap(() => dialogRef.close())
      ).subscribe();
  }
}
