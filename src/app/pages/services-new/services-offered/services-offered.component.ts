import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services-offered',
  // standalone: true,
  // imports: [],
  templateUrl: './services-offered.component.html',
  styleUrl: './services-offered.component.scss'
})
export class ServicesOfferedComponent {

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
        { img: 'assets/images/airportImg.jpg', projectTitle: 'Airports'},
        { img: 'assets/images/commercialBulding.jpg', projectTitle: 'Commercial Building'},
        { img: 'assets/images/airportImg.jpg', projectTitle: 'Airports'},
        { img: 'assets/images/commercialBulding.jpg', projectTitle: 'Commercial Building'}
    
      ]
    
      discoverProjects = this.splitArray(this.projectsArray, 4);
  
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
            items:2
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
