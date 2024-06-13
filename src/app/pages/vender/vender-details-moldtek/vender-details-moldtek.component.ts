import { Component,ElementRef,HostListener, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vender-details-moldtek',

  templateUrl: './vender-details-moldtek.component.html',
  styleUrls: ['../vender-detail-common-style.component.scss', './vender-details-moldtek.component.scss']
  // styleUrl: './vender-details-moldtek.component.scss'
})
export class VenderDetailsMoldtekComponent {

   ourEngineers = [
    {
      name: "Santosh Kurade",
      title: "Chief Project Manager",
      des: "Work Allocation ,QA process monitoring ",
      img: 'assets/images/moldtek/placeholder.jpg',
    },
    {
      name: "Chandra shekhar I",
      title: "Dy.Manager-QA, QMS&ISMS-MR /CISO",
      des: "QMS& ISMS Implementaion & Monitoring,Lead Auditor for ISO 9001:2015,ISO 27001 Internal Auditor.",
      img: 'assets/images/moldtek/placeholder.jpg',
    },
    {
      name: "M.Srikanth,PE",
      title: "Chief Engineer ,PE",
      des: "P.E stamping,Connection Design calculations &Project management",
      img: 'assets/images/moldtek/placeholder.jpg',
    },
    {
      name: "M.Murali",
      title: "Asst.General Manager",
      des: "Mathcad,Ram connections",
      img: 'assets/images/moldtek/placeholder.jpg',
    },
  ];
  
   projects = [
    {
        type: 'Structural detailing',
        name: 'Molson Coors',
        location: 'Golden, Colorado',
        country: 'assets/images/ui/code1.png',
        image: 'assets/images/moldtek/placeholder.jpg',
        description: '3025',
    },
    {
        type: 'steel detailing',
        name: 'Domtar Project Smoky Processing, Pulping & Coarse Screening',
        location: 'Kingsport, TN',
        country: 'assets/images/ui/code1.png',
        image: 'assets/images/moldtek/placeholder.jpg',
        description: '1986',
    },
    {
        type: 'Structural detailing',
        name: 'Sonoco Stock Preparation Building',
        country: 'assets/images/ui/code1.png',
        location: 'Hartsville, SC',
        image: 'assets/images/moldtek/placeholder.jpg',
        description: '500',
    },
    {
        type: 'steel detailing',
        name: 'Fedex Kingman',
        country: 'assets/images/ui/code1.png',
        location: 'Kingman, Arizona 86401',
        image: 'assets/images/moldtek/placeholder.jpg',
        description: '870',
    },
    {
        type: 'steel detailing',
        name: 'CMH062 Building 5',
        country: 'assets/images/ui/country3.png',
        location: 'New Albany, OH',
        image: 'assets/images/moldtek/placeholder.jpg',
        description: '2800',
    },
    {
        type: 'Structural detailing',
        name: 'Baptist Health Hardin Campus',
        country: 'assets/images/ui/code1.png',
        location: 'Elizabethtown, KY',
        image: 'assets/images/moldtek/placeholder.jpg',
        description: '2067',
    },
    {
      type: 'Structural detailing',
      name: 'Henry Ford Macomb Hospital',
      country: 'assets/images/ui/code1.png',
      location: 'Medina, WA',
      image: 'assets/images/moldtek/placeholder.jpg',
      description: '1866',
  },
  {
    type: 'Structural detailing',
    name: 'Morrow High School',
    country: 'assets/images/ui/code1.png',
    location: 'Jonesboro, GA',
    image: 'assets/images/moldtek/placeholder.jpg',
    description: '1866',
},

{
  type: 'Structural detailing',
  name: 'Woods Creek Elementary School',
  country: 'assets/images/ui/code1.png',
  location: 'Holly Springs, NC',
  image: 'assets/images/moldtek/placeholder.jpg',
  description: '887',
},
{
  type: 'Structural detailing',
  name: 'Kingsdale Senior Living',
  country: 'assets/images/ui/code1.png',
  location: 'Columbus, Ohio',
  image: 'assets/images/moldtek/placeholder.jpg',
  description: '850',
},
{
  type: 'Structural detailing',
  name: 'Necco Street',
  country: 'assets/images/ui/code1.png',
  location: 'Boston, MA',
  image: 'assets/images/moldtek/placeholder.jpg',
  description: '850',
},
{
  type: 'Structural detailing',
  name: 'Project Novel Rino',
  country: 'assets/images/ui/code1.png',
  location: 'Denver, CO',
  image: 'assets/images/moldtek/placeholder.jpg',
  description: '200',
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
