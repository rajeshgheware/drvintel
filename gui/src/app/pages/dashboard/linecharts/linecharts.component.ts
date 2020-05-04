import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { LinechartsService } from './linecharts.service';
import { Iloc} from './line';
import { async } from '@angular/core/testing';

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
  

  ngOnInit(): void {
   this._linechartsService.getline()
     .subscribe(data => this.lines = data);
 
     const xlabels =[];
     const ycases =[];
     ChatIt();
      async function ChatIt() {
        await getData();
        var myChart = new Chart("myChart", {
        type: 'line',
        data: {
          labels: xlabels,
          datasets: [{
              label: 'Coronavirus cases',
              data: ycases,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }]
  },
})
};
    getData();
    async function getData() {
      const response = await fetch("/assets/data/line.json");
      const data = await response.text();

      const table = data.split('\n').slice(1);
      console.log(table);
      table.forEach(row => {
        const columns = row.split(',');
        const loc = columns[0];
        xlabels.push(loc);
        const cases = columns[1];
        ycases.push(cases);
        console.log(loc,cases);
      });
    }
}
}
