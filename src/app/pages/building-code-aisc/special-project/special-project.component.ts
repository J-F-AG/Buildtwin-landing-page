import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-special-project-building-code-aisc',
  templateUrl: './special-project.component.html',
  styleUrls: ['../../../include-component/special-project/special-project.component.scss','./special-project.component.scss']
})
// ./include-component/special-project/special-project.component
export class SpecialProjectBuildingCodeAiscComponent {
  @Input() page: string = ''; //sector
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
        items: 1,
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
        {
          src: 'assets/images/services/Sector_Airports.png',
          title: 'AIRPORTS',
          description: 'Tailored structural services for expansive and modern airport infrastructure.',
          link: ''
        },
        {
          src: 'assets/images/services/Sector_commercialBuilding.png',
          title: 'Commercial building',
          description: 'Comprehensive engineering solutions for modern and dynamic commercial building projects.',
          link: ''
        },
        { src: 'assets/images/services/Sector_datacenter.png', title: 'Data Center', description: 'Specialized structural engineering services for mission-critical data center facilities.', link: '/sector/data-centre' },
        { src: 'assets/images/services/Sector_industrialbulidings.png', title: 'INDUSTRIAL BUILDINGS', description: 'Tailored structural designs for efficient and robust industrial building facilities.', link: '' },
        { src: 'assets/images/services/Sector_powerplant.png', title: 'Power plant', description: 'Advanced structural engineering for resilient and efficient power plant facilities.', link: '/sector/power-plant' },
        { src: 'assets/images/services/Sector_pre-cast.png', title: 'PRE-CAST', description: 'Expert detailing and engineering services for precision-driven precast industry projects.', link: '' },
        { src: 'assets/images/services/Sector_residentialbuildings.png', title: 'Residential Buildings', description: 'End-to-end structural services for safe and sustainable residential building designs.', link: '' },
        { src: 'assets/images/services/Sector_schools.png', title: 'Schools', description: 'Optimized engineering solutions for functional and future-ready school building infrastructures.', link: '' },
        { src: 'assets/images/services/Sector_theaters.png', title: 'Theaters', description: 'Creative structural solutions for iconic and immersive theater complex projects.', link: '' },
        { src: 'assets/images/services/Sector_Bridges.png', title: 'Bridge', description: 'Expert bridge engineering services for durable and load-bearing infrastructure.', link: '' },
        { src: 'assets/images/services/Sector_ChemicalPlants.png', title: 'Chemical plants', description: 'Specialized designs for safe and efficient chemical plant facilities.', link: '' },
        { src: 'assets/images/services/Sector_Hospitals.png', title: 'HOSPITALS', description: 'Structural solutions ensuring safety and adaptability in hospital building designs.', link: '' },
        { src: 'assets/images/services/Sector_ManufacturingPlants.png', title: 'Manufacturing plants', description: 'Engineering expertise for robust and streamlined manufacturing plant structures.', link: '' },
        { src: 'assets/images/services/Sector_Metros.png', title: 'Metros', description: 'Precise engineering solutions for complex and efficient metro infrastructure projects.', link: '' },
        { src: 'assets/images/services/Sector_Roads.png', title: 'Road ways', description: 'Structural designs for durable and high-capacity roadway systems.', link: '' },
        { src: 'assets/images/services/Sector_Waterwaste.png', title: 'Water & waste', description: 'Sustainable engineering for essential water and waste management facilities.', link: '' },
        { src: 'assets/images/services/Sector_tunnel.png', title: 'Tunnel', description: 'Comprehensive solutions for safe and long-lasting tunnel engineering projects.', link: '' },
      ],
    },
  ];
}
