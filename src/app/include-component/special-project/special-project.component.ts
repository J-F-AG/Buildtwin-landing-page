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
            mobile: 'assets/images/services/mobile-Sector_datacenter',
            fallback: 'assets/images/services/Sector_datacenter'
          },
          title: 'Data Center', description: 'Specialized structural engineering services for mission-critical data center facilities.', link: '/sector/data-centre' },

        { id:2, 
          src: {
            mobile: 'assets/images/services/mobile-Sector_powerplant',
            fallback: 'assets/images/services/Sector_powerplant'
          },
          title: 'Power plant', description: 'Advanced structural engineering for resilient and efficient power plant facilities.', link: '/sector/powerplant' },

          { id: 10,
            src: {
              mobile: 'assets/images/services/mobile-Sector_Bridges',
              fallback: 'assets/images/services/Sector_Bridges'
            },
            title: 'Bridge', description: 'Expert bridge engineering services for durable and load-bearing infrastructure.', link: '/sector/bridge' },

            { id: 15,
              src: {
                mobile: 'assets/images/services/mobile-Sector_Roads',
                fallback: 'assets/images/services/Sector_Roads'
              },
              title: 'Road ways', description: 'Structural designs for durable and high-capacity roadway systems.', link: '/sector/roads' },

              { id: 16,
                src: {
                  mobile: 'assets/images/services/mobile-Sector_Waterwaste',
                  fallback: 'assets/images/services/Sector_Waterwaste'
                }, 
                title: 'Water & waste', description: 'Sustainable engineering for essential water and waste management facilities.', link: '/sector/water-and-waste' },

                { id: 12,
                  src: {
                    mobile: 'assets/images/services/mobile-Sector_Hospitals',
                    fallback: 'assets/images/services/Sector_Hospitals'
                  },
                  title: 'HOSPITALS', description: 'Structural solutions ensuring safety and adaptability in hospital building designs.', link: '/sector/hospital' },

                  { id: 13,
                    src: {
                      mobile: 'assets/images/services/mobile-Sector_ManufacturingPlants',
                      fallback: 'assets/images/services/Sector_ManufacturingPlants'
                    },
                    title: 'Manufacturing plants', description: 'Engineering expertise for robust and streamlined manufacturing plant structures.', link: '/sector/manufacturing-plant' },

                    { id: 9,
                      src: {
                        mobile: 'assets/images/services/mobile-Sector_theaters',
                        fallback: 'assets/images/services/Sector_theaters'
                      },
                      title: 'Theaters', description: 'Creative structural solutions for iconic and immersive theater complex projects.', link: '/sector/theaters' },

                      {
                        id: 4,
                        src: {
                          mobile: 'assets/images/services/mobile-Sector_commercialBuilding',
                          fallback: 'assets/images/services/Sector_commercialBuilding'
                        },
                        title: 'Commercial building',
                        description: 'Comprehensive engineering solutions for modern and dynamic commercial building projects.',
                        link: '/sector/commercial-building'
                      },

                      { id: 5,
                        src: {
                          mobile: 'assets/images/services/mobile-Sector_industrialbulidings',
                          fallback: 'assets/images/services/Sector_industrialbulidings'
                        },
                        title: 'INDUSTRIAL BUILDINGS', description: 'Tailored structural designs for efficient and robust industrial building facilities.', link: '/sector/industrial-building' },

                        { id: 7,
                          src: {
                            mobile: 'assets/images/services/mobile-Sector_residentialbuildings',
                            fallback: 'assets/images/services/Sector_residentialbuildings'
                          },
                          title: 'Residential Buildings', description: 'End-to-end structural services for safe and sustainable residential building designs.', link: '/sector/residential-building' },

                          { id: 11,
                            src: {
                              mobile: 'assets/images/services/mobile-Sector_ChemicalPlants',
                              fallback: 'assets/images/services/Sector_ChemicalPlants'
                            },
                            title: 'Chemical plants', description: 'Specialized designs for safe and efficient chemical plant facilities.', link: '/sector/chemical-plant' },


                            { id: 8,
                              src: {
                                mobile: 'assets/images/services/mobile-Sector_schools',
                                fallback: 'assets/images/services/Sector_schools'
                              },
                              title: 'Schools', description: 'Optimized engineering solutions for functional and future-ready school building infrastructures.', link: '/sector/schools' },

        {
          id:3,
          src: {
            mobile: 'assets/images/services/mobile-Sector_Airports',
            fallback: 'assets/images/services/Sector_Airports'
          },
          title: 'AIRPORTS',
          description: 'Tailored structural services for expansive and modern airport infrastructure.',
          link: '/sector/airports'
        },


        { id: 17,
          src: {
            mobile: 'assets/images/services/mobile-Sector_tunnel',
            fallback: 'assets/images/services/Sector_tunnel'
          },
          title: 'Tunnel', description: 'Comprehensive solutions for safe and long-lasting tunnel engineering projects.', link: '/sector/tunnels' },
        

        
          { id: 14,
            src: {
                mobile: 'assets/images/services/mobile-Sector_Metros',
                fallback: 'assets/images/services/Sector_Metros'
            },
            title: 'Metros', description: 'Precise engineering solutions for complex and efficient metro infrastructure projects.', link: '/sector/metro' },


        // { id: 6,
        //   src: {
        //     mobile: 'assets/images/services/mobile-Sector_pre-cast',
        //     fallback: 'assets/images/services/Sector_pre-cast'
        //   },
        //   title: 'PRE-CAST', description: 'Expert detailing and engineering services for precision-driven precast industry projects.', link: '' },
        

        

        

        

       

        

        

        

        

        

        
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
