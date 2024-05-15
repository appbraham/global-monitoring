import { Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { AlertComponent } from '../../components/alert-card/alert-card.component';
import { Icon } from '../../interfaces/icon.enum';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AlertComponent, SideMenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {

  public Icon = Icon;

}
