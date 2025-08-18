import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent implements OnInit {
  @Input() hideTitle = false;
  @Input() page = false;
  @Input() heading = true;
  @Input() defaultVisible = 3;
  
  factorySlider: OwlOptions | null = null;
  isBrowser: boolean;
  
  // Use actual available images from assets
  allCaseStudies = [
    {
      id: 1,
      title: { rendered: 'AI-Powered Structural Design Success Story' },
      excerpt: { rendered: 'How BuildTwin AI reduced design time by 70% for a major infrastructure project' },
      jetpack_featured_media_url: 'assets/images/case-study1.jpg',
      link: '#'
    },
    {
      id: 2,
      title: { rendered: 'BIM Integration Excellence Case Study' },
      excerpt: { rendered: 'Seamless BIM workflow integration leading to 40% faster project delivery' },
      jetpack_featured_media_url: 'assets/images/case-study2.jpg',
      link: '#'
    },
    {
      id: 3,
      title: { rendered: 'Quality Control Revolution in Steel Detailing' },
      excerpt: { rendered: 'AI-driven quality checks eliminating 90% of design errors before construction' },
      jetpack_featured_media_url: 'assets/images/case-study3.jpg',
      link: '#'
    },
    {
      id: 4,
      title: { rendered: 'Digital Transformation in Construction Management' },
      excerpt: { rendered: 'Complete workflow automation resulting in 60% cost savings' },
      jetpack_featured_media_url: 'assets/images/blog1.jpg',
      link: '#'
    },
    {
      id: 5,
      title: { rendered: 'International Standards Compliance Success' },
      excerpt: { rendered: 'Multi-country project delivery with automated code compliance checking' },
      jetpack_featured_media_url: 'assets/images/blog2.jpg',
      link: '#'
    }
  ];

  startPosition = 1;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    public _languageService: LanguageService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.factorySlider = {
        nav: true,
        margin: 0,
        dots: false,
        loop: true,
        autoplay: false,
        autoplayHoverPause: true,
        navText: [
          "<i class='ti ti-chevron-left'></i>",
          "<i class='ti ti-chevron-right'></i>",
        ],
        stagePadding: 0,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          740: {
            items: this.defaultVisible
          },
          940: {
            items: this.defaultVisible
          }
        }
      };
    }
  }

  onSlideHover(caseStudy: any) {
    this.startPosition = caseStudy.id;
  }

  onSlideChange(event: any) {
    // Handle slide change if needed
  }
}
