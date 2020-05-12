import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { ObdService } from '../../../@core/service/obd.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'speed-chart',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss']
})
export class SpeedChartComponent implements OnInit, OnDestroy,AfterViewInit {

  obddata;

  ngOnInit(): void {function BuildChart(labels, values, chartTitle) {
    var data = {
      labels: labels,
      datasets: [{
        label: chartTitle, // Name the series
        data: values,
        backgroundColor: ['rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
        ],
      }],
    };
    const canvas = <HTMLCanvasElement> document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true, // Instruct chart JS to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behavior of full-width/height 
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'engineRPM'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Speed'
            }
          }]
        },
      }
    });
    return myChart;
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.response);
    // Map JSON labels  back to values array
    var labels = json.map(function (e) {
      return e.engineRPM;
    });
    // Map JSON values back to values array
    var values = json.map(function (e) {
      return e.speed; // Divide to billions in units of ten
    });
    BuildChart(labels, values, "Speed"); // Pass in data and call the chart
  }
};
  xhttp.open("GET", "http://localhost:4200/getdata", false);
  xhttp.send();
  }
  ngOnDestroy(): void {
  }
  constructor(private obdService: ObdService) { }
  ngAfterViewInit(): void {
    this.getOBDData();
  }

  getOBDData() {
    this.obdService.getObdData().subscribe((data: any[]) => {
      console.log(data);
      this.obddata = data;
    })
  }
}
