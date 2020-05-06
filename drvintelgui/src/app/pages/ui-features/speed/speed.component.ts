import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { ObdService } from '../../../@core/service/obd.service';

@Component({
  selector: 'speed-chart',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss']
})
export class SpeedChartComponent implements OnInit, OnDestroy,AfterViewInit {

  obddata;

  ngOnInit(): void {
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
