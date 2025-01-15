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
  @Input() page: string = ''; //sector
  @Input() heading: boolean = true; //sector
  @Input() category: any = 0;
  @Input() defaultVisible: number = 3;
  @Input() hideTitle: boolean = false;
  @Input() count: number = 0;
  allBlogs: any[] = [];
  featuredBlogs: any = {};

  factorySlider: OwlOptions | null = null; 
  isBrowser: boolean;
  constructor(private blogService: BlogService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(): void {
    if(!this.page) {
      this.fetchAllBlogs();
    }else {
      this.fetchCategoryBlogs();
      this.fetchFeaturedBlogs()
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
        this.allBlogs = this.allBlogs.map((blog: any) => {
          return {
            ...blog,
            jetpack_featured_media_url: blog.jetpack_featured_media_url?blog.jetpack_featured_media_url.replace('http://35.158.244.95', 'https://www.buildtwin.com/blog'):'',
            link: blog.link?blog.link.replace('http://35.158.244.95', 'https://www.buildtwin.com/blog'):'',
          }
        });
        console.log(this.allBlogs)
      },
      error: (err) => console.error('Error fetching all blogs', err),
    });
  }
  fetchCategoryBlogs(): void {
    this.blogService.getBlogsByCategory(this.category).subscribe({
      next: (data) => {
        this.allBlogs = data
        this.allBlogs = this.allBlogs.map((blog: any) => {
          return {
            ...blog,
            jetpack_featured_media_url: blog.jetpack_featured_media_url?blog.jetpack_featured_media_url.replace('http://35.158.244.95', 'https://www.buildtwin.com/blog'):'',
            link: blog.link?blog.link.replace('http://35.158.244.95', 'https://www.buildtwin.com/blog'):'',
          }
        });
        console.log(this.allBlogs)
      },
      error: (err) => console.error('Error fetching all blogs', err),
    });
  }
  fetchFeaturedBlogs(): void {
    let payload = {
      featured: true
    }
    if(this.category) {
      payload['categories'] = this.category
    }
    this.blogService.getBlogsByFeatured(payload).subscribe({
      next: (data) => {
        this.featuredBlogs = data[0] ? {
          ...data[0],
          jetpack_featured_media_url: data[0].jetpack_featured_media_url
            ? data[0].jetpack_featured_media_url.replace('http://35.158.244.95', 'https://www.buildtwin.com/blog')
            : '',
          link: data[0].link
            ? data[0].link.replace('http://35.158.244.95', 'https://www.buildtwin.com/blog')
            : '',
        } : null;
        
        console.log(this.featuredBlogs);
      },
      error: (err) => console.error('Error fetching all blogs', err),
    });
  }
}
