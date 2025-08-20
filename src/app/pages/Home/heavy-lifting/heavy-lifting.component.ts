import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-lifting',
  templateUrl: './heavy-lifting.component.html',
  styleUrl: './heavy-lifting.component.scss'
})
export class HeavyLiftingComponent {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
