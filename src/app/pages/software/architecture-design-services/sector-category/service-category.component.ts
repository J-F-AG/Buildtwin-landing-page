import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sector-category-architecture-design-services',
  templateUrl: './sector-category.component.html',
  styleUrls: ['../../../../include-component/sector-category/sector-category.component.scss','./sector-category.component.scss']
})
// ./include-component/sector-category/service-category.component
export class SectorCategoryArchitectureDesignServicesComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
