import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroSectionComponent } from '../components/intro-section/intro-section.component';
import { TwoColumnSidebarAndMainComponent } from '../components/two-column-sidebar-and-main/two-column-sidebar-and-main.component';



@NgModule({
  imports: [CommonModule],
  declarations: [IntroSectionComponent, TwoColumnSidebarAndMainComponent],
  exports: [CommonModule, IntroSectionComponent, TwoColumnSidebarAndMainComponent],
})
export class SharedModule { }
