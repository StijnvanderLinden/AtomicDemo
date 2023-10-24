import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './page/datatable/datatable.component';
import { MainComponent } from './page/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'datatable', component: DatatableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}