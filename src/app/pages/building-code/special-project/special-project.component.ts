import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-special-project-building-code',
  templateUrl: './special-project.component.html',
  styleUrls: ['../../../include-component/special-project/special-project.component.scss','./special-project.component.scss']
})
// ./include-component/special-project/special-project.component
export class SpecialProjectBuildingCodeComponent {
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
          description: '50+ Vendors',
          link: ''
        },
        {
          src: 'assets/images/services/Sector_commercialBuilding.png',
          title: 'Commercial building',
          description: '20+ Vendors',
          link: ''
        },
        { src: 'assets/images/services/Sector_datacenter.png', title: 'Data Center', description: '10+ Vendors', link: '/sector/data-centre'},
        { src: 'assets/images/services/Sector_industrialbulidings.png', title: 'INDUSTRIAL BUILDINGS', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_powerplant.png', title: 'Power plant', description: '10+ Vendors', link: '/sector/powerplant'},
        { src: 'assets/images/services/Sector_pre-cast.png', title: 'PRE-CAST', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_residentialbuildings.png', title: 'Residential Buildings', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_schools.png', title: 'Schools', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_theaters.png', title: 'Theaters', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_Bridges.png', title: 'Bridge', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_ChemicalPlants.png', title: 'Chemical plants', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_Hospitals.png', title: 'HOSPITALS', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_ManufacturingPlants.png', title: 'Manufacturing plants', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_Metros.png', title: 'Metros', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_Roads.png', title: 'Road ways', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_Waterwaste.png', title: 'Water & waste', description: '10+ Vendors', link: ''},
        { src: 'assets/images/services/Sector_tunnel.png', title: 'Tunnel', description: '10+ Vendors', link: ''},
      ],
    },
  ];
}
