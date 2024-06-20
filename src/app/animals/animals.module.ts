import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAnimalsComponent } from './all-animals/all-animals.component';
import { FiveAnimalsComponent } from './five-animals/five-animals.component';

@NgModule({
  declarations: [AllAnimalsComponent, FiveAnimalsComponent],
  imports: [CommonModule],
  exports: [AllAnimalsComponent],
})
export class AnimalsModule {}
