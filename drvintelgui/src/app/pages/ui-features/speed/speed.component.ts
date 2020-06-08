import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { ObdService } from '../../../@core/service/obd.service';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

export {};

@Component({
  selector: 'speed-chart',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss']
})
export class SpeedChartComponent implements OnInit {
  item = [];
  count = 0;
  
  constructor (private httpService: HttpClient) { }
  ngOnInit() {
    
      this.httpService.get('http://3.6.109.128:8080/getdata1').subscribe(
        data => {
          this.item = data as string [];
          console.log(length)	 // FILL THE ARRAY WITH DATA.
          var i;
          var count0 = 0;
          var count1 = 0;
          var count2 = 0;
          var count3 = 0;
          var count4 = 0;
          var count5= 0;
          console.log(data)
          for(i=0;i<=this.item.length;i++){
           if (data[i]!=null && data[i].cluster != null){
           var cluster= data[i].cluster;
            //console.log(cluster)
            if(cluster!=null && cluster==0){
              count0++
              //console.log(count0)
            } else if(cluster!=null && cluster == 1){
              count1++
              //console.log(clus1)
            }
            else if(cluster!=null && cluster == 2){
              count2++
              //console.log(clus1)
            }
            else if(cluster!=null && cluster == 3){
              count3++
            }
            else if(cluster!=null && cluster == 4){
              count4++
             }
            else(cluster == null)
             count5++
            }
            }
            let percentage0 = Math.round((count0/ this.item.length) * 100) + '%';
            let percentage1 = Math.round((count1/ this.item.length) * 100) + '%';
            let percentage2 = Math.round((count2/ this.item.length) * 100) + '%';
            let percentage3 = Math.round((count3/ this.item.length) * 100) + '%';
            let percentage4 = Math.round((count4/ this.item.length) * 100) + '%';
            console.log(percentage0)
            console.log(percentage1)
            console.log(percentage2)
            console.log(percentage3)
            console.log(percentage4)
            console.log(count0)
            console.log(count1)
            console.log(count2)
            console.log(count3)
            console.log(count4)
             
      
      var canvas : any = document.getElementById("myChart");
      var ctx = canvas.getContext("2d");
      let labels = ['Good', 'Good', 'Under-confident', 'Over-confident','Good'];
      let colorHex = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B','#67C8FF'];
      let myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [{
            data: [count0,count1,count2,count3,count4],
            backgroundColor: colorHex
          }],
          labels: labels
        },
        options: {
          responsive: true,
          legend: {
            position: 'bottom'
          },
          plugins: {
            datalabels: {
              color: '#fff',
              anchor: 'end',
              align: 'start',
              offset: -10,
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 25,
              backgroundColor: (context) => {
                return context.dataset.backgroundColor;
              },
              font: {
                weight: 'bold',
                size: '10'
              },
              formatter: (value) => {
                return value + ' %';
              }
            }
          }
        }
      })
    })
    
  }
}
