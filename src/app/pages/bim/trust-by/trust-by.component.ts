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
      "name": "GBC",
      icon: "assets/images/trustedBy-gbc"
    },
    {
      "id": 2,
      "routerLink": "/partners/j-f-india",
      "name": "J&F",
      icon: "assets/images/trustedBy-gbc"
    },
    {
      "id": 3,
      "routerLink": "/partners/durchgeplant",
      "name": "DURCHGEPLANT",
      icon: "assets/images/trustedBy-gbc"
    },
    {
      "id": 4,
      "routerLink": "/partners/aarbee-structures-private-limited",
      "name": "AARBEE",
      icon: "assets/images/trustedBy-gbc"
    },
    {
      "id": 5,
      "routerLink": "/partners/caldim-engineering",
      "name": "CALDIM",
      icon: "assets/images/trustedBy-caldim"
    },
    {
      id: 6,
      routerLink: '/partners/mold-tek-technologies-limited',
      name: 'Mold-Tek',
      icon: "assets/images/trustedBy-gbc"
    },
    {
      id: 7,
      routerLink: '/partners/clove-technologies-private-limited',
      name: 'Clove',
      icon: "assets/images/trustedBy-gbc"
    }
  ]
  constructor(public _languageService:LanguageService) { }
  
  ngOnInit(): void {
    if (this.hideItem && this.hideItem.length > 0) {
      this.slider = this.slider.filter(image => !this.hideItem.includes(image.id));
    }
  }
}
