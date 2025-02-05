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
      title: 'Dream it, plan it, launch it',
      description: 'The #1 tool for agile teams is now for all teams. Plan, track, and deliver your biggest ideas together.',
      getItFreeLink: '',
      exploreLink: '',
      imageSrc: 'assets/images/ai/lumen.svg',
      noteTitle: 'Lumen',
      noteDescription: 'used Jira to reduce cycle time and increase throughput by 200%.',
      noteLink: '',
      targetImage: 'assets/images/ai/CSD-10721_WAC_Jira-4003614779.webp'
    },
    {
      title: 'Dream it, plan it, launch it',
      description: 'The #1 tool for agile teams is now for all teams. Plan, track, and deliver your biggest ideas together.',
      getItFreeLink: '',
      exploreLink: '',
      imageSrc: 'assets/images/ai/lumen.svg',
      noteTitle: 'Lumen',
      noteDescription: 'used Jira to reduce cycle time and increase throughput by 200%.',
      noteLink: '',
      targetImage: 'assets/images/ai/CSD-10721_WAC_Jira-4003614779.webp'
    },
    {
      title: 'Dream it, plan it, launch it',
      description: 'The #1 tool for agile teams is now for all teams. Plan, track, and deliver your biggest ideas together.',
      getItFreeLink: '',
      exploreLink: '',
      imageSrc: 'assets/images/ai/lumen.svg',
      noteTitle: 'Lumen',
      noteDescription: 'used Jira to reduce cycle time and increase throughput by 200%.',
      noteLink: '',
      targetImage: 'assets/images/ai/CSD-10721_WAC_Jira-4003614779.webp'
    },
    {
      title: 'Dream it, plan it, launch it',
      description: 'The #1 tool for agile teams is now for all teams. Plan, track, and deliver your biggest ideas together.',
      getItFreeLink: '',
      exploreLink: '',
      imageSrc: 'assets/images/ai/lumen.svg',
      noteTitle: 'Lumen',
      noteDescription: 'used Jira to reduce cycle time and increase throughput by 200%.',
      noteLink: '',
      targetImage: 'assets/images/ai/CSD-10721_WAC_Jira-4003614779.webp'
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
