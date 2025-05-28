import { Component, Input, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-service-nav-bar',
  templateUrl: './service-nav-bar.component.html',
  styleUrls: ['./service-nav-bar.component.scss']
})
export class ServiceNavBarComponent implements AfterViewInit, OnDestroy {
  @Input() serviceName: any = '';
  activeSections: string[] = [];
  sectionIds = ['step1', 'step2', 'step3'];

  observer!: IntersectionObserver;
  lastScrollTop = 0;

  ngAfterViewInit() {
    this.initScrollSpy();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  scrollTo(sectionId: string) {
    try {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    try {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      this.scrollDirection = scrollTop > this.lastScrollTop ? 'down' : 'up';
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    } catch (error) {
      
    }
  }

  scrollDirection: 'up' | 'down' = 'down';

  initScrollSpy() {
    const options = {
      root: null,
      threshold: 0.3,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.getAttribute('id');
        if (!sectionId) return;

        const index = this.sectionIds.indexOf(sectionId);

        if (entry.isIntersecting && this.scrollDirection === 'down') {
          // On scroll down: add active to current and previous
          this.activeSections = this.sectionIds.slice(0, index + 1);
        } else if (!entry.isIntersecting && this.scrollDirection === 'up') {
          // On scroll up: remove current and later
          this.activeSections = this.sectionIds.slice(0, index);
        }
      });
    }, options);

    this.sectionIds.forEach(id => {
      try {
        const el = document.getElementById(id);
        if (el) this.observer.observe(el);
      } catch (error) {
        
      }
    });
  }

  isActive(id: string): boolean {
    return this.activeSections.includes(id);
  }
}
