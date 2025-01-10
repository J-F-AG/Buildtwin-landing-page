import { Component, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-bim-trust-by',
  // standalone: true,
  // imports: [],
  templateUrl: './trust-by.component.html',
  styleUrl: './trust-by.component.scss'
})
export class BimTrustByNewComponent {
  @Input() hideItem: number[] = []; // Array of IDs to hide
  @Input() heading: boolean = true; //sector
  slider : any = [
    {
      "id": 1,
      "routerLink": "/partners/gbc-engineers",
      "name": "GBC"
    },
    {
      "id": 2,
      "routerLink": "/partners/j-f-india",
      "name": "J&F"
    },
    {
      "id": 3,
      "routerLink": "/partners/durchgeplant",
      "name": "DURCHGEPLANT"
    },
    {
      "id": 4,
      "routerLink": "/partners/aarbee-structures-private-limited",
      "name": "AARBEE"
    },
    {
      "id": 5,
      "routerLink": "/partners/caldim-engineering",
      "name": "CALDIM"
    },
    {
      id: 6,
      routerLink: '/partners/mold-tek-technologies-limited',
      name: 'Mold-Tek'
    },
    {
      id: 7,
      routerLink: '/partners/clove-technologies-private-limited',
      name: 'Clove'
    }
  ]
  constructor(public _languageService:LanguageService) { }
  
  ngOnInit(): void {
    if (this.hideItem && this.hideItem.length > 0) {
      this.slider = this.slider.filter(image => !this.hideItem.includes(image.id));
    }
  }
}
