import { Component, OnDestroy, OnInit, AfterViewInit,ElementRef } from '@angular/core';
import { ObdService } from '../../../@core/service/obd.service';
import { Chart } from 'chart.js';
import { EnginePerformanceService1 } from './lines.service';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'ngx-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {

  chart = null;
  lineData = [];
  engine_RPM=[];
  dataLabels=[];
  @ViewChild('myCanvas') canvasRef: ElementRef;
 

  constructor( private enginePerformanceService: EnginePerformanceService1) { }

  ngOnInit(): void {
    this.getData()
    this.getData1()
    console.log('in on init')
  }


//   ngAfterViewChecked() {
    

// }

  getData(): void {
    this.enginePerformanceService.getData()
    .subscribe(data => {
      console.log(data)
      for(let in_data of data){
        this.dataLabels.push(in_data.obdDevicePK.received)
      }
      for(let in_data of data){
        // let scale={}
        // scale['x']=in_data.obdDevicePK.received
        // scale['y']=in_data.speed
        this.lineData.push(in_data.speed)
      }
      for(let in_data of data){
        // let scale={}
        // scale['x']=in_data.obdDevicePK.received
        // scale['y']=in_data.engineLoad
        this.engine_RPM.push(in_data.engineLoad)
      }
      console.log(this.engine_RPM)
      let ctx = this.canvasRef.nativeElement.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.dataLabels,
          datasets: [
            { 
              data: this.lineData,
              label: 'Speed',
              backgroundColor: 'rgba(77,83,96,0.2)',
              borderColor: 'rgba(77,83,96,1)',
            },
            { 
              data: this.engine_RPM,
              label: 'RPM',
              backgroundColor: 'rgba(255,0,0,0.3)',
              borderColor: 'red',
            }
          ]
        },
        
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        displayFormats: {
                            hour: 'hA'
                        }
                    }
                }],
                yAxes: [{
                  stacked: true
              }]
            }
        }
        });

    });
  }

  getData1(): void {
    this.enginePerformanceService.getData1()
    .subscribe(data1 => {
      console.log(data1)
    });
  }

}
