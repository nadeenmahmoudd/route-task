import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit{
  customers: any[] = [];
  transactions: any[] = [];
  filteredCustomers: any[] = [];
  constructor(private dataService: DataService){}
  ngOnInit(): void {
    this.dataService.getCustomers().subscribe(data => {
      this.customers = data;
      this.filteredCustomers = data;
    });

    this.dataService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  filterCustomers(filter: string) {
    this.filteredCustomers = this.customers.filter(customer => 
      customer.name.toLowerCase().includes(filter.toLowerCase()));
  }

  getCustomerTransactions(customerId: number) {
    return this.transactions.filter(transaction => transaction.customer_id === customerId);
  }

}
