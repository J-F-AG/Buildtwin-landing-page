import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-special-project',
  templateUrl: './special-project.component.html',
  styleUrl: './special-project.component.scss'
})
export class SpecialProjectComponent implements OnInit {
  @Input() page: string = ''; //sector
  @Input() hideItem: number[] = []; // Array of IDs to hide
  @Input() heading: boolean = true; //sector
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slides = [
    {
      
      images: [
        { id:1, src: 'assets/images/services/Sector_datacenter.webp', title: 'Data Center', description: 'Specialized structural engineering services for mission-critical data center facilities.', link: '/sector/data-centre' },
        { id:2, src: 'assets/images/services/Sector_powerplant.webp', title: 'Power plant', description: 'Advanced structural engineering for resilient and efficient power plant facilities.', link: '/sector/power-plant' },
        {
          id:3,
          src: 'assets/images/services/Sector_Airports.webp',
          title: 'AIRPORTS',
          description: 'Tailored structural services for expansive and modern airport infrastructure.',
          link: ''
        },
        {
          id: 4,
          src: 'assets/images/services/Sector_commercialBuilding.webp',
          title: 'Commercial building',
          description: 'Comprehensive engineering solutions for modern and dynamic commercial building projects.',
          link: ''
        },
        { id: 5, src: 'assets/images/services/Sector_industrialbulidings.webp', title: 'INDUSTRIAL BUILDINGS', description: 'Tailored structural designs for efficient and robust industrial building facilities.', link: '' },
        { id: 6, src: 'assets/images/services/Sector_pre-cast.webp', title: 'PRE-CAST', description: 'Expert detailing and engineering services for precision-driven precast industry projects.', link: '' },
        { id: 7, src: 'assets/images/services/Sector_residentialbuildings.webp', title: 'Residential Buildings', description: 'End-to-end structural services for safe and sustainable residential building designs.', link: '' },
        { id: 8, src: 'assets/images/services/Sector_schools.webp', title: 'Schools', description: 'Optimized engineering solutions for functional and future-ready school building infrastructures.', link: '' },
        { id: 9, src: 'assets/images/services/Sector_theaters.webp', title: 'Theaters', description: 'Creative structural solutions for iconic and immersive theater complex projects.', link: '' },
        { id: 10, src: 'assets/images/services/Sector_Bridges.webp', title: 'Bridge', description: 'Expert bridge engineering services for durable and load-bearing infrastructure.', link: '' },
        { id: 11, src: 'assets/images/services/Sector_ChemicalPlants.webp', title: 'Chemical plants', description: 'Specialized designs for safe and efficient chemical plant facilities.', link: '' },
        { id: 12, src: 'assets/images/services/Sector_Hospitals.webp', title: 'HOSPITALS', description: 'Structural solutions ensuring safety and adaptability in hospital building designs.', link: '' },
        { id: 13, src: 'assets/images/services/Sector_ManufacturingPlants.webp', title: 'Manufacturing plants', description: 'Engineering expertise for robust and streamlined manufacturing plant structures.', link: '' },
        { id: 14, src: 'assets/images/services/Sector_Metros.webp', title: 'Metros', description: 'Precise engineering solutions for complex and efficient metro infrastructure projects.', link: '' },
        { id: 15, src: 'assets/images/services/Sector_Roads.webp', title: 'Road ways', description: 'Structural designs for durable and high-capacity roadway systems.', link: '' },
        { id: 16, src: 'assets/images/services/Sector_Waterwaste.webp', title: 'Water & waste', description: 'Sustainable engineering for essential water and waste management facilities.', link: '' },
        { id: 17, src: 'assets/images/services/Sector_tunnel.webp', title: 'Tunnel', description: 'Comprehensive solutions for safe and long-lasting tunnel engineering projects.', link: '' },
      ],
    },
  ];
  
  ngOnInit(): void {
    if (this.hideItem && this.hideItem.length > 0) {
      this.slides[0].images = this.slides[0].images.filter(image => !this.hideItem.includes(image.id));
    }
  }
}
