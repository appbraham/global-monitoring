import { Component, Input } from '@angular/core';
import { SensorType } from '../../interfaces/sensor.interface';

@Component({
  selector: 'app-sensor-icon',
  standalone: true,
  imports: [],
  templateUrl: './sensor-icon.component.html',
  styles: ``
})
export class SensorIconComponent {

  @Input({ required: true })
  public sensorType!:SensorType;

  sensor = SensorType;

}
