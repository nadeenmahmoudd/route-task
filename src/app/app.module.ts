import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { TransactionGraphComponent } from './components/transaction-graph/transaction-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerTableComponent,
    TransactionGraphComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
