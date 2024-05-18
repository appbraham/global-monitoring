import { Component, Input } from '@angular/core';
import { SensorType, Severity } from '../../interfaces/sensor.interface';
import { SensorIconComponent } from '../sensor-icon/sensor-icon.component';

@Component({
  selector: 'app-sensor-card',
  standalone: true,
  imports: [SensorIconComponent],
  templateUrl: './sensor-card.component.html',
  styles: ``
})
export class SensorCardComponent {

  @Input({ required: true })
  name: string = ''

  @Input({ required: true })
  sensorType!: SensorType;

  @Input({ required: true })
  severity!: Severity;

}
