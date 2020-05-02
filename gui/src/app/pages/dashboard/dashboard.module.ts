import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbListModule, NbRadioModule, NbSelectModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LinechartsComponent } from './linecharts/linecharts.component';
import { JsonfileComponent } from './jsonfile/jsonfile.component';
import { LinechartsService }from './linecharts/linecharts.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    ContactsComponent,
    LinechartsComponent,
    JsonfileComponent
  ],
  providers: [LinechartsService]
})
export class DashboardModule { }
