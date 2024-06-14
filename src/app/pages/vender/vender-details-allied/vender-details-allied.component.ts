import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-vender-details-allied',
  templateUrl: './vender-details-allied.component.html',
  styleUrls: ['../vender-detail-common-style.component.scss', './vender-details-allied.component.scss']
  // styleUrl: './vender-details-allied.component.scss'
})
export class VenderDetailsAlliedComponent {
  projects = [
    {
      type: 'Residential',
      name: 'One Herastrau Vista',
      location: 'Romania',
      country: 'assets/images/ui/romania.png',
      image: 'assets/images/allied/project-image1.jpg',
      description: '17.000 Gross built area',
    },
    {
      type: 'Public',
      name: 'Iasi Regional Emergency Hospital',
      location: 'Romania',
      country: 'assets/images/ui/romania.png',
      image: 'assets/images/allied/project-image2.jpg',
      description: '86.500 Gross built area',
    },
    {
      type: 'Public',
      name: 'Cluj Regional Emergency Hospital',
      country: 'assets/images/ui/romania.png',
      location: 'Romania',
      image: 'assets/images/allied/project-image3.jpg',
      description: '176.500 Gross built area',
    },
    {
      type: 'Industrial',
      name: 'HELLA Plant Lugoj',
      country: 'assets/images/ui/romania.png',
      location: 'Romania',
      image: 'assets/images/allied/project-image4.jpg',
      description: '3.600 Gross built area',
    },
    {
      type: 'Industrial',
      name: 'HELLA Plant Timis',
      country: 'assets/images/ui/romania.png',
      location: 'Romania',
      image: 'assets/images/allied/project-image5.jpg',
      description: '11.450 Gross built area',
    },
    {
      type: 'Residential',
      name: 'Quartier Azuga',
      country: 'assets/images/ui/romania.png',
      location: 'Romania',
      image: 'assets/images/allied/project-image6.png',
      description: '31.000 Gross built area',
    },
    {
      type: 'Commercial',
      name: 'One Gallery – Hala Ford',
      country: 'assets/images/ui/romania.png',
      location: 'Romania',
      image: 'assets/images/allied/project-image7.jpg',
      description: '13.500 Gross built area',
    },
    {
      type: 'Residential',
      name: 'One Peninsula',
      country: 'assets/images/ui/romania.png',
      location: 'Romania',
      image: 'assets/images/allied/project-image8.jpg',
      description: '55.000 Gross built area',
    },
    {
      type: 'Residential',
      name: 'One Lake Club',
      location: 'Romania',
      country: 'assets/images/ui/romania.png',
      image: 'assets/images/allied/project-image9.jpg',
      description: '117.000 Gross built area',
    },
    {
      type: 'Residential',
      name: 'One Cotroceni Park – Phase 2',
      location: 'Romania',
      country: 'assets/images/ui/romania.png',
      image: 'assets/images/allied/project-image10.jpg',
      description: '145.000 Gross built area',
    },
    {
      type: 'Residential',
      name: 'One Lake District',
      country: 'assets/images/ui/romania.png',
      location: 'Romania',
      image: 'assets/images/allied/project-image11.jpg',
      description: '230.000 Gross built area',
    },
    {
      type: 'Residential',
      name: 'One High District',
      country: 'assets/images/ui/romania.png',
      location: 'Romania',
      image: 'assets/images/allied/project-image12.jpg',
      description: '140.000 Gross built area',
    },
    {
      type: 'Residential',
      name: 'Residential Complex Mega Mall',
      country: 'assets/images/ui/romania.png',
      location: 'Romania',
      image: 'assets/images/allied/project-image13.jpg',
      description: '50.000 Gross built area',
    },
    {
      type: 'Residential',
      name: 'One Sunset Lake',
      country: 'assets/images/ui/romania.png',
      location: 'Romania',
      image: 'assets/images/allied/project-image14.jpg',
      description: '63.000 Gross built area',
    },
    {
      type: 'Residential',
      name: 'Therme – Residential Complex',
      country: 'assets/images/ui/romania.png',
      location: 'Romania',
      image: 'assets/images/allied/project-image15.jpg',
      description: '58.000 Gross built area',
    }
  ];

  filteredProjects = this.projects;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {


  }
  showPopup = false;



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
