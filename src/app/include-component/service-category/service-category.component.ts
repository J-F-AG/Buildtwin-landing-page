import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrl: './service-category.component.scss'
})
export class ServiceCategoryComponent {
  @Input() category: number = 0;
}
