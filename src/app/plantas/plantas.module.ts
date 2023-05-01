import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPlantaComponent } from './listar-planta/listar-planta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarPlantaComponent],
  exports: [ListarPlantaComponent]
})
export class PlantasModule { }
