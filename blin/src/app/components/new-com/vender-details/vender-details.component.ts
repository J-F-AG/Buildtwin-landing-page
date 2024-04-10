import { Component,HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vender-details',

  templateUrl: './vender-details.component.html',
  styleUrl: './vender-details.component.scss'
})
export class VenderDetailsComponent {
  selectedOption: string = 'gmt'; // Default selected option
  timeText: string = '10:00 AM to 07:00 PM'; // Default time text


  isSticky: boolean = false;
  activeSection: string = 'about'; // Default active section


  reviewsSlides: OwlOptions = {
    items: 6,
nav: true,
margin: 0,
dots: false,
loop: true,
autoplay: false,
autoplayHoverPause: false,
navText: [
  "<i class='ti ti-chevron-left'></i>",
  "<i class='ti ti-chevron-right'></i>",
]
}


aboutSlider: OwlOptions = {
  items: 1,
  nav: true,
  margin: 0,
  dots: true,
  loop: true,
  autoplay: true,
  autoplayHoverPause: false,
  navText: [
    "<i class='ti ti-chevron-left'></i>",
    "<i class='ti ti-chevron-right'></i>",
  ]

}

@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  this.isSticky = scrollPosition >= 100;

  if (scrollPosition >= 200) {
    document.body.classList.add('removeDefaultHeader');
  } else {
    // document.body.classList.remove('scrolled');
  }

  // Determine active section
  const sections = document.querySelectorAll('.scrollSection');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionId = section.getAttribute('id');
    if (sectionTop <= 200 && sectionTop >= -100 && sectionId) { // Check if sectionId is not null
      this.activeSection = sectionId;
    }
  });
}

scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    const scrollOffset = section.getBoundingClientRect().top - 200; // Adjusted offset
    window.scrollBy({ top: scrollOffset, behavior: 'smooth' });
  }
}

ngOnInit(){
  
}

onSelectChange() {
    switch (this.selectedOption) {
      case 'gmt':
        this.timeText = '10:00 AM to 07:00 PM';
        break;
      case 'est':
        this.timeText = '09:00 AM to 06:00 PM';
        break;
      case 'pst':
        this.timeText = '07:00 AM to 04:00 PM';
        break;
      default:
        this.timeText = '10:00 AM to 07:00 PM'; // Default value
        break;
    }
  }
}
