import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditPlantComponent } from '../edit-plant/edit-plant.component';
import { Plant } from '../../interfaces/plants.interface';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ButtonModule, DynamicDialogModule, OverlayPanelModule, EditPlantComponent],
  providers: [DialogService],
  templateUrl: './popup.component.html',
})
export class PopupComponent implements OnDestroy{

  dialogService = inject(DialogService);
  ref: DynamicDialogRef | undefined;

  @Input({ required: true })
  public plant!: Plant;


  showEditDialog(op: OverlayPanel){
    op.hide();

    this.ref = this.dialogService.open( EditPlantComponent, {
      header: 'Editar Planta'
    })
  }




  public editPlant(op: OverlayPanel): void {
    // this.visible = true;
    //TODO: add edit plant method using service
    console.log('Updated plant with ID: ', this.plant.plantName);

  }

  public deletePlant(op: OverlayPanel): void {
    op.hide();
    //TODO: add delete plant method using service
    console.log('Deleted plant with ID: ', this.plant.plantName);
  }

  ngOnDestroy(): void {

  }

}
