import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search-fields/search-fields.component';
import { UiFeaturesComponent } from './ui-features.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpeedChartComponent } from './speed/speed.component';


const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'speed-chart',
    component: SpeedChartComponent,
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
