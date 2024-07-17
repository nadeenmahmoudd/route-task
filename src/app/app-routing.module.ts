import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionGraphComponent } from './components/transaction-graph/transaction-graph.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';

const routes: Routes = [
  {path:'trasnaction' , component:TransactionGraphComponent},
  {path:'customer' , component:CustomerTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
