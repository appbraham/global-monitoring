import { Component, Input, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-create-plant',
  standalone: true,
  imports: [ReactiveFormsModule, DialogModule, ButtonModule, InputTextModule, DropdownModule],
  templateUrl: './create-plant.component.html',
  styleUrls: ['./create-plant.component.css']
})
export class CreatePlantComponent {

  @Input({ required: true })
  title: string = '';
  visibleDialog: boolean = false;

  private fb = inject(FormBuilder);
  private validatorService = inject(ValidatorService);

  public plantForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    countryName:['', [Validators.required]],
  });

  isValidField(field: string){
    return this.validatorService.isValidField(this.plantForm, field);
  }

  saveUser(){

    console.log("submit button");

    if(this.plantForm.invalid){
      this.plantForm.markAllAsTouched();
      return;
    }

    this.visibleDialog = false;
    //TODO: call service to create a new user
  }

}
