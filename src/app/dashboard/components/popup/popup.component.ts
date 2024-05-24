import { Component, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { EditPlantComponent } from '../edit-plant/edit-plant.component';
import { Plant } from '../../interfaces/plants.interface';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ButtonModule, OverlayPanelModule, EditPlantComponent],
  templateUrl: './popup.component.html',
})
export class PopupComponent {

  @Input({ required: true })
  public plant!: Plant;
  // public plant!: number;

  public visibleEditDialog: boolean = false;

  // public plant: Plant;

  // constructor() {
  //   this.plant = {
  //     id: 3,
  //     country: "Perú",
  //     plantName: "Resolute",
  //     normalAlert: 200,
  //     mediumAlert: 13,
  //     highAlert: 1
  //   };
  // }


  public editPlant(op: OverlayPanel): void {
    op.hide();
    // this.visible = true;
    //TODO: add edit plant method using service
    console.log('Updated plant with ID: ', this.plant.plantName);

  }

  public deletePlant(op: OverlayPanel): void {
    op.hide();
    //TODO: add delete plant method using service
    console.log('Deleted plant with ID: ', this.plant.plantName);
  }

}
