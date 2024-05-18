import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlertIcon } from '../../interfaces/alert-icon.enum';

@Component({
  selector: 'app-alert-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-card.component.html',
})
export class AlertComponent {

  @Input({required: true})
  public title: string = '';

  @Input({required: true})
  public total: number = 0;

  @Input({required: true})
  public icon: AlertIcon = AlertIcon.disabled;

  public Icon = AlertIcon;


}
