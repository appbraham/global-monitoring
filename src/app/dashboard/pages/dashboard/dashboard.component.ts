import { Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { AlertComponent } from '../../components/alert-card/alert-card.component';
import { Icon } from '../../interfaces/icon.enum';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AlertComponent, SideMenuComponent, SidebarModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styles: `
    .p-button-icon{
      color: red;
      background-color: red;
      fill: black;
    }
  `
})
export class DashboardComponent {

  sidebarVisible: boolean = false;
  public Icon = Icon;

}
