import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, of } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { ProjectListService } from './project-list.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
@Input() slider : boolean = false;
@ViewChild('carouselTrack') carouselTrack!: ElementRef;
currentPosition = 0;
isAtStart = true;
isAtEnd = false;
factorySlider: OwlOptions | null = null;
 isBrowser: boolean;

 buildingCodeArray = [];
 serviceArray = [];
 sectorArray = [];
 buildingCodeObj = {};
 serviceObj = {};
 sectorObj = {};
 projectList = [];
 selectedCategory = '';
 verifiedStatus: boolean = false;
 countries: { [key: string]: { flag: string; population: number } } = {};
 constructor( @Inject(PLATFORM_ID) private platformId: Object, private _http: HttpClient, public _languageService: LanguageService,
private _projectListService: ProjectListService) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.fetchData()
    this.getProjectData()
  }
  ngOnInit(): void {
    this.sliderInit()
    // const flagUrl3 = findFlagUrlByCountryName('Malaysia')
    // console.log(flagUrl3)
    // this._http.get('https://restcountries.com/v3.1/all').subscribe((data: any[]) => {
    //   this.countries = data.reduce((acc: any, country: any) => {
    //     const countryName = country.name.official;
    //     acc[countryName] = {
    //       flag: country.flags.svg,
    //       // population: country.population,
    //     };
    //     const countryNamecommon = country.name.common;
    //     acc[countryNamecommon] = {
    //       flag: country.flags.svg,
    //       // population: country.population,
    //     };
    //     return acc;
    //   }, {});
    //   // console.log(this.countries)
    // });
  }

  private getTotalWidth(): number {
    const track = this.carouselTrack.nativeElement as HTMLElement;
    return Array.from(track.children).reduce((sum: number, item: HTMLElement) => {
      const itemStyle = window.getComputedStyle(item);
      const marginRight = parseInt(itemStyle.marginRight, 10) || 0;
      return sum + item.offsetWidth + marginRight;
    }, 0);
  }

  private getMaxScrollPosition(): number {
    const totalWidth = this.getTotalWidth();
    const visibleWidth = this.carouselTrack.nativeElement.parentElement.offsetWidth;
    return Math.max(totalWidth - visibleWidth, 0);
  }

  private updateCarousel(): void {
    const track = this.carouselTrack.nativeElement;
    track.style.transform = `translateX(-${this.currentPosition}px)`;
    this.updateButtonsState();
  }

  private updateButtonsState(): void {
    const maxScrollPosition = this.getMaxScrollPosition();
    this.isAtStart = this.currentPosition === 0;
    this.isAtEnd = this.currentPosition >= maxScrollPosition;
  }

  scrollPrev(): void {
    const visibleWidth = this.carouselTrack.nativeElement.parentElement.offsetWidth;
    this.currentPosition -= visibleWidth / 2;
    this.currentPosition = Math.max(this.currentPosition, 0);
    this.updateCarousel();
  }

  scrollNext(): void {
    const visibleWidth = this.carouselTrack.nativeElement.parentElement.offsetWidth;
    const maxScrollPosition = this.getMaxScrollPosition();
    this.currentPosition += visibleWidth / 2;
    this.currentPosition = Math.min(this.currentPosition, maxScrollPosition);
    this.updateCarousel();
  }

sliderInit() {
  this.factorySlider = {
    nav: true,
    margin: 11,  // Adjust as needed
    dots: false,
    // loop: true,
    // autoplay: true,
    autoplayHoverPause: false,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],
    stagePadding: 0,  // Adjust padding for the "half" item effect
    autoWidth: true,
    // width: 123
    responsive: {
      0: {
        items: 2  // 1 item for small screens
      },
      800: {
        items: 4  // 2 full items and a half item for larger screens
      },
      1600: {
        items: 6  // 1 item for slightly larger screens
      },
      // 740: {
      //   items: 5  // 2 items for medium screens
      // },
    }
  };
}


  fetchData() {
    forkJoin([
//       this._http.patch(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/marketplaceBookService
// `, { "mode": "building_code" }),
      this._http.patch(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/marketplaceBookService
`, { "mode": "pre_cast_services" })
    ])
      .pipe(
        catchError(err => {
          return err;
        }),
      )
      .subscribe(res => {
        console.log(res);
        // let localbuildingCodeArray = res[0]['data'];
        let localserviceArray = res[0]['data'][0]['services'];
        let localsectorArray = res[0]['data'][0]['sectors'];
        // localbuildingCodeArray.filter(e => {
        //   this.buildingCodeObj[e.id] = e;
        //   let obj = {
        //     label: e['building_code'],
        //     value: e['id']
        //   };
        //   this.buildingCodeArray.push(obj);
        // });
        // localserviceArray.filter(e => {
        //   this.serviceObj[e.id] = e;
        //   let obj = {
        //     label: e['service_name'],
        //     value: e['id']
        //   };
        //   this.serviceArray.push(obj)
        // });
        this.sectorArray = localsectorArray
        // localsectorArray.filter(e => {
        //   this.sectorObj[e.id] = e;
        //   let obj = {
        //     label: e['service_name'],
        //     value: e['id']
        //   };
        //   this.sectorArray.push(obj);
        // });
          setTimeout(() => {
            this.updateCarousel();
          }, 5000);
      })
  }


  async getProjectData() {
    const payload: { [key: string]: any } = {};
    if (this.selectedCategory) {
      payload['category'] = this.selectedCategory;
    }
    if (this.verifiedStatus) {
      payload['verified'] = this.verifiedStatus;
    }
  
    this.projectList = []; // Reset the project list before fetching
  
    // Call the service and subscribe to the returned Observable
    this._projectListService.getProjectData(payload).subscribe({
      next: (data: any[]) => {
        this.projectList = data; // Assign the fetched data to projectList
      },
      error: (err) => {
        console.error('Error fetching project data:', err);
      },
    });
  }
  
  
  
  

  filterProject(type, value) {
    if(type == 'category') {
      if(this.selectedCategory == value) {
        this.selectedCategory = ''
      }else {
        this.selectedCategory = value
      }
      this.getProjectData();
    }
  }
  onCheckboxChange(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.verifiedStatus = true;
    } else {
      this.verifiedStatus = false;
    }
    this.getProjectData();
  }
  
  redirect(domain, company_name) {
    localStorage.setItem("domain", domain);
  }
}
