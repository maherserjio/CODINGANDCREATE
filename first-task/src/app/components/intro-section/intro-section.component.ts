import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.scss'
})
export class IntroSectionComponent {
  @Input() title = ''
  @Input() content = ''
}
