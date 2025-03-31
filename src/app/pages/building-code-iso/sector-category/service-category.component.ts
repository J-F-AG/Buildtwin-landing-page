import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sector-category-building-code-iso',
  templateUrl: './sector-category.component.html',
  styleUrls: ['../../../include-component/sector-category/sector-category.component.scss','./sector-category.component.scss']
})
// ./include-component/sector-category/service-category.component
export class SectorCategoryBuildingCodeISOComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
