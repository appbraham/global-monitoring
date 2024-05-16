import { Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { AlertComponent } from '../../components/alert-card/alert-card.component';
import { Icon } from '../../interfaces/icon.enum';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AlertComponent, SideMenuComponent, MenuBarComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  public Icon = Icon;

}
