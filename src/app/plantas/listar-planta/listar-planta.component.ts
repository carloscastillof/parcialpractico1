import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-listar-planta',
  templateUrl: './listar-planta.component.html',
  styleUrls: ['./listar-planta.component.css']
})
export class ListarPlantaComponent implements OnInit {

  plantas: Array<Planta> = [];

  constructor(private plantaService: PlantaService) { }

  getPlants(): void {
    this.plantaService.getPlants().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  ngOnInit() {
    this.getPlants();
  }

  get interior(){
    return this.plantas.filter(c=>c.tipo== 'Interior').length
  }

  get exterior(){
    return this.plantas.filter(c=>c.tipo== 'Exterior').length
  }

}
