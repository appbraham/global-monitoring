import { Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { AlertComponent } from '../../components/alert-card/alert-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { UserMenuComponent } from '../../components/user-menu/user-menu.component';
import { SensorCardComponent } from '../../components/sensor-card/sensor-card.component';
import { AlertIcon } from '../../interfaces/alert-icon.enum';
import { Sensor, SensorType } from '../../interfaces/sensor.interface';
import { PlantTableComponent } from '../../components/plant-table/plant-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AlertComponent, SideMenuComponent, MenuBarComponent, UserMenuComponent, SensorCardComponent, PlantTableComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  public alertIcon = AlertIcon;


  public sensors: Sensor[] = [
    {
      sensorType: SensorType.carbonMonoxide,
      severity: { normal: 100, medium: 30, high: 3 }
    },
    {
      sensorType: SensorType.energy,
      severity: { normal: 120, medium: 20, high: 1 }
    },
    {
      sensorType: SensorType.gas,
      severity: { normal: 130, medium: 16, high: 4 }
    },
    {
      sensorType: SensorType.level,
      severity: { normal: 122, medium: 12, high: 2 }
    },
    {
      sensorType: SensorType.pressure,
      severity: { normal: 115, medium:18, high: 5 }
    },
    {
      sensorType: SensorType.strain,
      severity: { normal: 118, medium: 17, high: 12 }
    },
    {
      sensorType: SensorType.temperature,
      severity: { normal: 100, medium: 25, high: 10 }
    },
    {
      sensorType: SensorType.wind,
      severity: { normal: 105, medium: 40, high: 3 }
    },
  ]

}
