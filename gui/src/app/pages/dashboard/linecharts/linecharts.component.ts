import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { LinechartsService } from './linecharts.service';

@Component({
  selector: 'ngx-linecharts',
  templateUrl: './linecharts.component.html',
  styleUrls: ['./linecharts.component.scss']
  /*template:`
  <div style = "display:block">
  <canvas baseChart
       [data]="lineChartData"
       [labels]="lineChartLabels"
       [chartType]="lineChartType"></canvas>

</div>`,
styles:[]*/
})
export class LinechartsComponent implements OnInit {
    public lines =[];

  constructor(private _linechartsService: LinechartsService) { }

  ngOnInit() {
      this._linechartsService.getline()
        .subscribe(data => this.lines = data);
    
}
}
