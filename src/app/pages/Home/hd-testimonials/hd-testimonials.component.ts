import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hd-testimonials',
  templateUrl: './hd-testimonials.component.html',
  styleUrls: ['./hd-testimonials.component.scss']
})
export class HdTestimonialsComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 3;
  autoPlayInterval: any;

  kpiData = [
    // Ravikanth's KPIs
    {
      first: { number: '5', suffix: 'x', description: 'More engagement<br>vs. traditional methods' },
      second: { number: '3', suffix: 'x', description: 'Faster project<br>completion' },
      third: { number: '90', suffix: '%', description: 'Cost reduction in<br>project management' }
    },
    // Regina's KPIs
    {
      first: { number: '4', suffix: 'x', description: 'Better team<br>collaboration' },
      second: { number: '60', suffix: '%', description: 'Reduced project<br>delays' },
      third: { number: '85', suffix: '%', description: 'Improved quality<br>standards' }
    },
    // Kumar's KPIs
    {
      first: { number: '10', suffix: 'x', description: 'Global project<br>access' },
      second: { number: '50', suffix: '%', description: 'Faster client<br>acquisition' },
      third: { number: '95', suffix: '%', description: 'Service transparency<br>improvement' }
    }
  ];

  getCurrentKPIs() {
    return this.kpiData[this.currentSlide];
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Prevent infinite interval on the server which blocks Angular SSR stabilization.
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.stopAutoPlay();
    }
  }

  nextTestimonial(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  previousTestimonial(): void {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(slideIndex: number): void {
    this.currentSlide = slideIndex;
  }

  isActiveSlide(index: number): boolean {
    return this.currentSlide === index;
  }

  getSlidePosition(index: number): string {
    if (index === this.currentSlide) {
      return '0px';
    } else if (index < this.currentSlide) {
      return '-280px';
    } else {
      return '280px';
    }
  }

  getSlideOpacity(index: number): number {
    return index === this.currentSlide ? 1 : 0;
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  onMouseEnter(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.stopAutoPlay();
    }
  }

  onMouseLeave(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }
}