import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
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
  @Input() slider: any = [];
    @ViewChild('carousel', { static: false }) carousel!: ElementRef;
    @ViewChild('carouselParent', { static: false }) carouselParent!: ElementRef;
    isAnimationEnabled = false;
  // slider : any = [
  //   {
  //     "id": 1,
  //     "routerLink": "/partners/gbc-engineers",
  //     "name": "GBC",
  //     icon: "assets/images/service-images/gbc.png",
  //     width: 70,
  //     height: 33
  //   },
  //   {
  //     "id": 5,
  //     "routerLink": "/partners/caldim-engineering",
  //     "name": "CALDIM",
  //     icon: "assets/images/service-images/caldim.png",
  //     width: 105,
  //     height: 18
  //   },
  //   {
  //     "id": 3,
  //     "routerLink": "/partners/durchgeplant",
  //     "name": "DURCHGEPLANT",
  //     icon: "assets/images/service-images/durchge-plant.png",
  //     width: 138,
  //     height: 22
  //   },
  //   {
  //     "id": 2,
  //     "routerLink": "/partners/j-f-india",
  //     "name": "J&F",
  //     icon: "assets/images/service-images/jandf.png",
  //     width: 46,
  //     height: 23
  //   },
  //   {
  //     "id": 4,
  //     "routerLink": "/partners/aarbee-structures-private-limited",
  //     "name": "AARBEE",
  //     icon: "assets/images/service-images/aarbee.png",
  //     width: 75,
  //     height: 49
  //   },
  //   {
  //     id: 6,
  //     routerLink: '/partners/mold-tek-technologies-limited',
  //     name: 'Mold-Tek',
  //     icon: "assets/images/service-images/moldek.png",
  //     width: 109,
  //     height: 12
  //   },
  //   {
  //     id: 7,
  //     routerLink: '/partners/clove-technologies-private-limited',
  //     name: 'Clove',
  //     icon: "assets/images/service-images/clove.png",
  //     width: 69,
  //     height: 25
  //   }
  // ]
  constructor(public _languageService:LanguageService) { }
  
  ngOnInit(): void {
    // if (this.hideItem && this.hideItem.length > 0) {
    //   this.slider = this.slider.filter(image => !this.hideItem.includes(image.id));
    // }
  }

   ngAfterViewInit() {
    this.checkAnimation();
  }
  @HostListener('window:resize')
  onResize() {
    this.checkAnimation();
  }
  checkAnimation() {
    if (this.carousel) {
      const carouselWidth = this.carousel.nativeElement.scrollWidth;
      const carouselParentWidth = this.carouselParent.nativeElement.clientWidth;
      console.log(carouselParentWidth)
      console.log(carouselWidth)
      // const windowWidth = window.innerWidth;
      this.isAnimationEnabled = carouselWidth > carouselParentWidth;
    }
  }
}
