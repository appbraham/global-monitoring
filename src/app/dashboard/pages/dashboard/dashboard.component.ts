import { Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { AlertComponent } from '../../components/alert-card/alert-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { UserMenuComponent } from '../../components/user-menu/user-menu.component';
import { SensorCardComponent } from '../../components/sensor-card/sensor-card.component';
import { AlertIcon } from '../../interfaces/alert-icon.enum';
import { Sensor, SensorType, Severity } from '../../interfaces/sensor.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AlertComponent, SideMenuComponent, MenuBarComponent, UserMenuComponent, SensorCardComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  public alertIcon = AlertIcon;


  public sensors: Sensor[] = [
    {
      sensorType: SensorType.carbonMonoxide,
      severity: { high: 100, medium: 30, low: 3 }
    },
    {
      sensorType: SensorType.energy,
      severity: { high: 120, medium: 20, low: 1 }
    },
    {
      sensorType: SensorType.gas,
      severity: { high: 130, medium: 16, low: 4 }
    },
    {
      sensorType: SensorType.level,
      severity: { high: 122, medium: 12, low: 2 }
    },
    {
      sensorType: SensorType.pressure,
      severity: { high: 115, medium:18, low: 5 }
    },
    {
      sensorType: SensorType.strain,
      severity: { high: 118, medium: 17, low: 12 }
    },
    {
      sensorType: SensorType.temperature,
      severity: { high: 100, medium: 25, low: 10 }
    },
    {
      sensorType: SensorType.wind,
      severity: { high: 105, medium: 40, low: 3 }
    },
  ]

}
