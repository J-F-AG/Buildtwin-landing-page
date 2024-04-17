import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/GlobalService';

@Component({
  selector: 'app-here-section',
  templateUrl: './here-section.component.html',
  styleUrl: './here-section.component.scss'
})
export class HereSectionComponent {
  constructor(private globalService: GlobalService) { }
  getGlobalValue(): string {
    return this.globalService.getGlobalValue();
  }
}
