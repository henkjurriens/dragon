import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CheckMenuItemComponent } from '../components/check-menu-item/check-menu-item.component';
import { GaugeComponent } from '../components/gauge/gauge.component';
import { HeaderComponent } from '../components/header/header.component';
import { DashboardItemComponent } from '../components/dashboard-item/dashboard-item.component';
import { StatComponent } from '../components/stat/stat.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CheckMenuItemComponent, GaugeComponent, HeaderComponent, DashboardItemComponent, StatComponent], 
  exports: [CheckMenuItemComponent, GaugeComponent, HeaderComponent, DashboardItemComponent, StatComponent]
})
export class HomePageModule {}
