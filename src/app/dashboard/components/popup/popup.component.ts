import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ ButtonModule, OverlayPanelModule],
  templateUrl: './popup.component.html',
  styles: [
    `.p-overlaypanel-content{
      background-color: red;
      text: red;
    }
    .p-overlaypanel{
      text: red;
      background-color: red;
    }`
  ]
})
export class PopupComponent {

}
