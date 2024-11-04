import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-bim-services-offered',
  // standalone: true,
  // imports: [],
  templateUrl: './services-offered.component.html',
  styleUrl: './services-offered.component.scss'
})
export class BimServicesOfferedComponent {

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
        { img: 'assets/images/solutionProvider1.jpg', projectTitle: 'Airports'},
        { img: 'assets/images/solutionProvider2.jpg', projectTitle: 'Residential, commercial and industrial buildings'},
        { img: 'assets/images/solutionProvider3.jpg', projectTitle: 'Data centers'},
        { img: 'assets/images/solutionProvider5.jpg', projectTitle: 'Power plants'},
        { img: 'assets/images/solutionProvider11.jpg', projectTitle: 'Chemical plants'},
        { img: 'assets/images/solutionProvider13.jpg', projectTitle: 'Manufacturing plants'},
        { img: 'assets/images/solutionProvider2.jpg', projectTitle: 'Parking structures'},
        { img: 'assets/images/solutionProvider8.jpg', projectTitle: 'Schools'},
        { img: 'assets/images/solutionProvider12.jpg', projectTitle: 'Hospitals'},
        { img: 'assets/images/solutionProvider2.jpg', projectTitle: 'Warehouses'},
        { img: 'assets/images/solutionProvider10.jpg', projectTitle: 'Bridges, tunnels, water & waste'},
        { img: 'assets/images/solutionProvider14.jpg', projectTitle: 'Metros'},
        { img: 'assets/images/solutionProvider15.jpg', projectTitle: 'Roadways'},
        // { img: 'assets/images/solutionProvider6.jpg', projectTitle: 'PRE-CAST'},
        // { img: 'assets/images/solutionProvider7.jpg', projectTitle: 'Residential Buildings'},
    
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
