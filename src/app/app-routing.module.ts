import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncComponent } from './components/async/async.component';
import { SyncComponent } from './components/sync/sync.component';
import { WebsocketsComponent } from './components/websockets/websockets.component';

const routes: Routes = [
  {
    path: 'sync',
    component: SyncComponent
  },
  {
    path: 'async',
    component: AsyncComponent
  },
  {
    path: 'websockets',
    component: WebsocketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
