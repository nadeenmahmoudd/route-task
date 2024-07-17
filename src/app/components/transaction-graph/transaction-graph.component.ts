import { Component, OnInit, Input } from '@angular/core';
// import { ChartOptions, ChartType, ChartDatasets } from 'chart.js';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-transaction-graph',
  templateUrl: './transaction-graph.component.html',
  styleUrls: ['./transaction-graph.component.css']
})
export class TransactionGraphComponent implements OnInit {
  @Input() customerId: number | undefined;
  transactions: any[] = [];
  transactionData: number[] = [];
  transactionDates: string[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  // public barChartData: ChartDataSets[] = [
  //   { data: [], label: 'Transaction Amount' },
  // ];
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTransactions().subscribe((data) => {
      this.transactions = data.filter((transaction: { customer_id: number; }) => transaction.customer_id === this.customerId);
      this.transactionDates = this.transactions.map((transaction) => transaction.date);
      this.transactionData = this.transactions.map((transaction) => transaction.amount);
      this.barChartData = [
        { data: this.transactionData, label: 'Transaction Amount' },
      ];
    });
  }
}
