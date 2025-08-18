import { Component,ElementRef,HostListener, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vender-details-caldim',

  templateUrl: './vender-details-caldim.component.html',
  styleUrls: ['../vender-detail-common-style.component.scss', './vender-details-caldim.component.scss']
  // styleUrl: './vender-details-caldim.component.scss'
})
export class VenderDetailsCaldimComponent {

   ourEngineers = [
    {
      name: "Balasubramaniyam",
      title: "Director",
      des: "Mechanical Engineering graduate and NISD certified structural steel/Misc detailer in the field of steel detailing, possessing a solid foundation in mechanical engineering. With extensive onsite experience across commercial, industrial, and oil and gas sectors, he brings a comprehensive understanding of the intricacies involved in structural design and fabrication. His expertise includes translating engineering designs into precise and accurate detailed drawings, ensuring compliance with industry standards and regulations.      ",
      img: 'assets/images/moldtek/placeholder.jpg',
     
    },
    {
      name: "Uvaraj.K",
      title: "Director",
      des: "Civil Engineering graduate with specialized proficiency in steel detailing and construction techniques, coupled with strong leadership capabilities.” This succinctly communicates his educational background, technical skills, and leadership qualities. If you need a more detailed description, you could expand on his experience, highlighting specific projects he’s worked on, any notable achievements, and how he’s demonstrated his leadership skills in those contexts. ",
      img: 'assets/images/moldtek/placeholder.jpg',
     
    },
    {
      name: "Swaminathan",
      title: "Technical Advisor",
      des: "Swami is the Technical Advisor and Business Development Manager. He is a Diploma holder in Ship Building Technology, with about 50 years of experience in Steel Detailing of structures for various disciplines like Ship Building, Offshore structures, Power plants, Mining structures, American Industrial as well as commercial buildings. His experience includes serving in different capacities as detailer, checker, Project manager and General manager.",
      img: 'assets/images/moldtek/placeholder.jpg',
     
    },
    {
      name: "Vijay Anand",
      title: "General Manager",
      des: "Vijay has an Architectural engineering background and carries with him a diversified & combined rich work experience in Architectural. Structural, Precast & Rebar disciplines. His vast exposure in engineering disciplines eases & speeds up project co-ordination & RFI process for a smooth work outflow. He has also assisted Precasters/Fabricators with Marketing, helping in presentation for bidding. He is passionate, detail oriented & result driven, a strategic thinker & problem-solving with strong Management leadership & interpersonal skills, a team player with effective communication.",
      img: 'assets/images/moldtek/placeholder.jpg',
     
    },
  ];
  
   projects = [
    {
        type: 'Structural detailing',
        name: 'Upper Cheasapeake New Surgery cen#re expansion',
        location: 'USA',
        country: 'assets/images/ui/code1.png',
        image: 'assets/images/caldim/project1.png',
        description: '392 Tons',
    },
    {
        type: 'steel detailing',
        name: 'Neighbourhood credi# union',
        location: 'Sherman, Texas',
        country: 'assets/images/ui/code1.png',
        image: 'assets/images/caldim/project2.png',
        description: '25 Tons',
    },
    {
        type: 'Structural detailing',
        name: 'WF6',
        country: 'assets/images/ui/code1.png',
        location: 'Tamaqua, PA',
        image: 'assets/images/caldim/project3.png',
        description: '502 Tons',
    },
    {
        type: 'steel detailing',
        name: 'Hanimaadhoo International Airpor',
        country: 'assets/images/ui/code1.png',
        location: 'Maldives',
        image: 'assets/images/caldim/project4.png',
        description: '1045 #ons',
    },
    {
        type: 'steel detailing',
        name: 'Sacred Heart Catholic Church',
        country: 'assets/images/ui/country3.png',
        location: 'Carrollton, Texas',
        image: 'assets/images/caldim/project5.png',
        description: '230 Tons',
    },
    {
        type: 'Structural detailing',
        name: 'ROD’N REEL Resor#',
        country: 'assets/images/ui/code1.png',
        location: 'Maryland',
        image: 'assets/images/caldim/project6.png',
        description: '211 Tons',
    },
    {
      type: 'Structural detailing',
      name: 'Secondary Crusher',
      country: 'assets/images/ui/code1.png',
      location: 'Medina, WA',
      image: 'assets/images/caldim/project7.png',
      description: '73 Tons',
  },
    ];

filteredProjects = this.projects;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 


  }
  showPopup=false;


  selectedOption: string = 'gmt'; // Default selected option
  timeText: string = '10:00 AM to 07:00 PM'; // Default time text


  isSticky: boolean = false;
  activeSection: string = 'about'; // Default active section


  reviewsSlides: OwlOptions = {
    items: 5,
nav: true,
margin: 20,
dots: false,
loop: true,
autoWidth:true,
autoplay: false,
autoplayHoverPause: false,

navText: [
  "<i class='ti ti-chevron-left'></i>",
  "<i class='ti ti-chevron-right'></i>",
],
responsive: {
  0: {
    items: 2
  },
  515: {
    items: 1
  },
  768: {
    items: 4
  },
  990: {
    items: 5
  },
  1400: {
    items: 6
  }
}
}

heroSlides: OwlOptions = {
    items: 1,
    nav: true,
    margin: 20,
    dots: false,
    loop: true,
    autoWidth: true,
    autoplay: false,
    autoplayHoverPause: false,

    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],
   
  }



aboutSlider: OwlOptions = {
  items: 1,
  nav: true,
  margin: 0,
  dots: true,
  loop: true,
  autoplay: true,
  autoWidth:true,
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
    this.loadScript();
}
loadScript() {
  // Create script element
  const script = this.renderer.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

  // Append script element to the body
  this.renderer.appendChild(this.elRef.nativeElement, script);
}
call(){
  this.showPopup =true
  }
  closePopup(){
    this.showPopup =false
  
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
   filterProjectsByType(selectedType:string) {
    return this.projects.filter(project => project.type === selectedType);
}
onTypeChange(event: any): void {
  const selectedType = event.target.value;
  if (selectedType === 'all') {
      this.filteredProjects = this.projects;
  } else {
      this.filteredProjects = this.filterProjectsByType(selectedType);
  }
}
}
