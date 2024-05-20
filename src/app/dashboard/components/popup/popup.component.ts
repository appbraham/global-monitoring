import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ButtonModule, OverlayPanelModule],
  templateUrl: './popup.component.html',
})
export class PopupComponent {

  @Input({ required:true })
  public plantId!: number;

  public editPlant(op: OverlayPanel): void{
    op.hide();
    //TODO: add edit plant method using service
    console.log('Updated plant with ID: ', this.plantId);

  }

  public deletePlant(op: OverlayPanel): void{
    op.hide();
    //TODO: add delete plant method using service
    console.log('Deleted plant with ID: ', this.plantId);
  }

}
