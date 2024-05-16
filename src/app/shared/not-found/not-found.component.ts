import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [ButtonModule, SidebarModule],
  templateUrl: './not-found.component.html',
  styles: ``
})
export class NotFoundComponent {
  sidebarVisible: boolean = false;

}
