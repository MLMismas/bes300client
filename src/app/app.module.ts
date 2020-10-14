import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SyncComponent } from './components/sync/sync.component';
import { OrderEntryComponent } from './components/order-entry/order-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { SavingDialogComponent } from './components/saving-dialog/saving-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AsyncComponent } from './components/async/async.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsConfig, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { AsyncOrderEffects } from './effects/asyncorders.effects';
import { AsyncListComponent } from './components/async-list/async-list.component';
import { WebsocketsComponent } from './components/websockets/websockets.component';
@NgModule({
  declarations: [
    AppComponent,
    SyncComponent,
    OrderEntryComponent,
    SavingDialogComponent,
    AsyncComponent,
    AsyncListComponent,
    WebsocketsComponent
  ],
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AsyncOrderEffects]),
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
