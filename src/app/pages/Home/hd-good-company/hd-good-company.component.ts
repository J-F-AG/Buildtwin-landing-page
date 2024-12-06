import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-hd-good-company',
  // standalone: true,
  // imports: [],
  templateUrl: './hd-good-company.component.html',
  styleUrl: './hd-good-company.component.scss'
})
export class HdGoodCompanyComponent {
  @Input() category: number = 0;
  @Input() defaultVisible: number = 3;
  @Input() hideTitle: boolean = false;
  @Input() count: number = 0;
  allBlogs: any[] = [];
  categoryBlogs: any[] = [];

  factorySlider: OwlOptions | null = null; 
  isBrowser: boolean;
  constructor(private blogService: BlogService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(): void {
    if(!this.category) {
      this.fetchAllBlogs();
    }else {
      this.fetchCategoryBlogs();
    }
  
    this.sliderInit()
  }
  sliderInit() {
    this.factorySlider = {
      nav: true,
      margin: 30,  // Adjust as needed
      dots: false,
      // loop: true,
      // autoplay: true,
      autoplayHoverPause: false,
      navText: [
        "<i class='ti ti-chevron-left'></i>",
        "<i class='ti ti-chevron-right'></i>",
      ],
      stagePadding: 0,  // Adjust padding for the "half" item effect
      responsive: {
        0: {
          items: 1  // 1 item for small screens
        },
        600: {
          items: 2  // 1 item for slightly larger screens
        },
        740: {
          items: this.defaultVisible  // 2 items for medium screens
        },
        940: {
          items: this.defaultVisible  // 2 full items and a half item for larger screens
        }
      }
    };
  }
  fetchAllBlogs(): void {
    this.blogService.getAllBlogs().subscribe({
      next: (data) => {
        this.allBlogs = data
        if(this.count>0 && this.allBlogs.length>this.count){ 
          this.allBlogs = this.allBlogs.slice(0, this.count)
        }
        console.log(this.allBlogs)
      },
      error: (err) => console.error('Error fetching all blogs', err),
    });
  }
  fetchCategoryBlogs(): void {
    this.blogService.getBlogsByCategory(this.category).subscribe({
      next: (data) => {
        this.allBlogs = data
        console.log(this.allBlogs)
      },
      error: (err) => console.error('Error fetching all blogs', err),
    });
  }
}
