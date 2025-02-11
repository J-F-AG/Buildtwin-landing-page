import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-ai-project-management-hero',
  templateUrl: './ai-project-management-hero.component.html',
  styleUrl: './ai-project-management-hero.component.scss'
})
export class AiProjectManagementHeroComponent {
  @ViewChildren('textBlock') textBlocks!: QueryList<ElementRef>;
  activeTab = 1;
  contentData = [
    {
      title: 'Drawing Register',
      description: 'An easy-to-use tool for managing project drawings. Simply drag and drop your Excel file to instantly create and organize your register—no manual input needed. Get started in seconds!',
      getItFreeLink: '',
      exploreLink: '',
      imageSrc: 'assets/images/jf-icon.jpg',
      noteTitle: 'J&F',
      noteDescription: 'worked with BuildTwin Pro to reduce cycle time and increase throughput by 200%.',
      noteLink: '/customer-success',
      targetImage: 'assets/images/ai-activity.jpg'
    },
    {
      title: 'Quality Management',
      description: 'A super easy-to-use and fast markup tool with pre-defined checklists for seamless quality control. Streamline reviews, ensure compliance, and keep projects on track—effortlessly!',
      getItFreeLink: '',
      exploreLink: '',
      imageSrc: 'assets/images/jf-icon.jpg',
      noteTitle: 'J&F',
      noteDescription: 'worked with BuildTwin Pro to reduce cycle time and increase throughput by 200%.',
      noteLink: '/customer-success',
      targetImage: 'assets/images/manual-qc.jpg'
    },
    /*,
    {
      title: 'AI Project Management',
      description: 'AI Project Management auto-updates your software with AI-driven insights, streamlining everything from documentation to organization. Simplify collaboration, maintain real-time progress tracking, and let your projects run effortlessly.',
      getItFreeLink: '',
      exploreLink: '',
      imageSrc: 'assets/images/jf-icon.jpg',
      noteTitle: 'J&F',
      noteDescription: 'worked with BuildTwin Pro to reduce cycle time and increase throughput by 200%.',
      noteLink: '/customer-success',
      targetImage: 'assets/images/ai-activity.jpg'
    },*/
    {
      title: 'RFI Tracker',
      description: 'Effortlessly manage RFIs with AI-powered tracking. Connect to CDE, email, and other sources, letting AI organize and track RFIs for you—saving time and ensuring nothing gets missed.',
      getItFreeLink: '',
      exploreLink: '',
      imageSrc: 'assets/images/jf-icon.jpg',
      noteTitle: 'J&F',
      noteDescription: 'worked with BuildTwin Pro to reduce cycle time and increase throughput by 200%.',
      noteLink: '/customer-success',
      targetImage: 'assets/images/rfi.jpg'
    }
  ];

  activeIndex = 0; // Tracks the currently active figure index
  private observer!: IntersectionObserver;
  // private debounceTimeout: any;
  activeState2: number = 1
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.setupIntersectionObserver();
  }

  // setupIntersectionObserver(): void {
  //   const options = {
  //     root: null,
  //     rootMargin: '50px',
  //     threshold: 0.3
  //   };
  
  //   this.observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         requestAnimationFrame(() => {
  //           const index = this.textBlocks.toArray().findIndex(block => block.nativeElement === entry.target);
  //           if (index !== -1) {
  //             this.activeIndex = index;
  //           }
  //         });
  //       }
  //     });
  //   }, options);
  
  //   this.textBlocks.forEach(block => this.observer.observe(block.nativeElement));
  // }

    @HostListener('window:scroll', ['$event'])
    handleScroll(event: any) {
      const sections = this.el.nativeElement.querySelectorAll('.scroll-event .block');
      // let activeSection: number | null = null;
  
      sections.forEach((section: HTMLElement) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute('data-ele');
  
        if (rect.top >= 0 && rect.top < window.innerHeight - 200) {
          this.activeState2 = sectionId ? parseInt(sectionId, 10) : null;
        }
      });
  
      // if (activeSection !== this.activeState2) {
      //   this.activeState2 = activeSection;
      // }
    }
  tab(index){
    this.activeTab = index;
  }
  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
