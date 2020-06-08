import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { SpeedChartComponent } from './speed/speed.component';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { DashboardComponent }from './dashboard/dashboard.component';
import { EnginePerformanceService } from './speed/speed.service';
import { HttpClientModule } from '@angular/common/http';

const components = [
  UiFeaturesComponent,
  SpeedChartComponent,
  SearchComponent,
  DashboardComponent
];

@NgModule({
  imports: [
    NbCardModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    ThemeModule,
    UiFeaturesRoutingModule,
    HttpClientModule
  ],
  providers: [EnginePerformanceService],
  declarations: [
    ...components,
  ],
})
export class UiFeaturesModule { }