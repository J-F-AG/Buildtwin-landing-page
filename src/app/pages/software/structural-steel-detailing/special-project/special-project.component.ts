import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-special-project-structural-steel-detailing-software',
  templateUrl: './special-project.component.html',
  styleUrls: ['../../../../include-component/special-project/special-project.component.scss','./special-project.component.scss']
})
// ./include-component/special-project/special-project.component
export class SpecialProjectStructuralSteelDetailingSoftwareComponent {
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
          src: 'assets/images/services/Sector_Airports',
          mobile: 'assets/images/services/mobile-Sector_Airports',
          title: 'AIRPORTS',
          description: '50+ Vendors',
          link: ''
        },
        {
          src: 'assets/images/services/Sector_commercialBuilding',
          mobile: 'assets/images/services/mobile-Sector_commercialBuilding',
          title: 'Commercial building',
          description: '20+ Vendors',
          link: ''
        },
        { 
          src: 'assets/images/services/Sector_datacenter', 
          mobile: 'assets/images/services/mobile-Sector_datacenter', 
          title: 'Data Center', description: '10+ Vendors', link: '/sector/data-centre' },
        { 
          src: 'assets/images/services/Sector_industrialbulidings', 
          mobile: 'assets/images/services/mobile-Sector_industrialbulidings', 
          title: 'INDUSTRIAL BUILDINGS', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_powerplant', 
          mobile: 'assets/images/services/mobile-Sector_powerplant', 
          title: 'Power plant', description: '10+ Vendors', link: '/sector/powerplant' },
        { 
          src: 'assets/images/services/Sector_pre-cast', 
          mobile: 'assets/images/services/mobile-Sector_pre-cast', 
          title: 'PRE-CAST', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_residentialbuildings', 
          mobile: 'assets/images/services/mobile-Sector_residentialbuildings', 
          title: 'Residential Buildings', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_schools', 
          mobile: 'assets/images/services/mobile-Sector_schools', 
          title: 'Schools', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_theaters', 
          mobile: 'assets/images/services/mobile-Sector_theaters', 
          title: 'Theaters', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_Bridges', 
          mobile: 'assets/images/services/mobile-Sector_Bridges', 
          title: 'Bridge', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_ChemicalPlants', 
          mobile: 'assets/images/services/mobile-Sector_ChemicalPlants', 
          title: 'Chemical plants', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_Hospitals', 
          mobile: 'assets/images/services/mobile-Sector_Hospitals', 
          title: 'HOSPITALS', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_ManufacturingPlants', 
          mobile: 'assets/images/services/mobile-Sector_ManufacturingPlants', 
          title: 'Manufacturing plants', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_Metros', 
          mobile: 'assets/images/services/mobile-Sector_Metros', 
          title: 'Metros', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_Roads', 
          mobile: 'assets/images/services/mobile-Sector_Roads', 
          title: 'Road ways', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_Waterwaste', 
          mobile: 'assets/images/services/mobile-Sector_Waterwaste', 
          title: 'Water & waste', description: '10+ Vendors', link: '' },
        { 
          src: 'assets/images/services/Sector_tunnel', 
          mobile: 'assets/images/services/mobile-Sector_tunnel', 
          title: 'Tunnel', description: '10+ Vendors', link: '' },
      ],
    },
  ];
}
