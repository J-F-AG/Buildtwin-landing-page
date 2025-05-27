import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-steel-detailing-usa-services-offered',
  // standalone: true,
  // imports: [],
  templateUrl: './services-offered.component.html',
  styleUrl: './services-offered.component.scss'
})
export class SteelDetailingUsaServicesOfferedComponent {

    splitArray(dataArray: any[], x: number) {
      const result = [];
      for (let i = 0; i < dataArray.length; i += x) {
        const slice = dataArray.slice(i, i + x);
        result.push(slice);
      }
      console.log({ result });
  
      return result;
    }
  
      // discoverProjectSection
      projectsArray = [
        { img: 'assets/images/home/Airports.png', projectTitle: 'Airports', link: ''},
        { img: 'assets/images/home/commercial building.png', projectTitle: 'Residential, commercial and industrial buildings', link: ''},
        { img: 'assets/images/home/data center.png', projectTitle: 'Data centers', link: '/sector/data-centre'},
        { img: 'assets/images/home/power plant.png', projectTitle: 'Power plants', link: '/sector/powerplant'},
        { img: 'assets/images/home/Sector_ChemicalPlants.png', projectTitle: 'Chemical plants', link: ''},
        { img: 'assets/images/home/Sector_ManufacturingPlants.png', projectTitle: 'Manufacturing plants', link: ''},
        // //{ img: 'assets/images/solutionProvider2.jpg', projectTitle: 'Parking structures', link: ''},
        { img: 'assets/images/home/schools.png', projectTitle: 'Schools', link: ''},
        { img: 'assets/images/home/Sector_Hospitals.png', projectTitle: 'Hospitals', link: ''},
        // //{ img: 'assets/images/solutionProvider2.jpg', projectTitle: 'Warehouses', link: ''},
        { img: 'assets/images/home/Sector_Bridges.png', projectTitle: 'Bridges, tunnels, water & waste', link: ''},
        { img: 'assets/images/home/Sector_Metros.png', projectTitle: 'Metros', link: ''},
        { img: 'assets/images/home/Sector_Roads.png', projectTitle: 'Roadways', link: ''},
        // { img: 'assets/images/home/pre-cast.png', projectTitle: 'PRE-CAST', link: ''},
        // { img: 'assets/images/home/residential buildings.png', projectTitle: 'Residential Buildings', link: ''},
    
      ]
    
      // discoverProjects = this.splitArray(this.projectsArray, 4);
  
    customOptions: OwlOptions = {
      margin: 25,
      loop: false,
      dots: true,
      autoplay: false,
      autoplayHoverPause: false,
      navText:['<button type="button" class="btn slider-left-btn"> </button>','<button type="button" class="btn slider-right-btn"> </button>'],
      nav: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }      
    }
  
  
  }  
