import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Plant } from '../../interfaces/plants.interface';
import { PopupComponent } from '../popup/popup.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CreatePlantComponent } from '../create-plant/create-plant.component';

@Component({
  selector: 'app-plant-table',
  standalone: true,
  imports: [TableModule, ButtonModule, InputTextModule, IconFieldModule, InputIconModule, PopupComponent, CreatePlantComponent],
  templateUrl: './plant-table.component.html',
  styles: ``
})
export class PlantTableComponent implements OnInit {

  public plants: Plant [] = [];

    ngOnInit() {
      this.fillPlants();
    }

    fillPlants(){
      this.plants = [
        {
          id: 1,
          country: "Perú",
          plantName: "Prometheus",
          normalAlert: 100,
          mediumAlert: 20,
          highAlert: 3
        },
        {
          id: 2,
          country: "Argentina",
          plantName: "Discover",
          normalAlert: 120,
          mediumAlert: 40,
          highAlert: 5
        },
        {
          id: 3,
          country: "Perú",
          plantName: "Resolute",
          normalAlert: 200,
          mediumAlert: 13,
          highAlert: 1
        },
        {
          id: 4,
          country: "Colombia",
          plantName: "Alpha Centauri",
          normalAlert: 170,
          mediumAlert: 21,
          highAlert: 10
        },
        {
          id: 5,
          country: "Perú",
          plantName: "Challenger",
          normalAlert: 150,
          mediumAlert: 10,
          highAlert: 5
        },
      ]
    }
}


