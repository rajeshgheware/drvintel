import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { SearchComponent } from './search-fields/search-fields.component';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';


const components = [
  UiFeaturesComponent,
  SearchComponent,
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
  ],
  declarations: [
    ...components,
  ],
})
export class UiFeaturesModule { }
