import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ValidatorService } from '../../services/validator.service';
import { ButtonModule } from 'primeng/button';
import { Plant } from '../../interfaces/plants.interface';

@Component({
  selector: 'app-edit-plant',
  standalone: true,
  imports: [ReactiveFormsModule, DialogModule, ButtonModule],
  templateUrl: './edit-plant.component.html',
  styles: ``
})
export class EditPlantComponent {

  @Input({ required: true })
  plant!: Plant;

  @Input({ required: true })
  visibleEditDialog: boolean = false;

  private fb = inject(FormBuilder);
  private validatorService = inject(ValidatorService);
  public editPlantForm: FormGroup;

  constructor(){

    this.editPlantForm = this.fb.group({
      name: ['', [Validators.required]],
      countryName:['', [Validators.required]],
      normalAlert:['', [Validators.required]],
      mediumAlert:['', [Validators.required]],
      highAlert:['', [Validators.required]],
      // name: [this.plant.plantName, [Validators.required]],
      // countryName:[this.plant.country, [Validators.required]],
      // normalAlert:[this.plant.normalAlert, [Validators.required]],
      // mediumAlert:[this.plant.mediumAlert, [Validators.required]],
      // highAlert:[this.plant.highAlert, [Validators.required]],
    });
  }




  isValidField(field: string){
    return this.validatorService.isValidField(this.editPlantForm, field);
  }

  editUser(){

    console.log("submit button");

    if(this.editPlantForm.invalid){
      this.editPlantForm.markAllAsTouched();
      return;
    }

    this.visibleEditDialog = false;
    //TODO: call service to create a new user
  }

}
