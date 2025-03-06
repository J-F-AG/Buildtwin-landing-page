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
  customOptions: OwlOptions | null = null;
  
  slides = [
    {
      
      images: [
        { id:1,
          src: {
            webp: 'assets/images/services/Sector_datacenter.webp',
            fallback: 'assets/images/services/Sector_datacenter.png'
          },
          title: 'Data Center', description: 'Specialized structural engineering services for mission-critical data center facilities.', link: '/sector/data-centre' },

        { id:2, 
          src: {
            webp: 'assets/images/services/Sector_powerplant.webp',
            fallback: 'assets/images/services/Sector_powerplant.png'
          },
          title: 'Power plant', description: 'Advanced structural engineering for resilient and efficient power plant facilities.', link: '/sector/power-plant' },

          { id: 10,
            src: {
              webp: 'assets/images/services/Sector_Bridges.webp',
              fallback: 'assets/images/services/Sector_Bridges.png'
            },
            title: 'Bridge', description: 'Expert bridge engineering services for durable and load-bearing infrastructure.', link: '/sector/bridge' },

            { id: 15,
              src: {
                webp: 'assets/images/services/Sector_Roads.webp',
                fallback: 'assets/images/services/Sector_Roads.png'
              },
              title: 'Road ways', description: 'Structural designs for durable and high-capacity roadway systems.', link: '/sector/roads' },

              { id: 16,
                src: {
                  webp: 'assets/images/services/Sector_Waterwaste.webp',
                  fallback: 'assets/images/services/Sector_Waterwaste.png'
                }, 
                title: 'Water & waste', description: 'Sustainable engineering for essential water and waste management facilities.', link: '/sector/water-and-waste' },

                { id: 12,
                  src: {
                    webp: 'assets/images/services/Sector_Hospitals.webp',
                    fallback: 'assets/images/services/Sector_Hospitals.png'
                  },
                  title: 'HOSPITALS', description: 'Structural solutions ensuring safety and adaptability in hospital building designs.', link: '/sector/hospital' },

                  { id: 13,
                    src: {
                      webp: 'assets/images/services/Sector_ManufacturingPlants.webp',
                      fallback: 'assets/images/services/Sector_ManufacturingPlants.png'
                    },
                    title: 'Manufacturing plants', description: 'Engineering expertise for robust and streamlined manufacturing plant structures.', link: '/sector/manufacturing-plant' },

                    { id: 9,
                      src: {
                        webp: 'assets/images/services/Sector_theaters.webp',
                        fallback: 'assets/images/services/Sector_theaters.png'
                      },
                      title: 'Theaters', description: 'Creative structural solutions for iconic and immersive theater complex projects.', link: '/sector/theaters' },

                      {
                        id: 4,
                        src: {
                          webp: 'assets/images/services/Sector_commercialBuilding.webp',
                          fallback: 'assets/images/services/Sector_commercialBuilding.png'
                        },
                        title: 'Commercial building',
                        description: 'Comprehensive engineering solutions for modern and dynamic commercial building projects.',
                        link: '/sector/commercial-building'
                      },

        {
          id:3,
          src: {
            webp: 'assets/images/services/Sector_Airports.webp',
            fallback: 'assets/images/services/Sector_Airports.png'
          },
          title: 'AIRPORTS',
          description: 'Tailored structural services for expansive and modern airport infrastructure.',
          link: ''
        },

        

        { id: 5,
          src: {
            webp: 'assets/images/services/Sector_industrialbulidings.webp',
            fallback: 'assets/images/services/Sector_industrialbulidings.png'
          },
          title: 'INDUSTRIAL BUILDINGS', description: 'Tailored structural designs for efficient and robust industrial building facilities.', link: '' },

        { id: 6,
          src: {
            webp: 'assets/images/services/Sector_pre-cast.webp',
            fallback: 'assets/images/services/Sector_pre-cast.png'
          },
          title: 'PRE-CAST', description: 'Expert detailing and engineering services for precision-driven precast industry projects.', link: '' },
        { id: 7,
          src: {
            webp: 'assets/images/services/Sector_residentialbuildings.webp',
            fallback: 'assets/images/services/Sector_residentialbuildings.png'
          },
          title: 'Residential Buildings', description: 'End-to-end structural services for safe and sustainable residential building designs.', link: '' },

        { id: 8,
          src: {
            webp: 'assets/images/services/Sector_schools.webp',
            fallback: 'assets/images/services/Sector_schools.png'
          },
          title: 'Schools', description: 'Optimized engineering solutions for functional and future-ready school building infrastructures.', link: '' },

        

        

        { id: 11,
          src: {
            webp: 'assets/images/services/Sector_ChemicalPlants.webp',
            fallback: 'assets/images/services/Sector_ChemicalPlants.png'
          },
          title: 'Chemical plants', description: 'Specialized designs for safe and efficient chemical plant facilities.', link: '' },

        

        

        { id: 14,
          src: {
              webp: 'assets/images/services/Sector_Metros.webp',
              fallback: 'assets/images/services/Sector_Metros.png'
          },
          title: 'Metros', description: 'Precise engineering solutions for complex and efficient metro infrastructure projects.', link: '' },

        

        

        { id: 17,
          src: {
            webp: 'assets/images/services/Sector_tunnel.webp',
            fallback: 'assets/images/services/Sector_tunnel.png'
          },
          title: 'Tunnel', description: 'Comprehensive solutions for safe and long-lasting tunnel engineering projects.', link: '' },
      ],
    },
  ];
  
  ngOnInit(): void {
    if (this.hideItem && this.hideItem.length > 0) {
      this.slides[0].images = this.slides[0].images.filter(image => !this.hideItem.includes(image.id));
    }
    this.sliderInit();
  }

  sliderInit() {
    this.customOptions = {
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
    };
  }
}
