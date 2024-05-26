import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ValidatorService } from '../../services/validator.service';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Plant } from '../../interfaces/plants.interface';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-plant',
  standalone: true,
  imports: [ReactiveFormsModule, DialogModule, ButtonModule, FloatLabelModule],
  templateUrl: './edit-plant.component.html',
  styles: `
    :host ::ng-deep .create-btn.p-button {
      padding: 8px 20px;
      border-radius: 12px;
    }
    :host ::ng-deep .create-btn.p-button .p-button-label {
      font-size: 14px;
      font-weight: 500;
    }
  `
})
export class EditPlantComponent {

  private fb = inject(FormBuilder);
  public config: DynamicDialogConfig = inject(DynamicDialogConfig);

  private validatorService = inject(ValidatorService);
  public editPlantForm: FormGroup;

  plant: Plant = this.config.data;


  constructor() {

    this.editPlantForm = this.fb.group({
      name: [this.plant.plantName, [Validators.required]],
      countryName: [this.plant.country, [Validators.required]],
      normalAlert: [this.plant.normalAlert, [Validators.required]],
      mediumAlert: [this.plant.mediumAlert, [Validators.required]],
      highAlert: [this.plant.highAlert, [Validators.required]],
    });
  }

  isValidField(field: string) {
    return this.validatorService.isValidField(this.editPlantForm, field);
  }

  editUser() {

    console.log("submit button");

    if (this.editPlantForm.invalid) {
      this.editPlantForm.markAllAsTouched();
      return;
    }
    // this.visibleEditDialog = false;
    //TODO: call service to create a new user
  }

  closeDialog(){

  }

}
