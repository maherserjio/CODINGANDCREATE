import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroSectionComponent } from '../components/intro-section/intro-section.component';



@NgModule({
  imports: [CommonModule],
  declarations: [IntroSectionComponent],
  exports: [CommonModule, IntroSectionComponent],
})
export class SharedModule { }
