import { Component,ElementRef,HostListener, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vender-details',

  templateUrl: './vender-details.component.html',
  styleUrl: './vender-details.component.scss'
})
export class VenderDetailsComponent {

   ourEngineers = [
    {
      img: "assets/images/Ralf.png",
      name: "Ralf Kipping",
      title: "Dipl.-Ing. (FH) <br>Energy and automation technology",
      des: "„With his experience and expertise from large <br>international projects, Ralf is always able to <br>lead construction projects successfully.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at J&F",
      expertise: ["Project management", "Site management", "Global projects"]
    },
    {
      img: "assets/images/Maximilian.png",
      name: "Maximilian Seitner",
      title: "M.Sc. <br>Electrical Engineer",
      des: "„Maximilian is a detail-oriented project <br>manager who enjoys working on and <br>solving complex technical issues.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at J&F",
      expertise: ["Concept development", "Renewable energies", "Lightning protection"]
    },
 
    {
      img: "assets/images/Saurav.png",
      name: "Saurav Kumar Verma",
      title: "M.Tech. <br>Structural Engineer",
      des: "„Through his technical expertise in structural <br>design and engineering, Saurav is able to <br>deliver high-end outcomes in each project <br>we worked on.”",
      medalInfo: "Gold Medalist DTU",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at J&F",
      expertise: ["Structural Design", "Prestressed Elements", "Detailing as per EC"]
    },
    
 
    {
      img: "assets/images/Rainer.png",
      name: "Rainer Kraus",
      title: "Project Manager Electrical <br>Engineering",
      des: "„Mr. Kraus is a competent and friendly <br>contact person with whom we are happy <br>to work.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at J&F",
      expertise: ["Fire alarm systems", "Voice alarm systems", "Technical concepts"]
    },
    {
      img: "assets/images/Haya.png",
      name: "Haya Hussein",
      title: "B.Sc. <br>Architect",
      des: "„Through her calm and thoughtful manner, <br>Haya always provides us with the desired <br>results.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at J&F",
      expertise: ["Lighting design", "Architecture"]
    },
    {
      img: "assets/images/Karl.png",
      name: "Karl Steinberg",
      title: "Project Manager Electrical <br>Engineering",
      des: "„Mr. Steinberg impresses with his many <br>years of experience and always provides <br>technical and commercial solutions.“",
      medalInfo: "",
      cusTitle: "What our customers say …",
      expertTitle: "<span>My</span> expertise at J&F",
      expertise: ["Detailed design", "As-built surveys", "Object monitoring"]
    }
  ];
  
   projects = [
    {
        type: 'MEP',
        name: 'New Logistics Hall Construction',
        location: 'HBM Darmstadt',
        image: 'assets/images/ui/project1.png',
        description: '1 million € construction costs electrical | approx. 22,000 m²',
    },
    {
        type: 'Structural',
        name: 'New High-Rise Buildings',
        location: 'FOUR Frankfurt',
        image: 'assets/images/ui/project2.png',
        description: 'RT1 + RT4 prefabricated part volume approx. 9 million €',
    },
    {
        type: 'MEP',
        name: 'New Construction Modular Dormitory',
        location: 'Student Residence, Hamburg',
        image: 'assets/images/ui/project3.png',
        description: '1.2 million € construction costs electrical | approx. 13,500 m²',
    },
    {
        type: 'Structural',
        name: 'New Shopping Centre Building',
        location: 'Mall of Switzerland',
        image: 'assets/images/ui/project4.png',
        description: '46,000 m² sales area | 5,000 m² gastronomy',
    },
    {
        type: 'Structural',
        name: 'Michelin India Tire Factory',
        location: 'India',
        image: 'assets/images/ui/project5.png',
        description: 'New construction | Floor area 67,000 m² and 17 buildings',
    },
    {
        type: 'MEP',
        name: 'Renovation of a high-rise building',
        location: 'Rocket Internet, Berlin',
        image: 'assets/images/ui/project6.png',
        description: '6.5 million € construction costs electrical | 27,000 m² on 35 floors',
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
