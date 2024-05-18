import { Component,ElementRef,HostListener, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vender-details-sublime',

  templateUrl: './vender-details-sublime.component.html',
  styleUrl: './vender-details-sublime.component.scss'
})
export class VenderDetailsSublimeComponent {

   ourEngineers = [
    {
      img: "assets/images/ui/subline/profile1.png",
      name: "Balachandran Krishnaraj",
      title: "Technical Head | Tekla | Modeling",
      des: "„With his experience and expertise from large <br>international projects, Balachandran is always able to <br>lead construction projects successfully.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at sublime structures",
      expertise: ["Miscellaneous steel", "Estimodeling", "AESS"]
    },
    {
       img: "assets/images/ui/subline/profile2.png",
      name: "Kannan Palanivel",
      title: "Technical Head | Tekla | Erection",
      des: "Kannan is a detail-oriented project <br>manager who enjoys working on and <br>solving complex technical issues.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at sublime structures",
      expertise: ["Quality Control", "Project Management", "OSHA"]
    },
 
    {
       img: "assets/images/ui/subline/profile3.png",
      name: "Aravind Ramachandran",
      title: "Technical Head | Tekla | Modeling",
      des: "„Through his technical expertise in structural <br>design and engineering, Aravind is able to <br>deliver high-end outcomes in each project <br>we worked on.”",
      medalInfo: "Gold Medalist DTU",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at sublime structures",
      expertise: ["Complex Modeling", "Material Takeoff", "Concept Development"]
    },
    
 
    {
       img: "assets/images/ui/subline/profile4.png",
      name: "Abinesh Rajendran",
      title: "Technical Head | Tekla | QC | Sales",
      des: "Abinesh is a competent and friendly <br>contact person with whom we are happy <br>to work.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at sublime structures",
      expertise: ["Quality Control", "Document Control", "Timber"]
    },
    {
       img: "assets/images/ui/subline/profile5.png",
      name: "Nithishkumar Pachiappan",
      title: "B.Sc. <br>Architect",
      des: "„Through her calm and thoughtful manner, <br>Nithishkumar Pachiappan always provides us with the desired <br>results.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at sublime structures",
      expertise: ["Erection Drawing", "Modeling"]
    },
    {
       img: "assets/images/ui/subline/profile6.png",
      name: "Pradeepkumar",
      title: "Project Manager Electrical <br>Engineering",
      des: "„Pradeepkumar impresses with his many <br>years of experience and always provides <br>technical and commercial solutions.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at sublime structures",
      expertise: ["Ornamental Steel", "Detailing As Per AISC", "Project Management"]
    },
    {
       img: "assets/images/ui/subline/profile7.png",
      name: "Nivasraja Ramasamy",
      title: "Technical Head | SDS2",
      des: "„Nivasraja Ramasamy impresses with his many <br>years of experience and always provides <br>technical and commercial solutions.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at sublime structures",
      expertise: ["Tekla EPM Connection Concepts", "Decorative Steel"]
    },
    {
       img: "assets/images/ui/subline/profile8.png",
      name: "Hariharan Murugan",
      title: "Project Engineer",
      des: "„Hariharan Murugan impresses with his many <br>years of experience and always provides <br>technical and commercial solutions.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at sublime structures",
      expertise: ["Estimodeling", "Material Takeoff"]
    }
  ];
  
   projects = [
    {
        type: 'Structural and miscellaneous steel detailing and designing.',
        name: 'Samsung Trestle project',
        location: 'USA',
        country: 'assets/images/ui/code1.png',
        image: 'assets/images/ui/subline/project1.png',
        description: 'Completing 1200+ shop drawings and 300+ is certainly our key achievement.',
    },
    {
        type: 'Structural and miscellaneous steel detailing and designing.',
        name: 'Anheuser Busch Evaporator Condenser',
        location: 'USA',
        country: 'assets/images/ui/code1.png',
        image: 'assets/images/ui/subline/project2.png',
        description: 'Completed within 3 weeks despite 4 RFIs with over 50 questions',
    },
    {
        type: 'Structural and miscellaneous steel detailing.',
        name: 'AztecHotel',
        country: 'assets/images/ui/code1.png',
        location: 'USA',
        image: 'assets/images/ui/subline/project3.png',
        description: 'Hotel project in San Antonio, Texas, with 80 tons of steel featuring trusses',
    },
    {
        type: 'Structural and miscellaneous steel detailing and designing.',
        name: 'Cems Analyzers',
        country: 'assets/images/ui/code1.png',
        location: 'USA',
        image: 'assets/images/ui/subline/project4.png',
        description: 'Structural and miscellaneous steel detailing SDS2 calculations',
    },
    {
        type: 'Structural and ornamental steel detailing.',
        name: 'Bay Pond Conservatory',
        country: 'assets/images/ui/country3.png',
        location: 'India',
        image: 'assets/images/ui/subline/project5.png',
        description: 'Zero fit-up issues with glass panels',
    },
    {
        type: 'Structural and miscellaneous steel detailing and designing.',
        name: 'Oasis at Lakeport',
        country: 'assets/images/ui/code1.png',
        location: 'USA',
        image: 'assets/images/ui/subline/project6.png',
        description: '5 buildings in an amusement park in Osage Beach, Missouri, with 120 tons of steel',
    },
    {
      type: 'Structural and miscellaneous steel detailing.',
      name: 'Winchester Terminal',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/ui/subline/project7.png',
      description: 'Structural and miscellaneous steel detailing, connection design',
  },
  {
    type: 'Structural and miscellaneous steel detailing and designing.',
    name: 'VCM#2 HAPF Project',
    country: 'assets/images/ui/code1.png',
    location: 'USA',
    image: 'assets/images/ui/subline/project8.png',
    description: 'Achieved approval within 2 weeks',
},
{
  type: 'Structural and miscellaneous steel detailing',
  name: 'IEA Headquarters',
  location: 'USA',
  country: 'assets/images/ui/code1.png',
  image: 'assets/images/ui/subline/project9.png',
  description: 'Government office building in Dallas, Texas with 82 tons of steel',
},
{
  type: 'Structural detailing',
  name: 'Braya Renewable Fuels Project',
  location: 'Canada',
  country: 'assets/images/ui/code5.png',
  image: 'assets/images/ui/subline/project10.png',
  description: 'New platform steel for a renewable energy plant in Labrador, Canada, for 3 separate vessel drums',
},
{
  type: 'Structural and miscellaneous steel detailing and designing.',
  name: 'AC Hotel',
  country: 'assets/images/ui/code1.png',
  location: 'USA',
  image: 'assets/images/ui/subline/project11.png',
  description: 'Hotel building in Clayton, Missouri. Eleven- level hotel building with major steel in three levels Includes two stair towers with mesh railings, pit ladder, ship ladder',
},
{
  type: 'Structural detailing',
  name: 'Bay Pond Conservatory',
  country: 'assets/images/ui/code1.png',
  location: 'USA',
  image: 'assets/images/ui/subline/project12.png',
  description: 'Nursery project in Saranac Lake, New York, featuring trusses and complex  connections, excluding glass panels',
},
{
  type: 'Structural and miscellaneous steel detailing and designing.',
  name: 'Fort Meade Visitor Center',
  country: 'assets/images/ui/code1.png',
  location: 'USA',
  image: 'assets/images/ui/subline/project13.png',
  description: 'Access control facility centre in Fort Meade, Maryland featuring Structural elements include AESS braces with UPC',
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
