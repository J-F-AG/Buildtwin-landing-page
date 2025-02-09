import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

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
      description: 'AI Activity consolidates all your information in one place, enabling effortless task creation and tracking across team members, projects, and stakeholders. Simplify workflows and enhance collaboration with centralized insights and streamlined management.',
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
      description: 'AI RFI Tracker harnesses the power of AI to monitor and manage RFIs across all channels with real-time insights and seamless integration. Experience comprehensive cross-channel visibility and streamline your RFI management process for maximum efficiency.',
      getItFreeLink: '',
      exploreLink: '',
      imageSrc: 'assets/images/jf-icon.jpg',
      noteTitle: 'J&F',
      noteDescription: 'worked with BuildTwin Pro to reduce cycle time and increase throughput by 200%.',
      noteLink: '/customer-success',
      targetImage: 'assets/images/rfi.jpg'
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
      description: 'AI Quality Control streamlines your review process by tracking all RFIs, requirements, and more. Using a dynamic checklist, it automatically verifies each submission against evolving quality standards.',
      getItFreeLink: '',
      exploreLink: '',
      imageSrc: 'assets/images/jf-icon.jpg',
      noteTitle: 'J&F',
      noteDescription: 'worked with BuildTwin Pro to reduce cycle time and increase throughput by 200%.',
      noteLink: '/customer-success',
      targetImage: 'assets/images/manual-qc.jpg'
    }
  ];

  activeIndex = 0; // Tracks the currently active figure index
  private observer!: IntersectionObserver;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver(): void {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = this.textBlocks.toArray().findIndex(block => block.nativeElement === entry.target);
          if (index !== -1) {
            this.activeIndex = index;
          }
        }
      });
    }, options);

    // Observe each text block
    this.textBlocks.forEach(block => this.observer.observe(block.nativeElement));
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
