import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderCreate } from 'src/app/models/order-create';

@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.scss']
})
export class OrderEntryComponent implements OnInit {

  @Output() orderPlaced = new EventEmitter<OrderCreate>();
  form: FormGroup;
  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      for: ['', Validators.required],
      items: ['', Validators.required]
    });
  }

  submit(): void {
    this.orderPlaced.emit(this.form.value);
  }

}
