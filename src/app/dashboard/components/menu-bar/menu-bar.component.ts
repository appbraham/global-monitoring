import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [SidebarModule, SideMenuComponent],
  templateUrl: './menu-bar.component.html',
  styles: ``
})
export class MenuBarComponent {

  sidebarVisible: boolean = false;

}
