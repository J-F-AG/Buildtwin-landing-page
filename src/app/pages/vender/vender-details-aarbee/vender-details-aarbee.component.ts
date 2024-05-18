import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vender-details-aarbee',
  templateUrl: './vender-details-aarbee.component.html',
  styleUrl: './vender-details-aarbee.component.scss'
})
export class VenderDetailsAarbeeComponent {

  ourEngineers = [
    {
      img: "assets/images/aarbee/profile1.jpg",
      name: "Rajeevan Chingan",
      title: "Promoter / CEO",
      des: "A revolutionary in the field of structural steel design, detailing and checking. He has developed a user-friendly detail sheets, adopting innovative dimensioning style and detailing methods. He has over 32 years of experience in the field and is completely at home with AISC, BS & IS codes of practice."
    },
    {
      img: "assets/images/aarbee/profile2.jpg",
      name: "Biju P Varghese",
      title: "Promoter / COO",
      des: "With over 30 years of experience in structural steel design, detailing and checking & well versed with AISC, BS & IS codes of practice. He has a comprehensive understanding of all aspects of design and detailing."
    },
    {
      img: "assets/images/aarbee/profile3.jpg",
      name: "Prakasan T",
      title: "General Manager - Engineering",
      des: "A proficient design engineer having 37 years of rich experience in Structural Steel, RCC and Tensile membrane structures. He is profound in identifying and resolving the complexities associated with various types of structures and connections."
    },
    {
      img: "assets/images/aarbee/profile4.jpg",
      name: "Jinsmon Emmanuel",
      title: "General Manager - Delivery",
      des: "Has more than 22 years of experience in the field of detailing and complete control on projects, delivery schedule, manpower allocation etc. He is exceptionally well verse in handling multiple projects in various types with stringent schedules."
    },
    {
      img: "assets/images/aarbee/profile5.jpg",
      name: "Gopinathan Pillai N",
      title: "General Manager - QA/QC",
      des: "Has more than 40 years of experience in the field of drafting - detailing Structural Steel, RCC, & Cladding etc. He is well experienced in various types of projects like Airports, Desalination plants, Power Stations etc."
    }
  ];

  projects = [
    {
      type: 'Commercial',
      name: 'Las Vegas Raiders Stadium',
      location: 'USA',
      country: 'assets/images/ui/code1.png',
      image: 'assets/images/aarbee/Las-Vegas-Raiders-Stadium_Merrill.jpg',
      description: '27,500 Tons',
    },
    {
      type: 'Commercial',
      name: 'Port Everglades Terminal 25',
      location: 'USA',
      country: 'assets/images/ui/code1.png',
      image: 'assets/images/aarbee/Port-Everglades-Terminal.jpg',
      description: '1,040 Tons',
    },
    {
      type: 'Commercial',
      name: 'Jacksonville Transportation',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Jacksonville-Transportation-Authority-Admin-Building.jpg',
      description: '525 Tons',
    },
    {
      type: 'Commercial',
      name: 'The Cosmos',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/The-Cosmos.jpg',
      description: '1,000 Tons',
    },
    {
      type: 'Commercial',
      name: 'Thysee Printing',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Thysee-Printing.jpg',
      description: '100 Tons',
    },
    {
      type: 'Commercial',
      name: 'Milwaukee Arena',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Milwaukee-Arena.jpg',
      description: '7,300 Tons',
    },
    {
      type: 'Commercial',
      name: 'Intel SRR3',
      country: 'assets/images/ui/country3.png',
      location: 'India',
      image: 'assets/images/aarbee/Intel-SRR3.jpg',
      description: '4,300 Tons',
    },
    {
      type: 'Commercial',
      name: 'Newfoundland',
      country: 'assets/images/ui/code4.png',
      location: 'UK',
      image: 'assets/images/aarbee/Newfoundland-Project.jpg',
      description: '10,000 Tons',
    },
    {
      type: 'Commercial',
      name: 'Madison Nakoosa Trail',
      location: 'USA',
      country: 'assets/images/ui/code1.png',
      image: 'assets/images/aarbee/Madison-Nakoosa-Trail-Shops_Real.jpg',
      description: '360 Tons',
    },
    {
      type: 'Commercial',
      name: 'Merrill Hotel & Conference',
      location: 'USA',
      country: 'assets/images/ui/code1.png',
      image: 'assets/images/aarbee/Merrill-Hotel-Conference-Center_Real.jpg',
      description: '420 Tons',
    },
    {
      type: 'Commercial',
      name: 'Waunakee Inter. School',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Waunakee-Intermediate-School_Real.jpg',
      description: '340 Tons',
    },
    {
      type: 'Commercial',
      name: 'Hooper Office',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Hooper-Office_Real.jpg',
      description: '385 Tons',
    },
    {
      type: 'Duct',
      name: 'Jim Bridger SCR Plate',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Jim-Bridger-SCR-Plate-Flues-Ducts__Real.jpg',
      description: '3,800 Tons',
    },
    {
      type: 'Commercial',
      name: 'Kentucky Convention Center',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Kentucky-International-Convention-Center_Real.jpg',
      description: '5,000 Tons',
    },
    {
      type: 'Arena',
      name: 'Kohl Center',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Kohl-Center_Real.jpg',
      description: '520 Tons',
    }
  ];

  filteredProjects = this.projects;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {


  }
  showPopup = false;


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
    autoWidth: true,
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
    autoplay: false,
    autoWidth: true,
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

  ngOnInit() {
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
  call() {
    this.showPopup = true
  }
  closePopup() {
    this.showPopup = false

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
  filterProjectsByType(selectedType: string) {
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
