import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { ProjectListService } from './project-list.service';
import { findFlagUrlByCountryName } from 'country-flags-svg';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
@Input() slider : boolean = false;
@Input() hideMessageBox = false;
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
    if(this.isBrowser){
      this.getProjectData()
    }
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
    if(this.slider && this.carouselTrack){
      const track = this.carouselTrack.nativeElement;
      track.style.transform = `translateX(-${this.currentPosition}px)`;
      this.updateButtonsState();
    }
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
      1000: {
        items: 5  // 2 full items and a half item for larger screens
      },
      1416: {
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
      this._http.patch(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/marketplaceBookService
`, { "mode": "pre_cast_services" }),
  //     this._http.patch(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/marketplaceBookService
  // `, { "mode": "building_code" })
    ])
      .pipe(
        catchError(err => {
          return err;
        }),
      )
      .subscribe(res => {
        console.log(res);
        // let localbuildingCodeArray = res[1]['data'];
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
        localserviceArray.filter(e => {
          this.serviceObj[e.id] = e;
          let obj = {
            label: e['service_name'],
            value: e['id']
          };
          this.serviceArray.push(obj)
        });
        this.sectorArray = localsectorArray
        localsectorArray.filter(e => {
          this.sectorObj[e.id] = e;
          let obj = {
            label: e['service_name'],
            value: e['id']
          };
          this.sectorArray.push(obj);
        });
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
    this.getProjectDataApi(payload).subscribe({
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


  // Fetch Project Data
  getProjectDataApi(payloadData: { category?: string; verified?: boolean }): Observable<any[]> {
    // Build the payload
    const payload = this.buildPayload(payloadData);
    return this._http
      .get<{ data: any[] }>(
        'https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/featured-projects',
        { params: payload }
      )
      .pipe(
        map((res: { data?: any[] }) => {
          // Ensure `res.data` is an array
          const data = res?.data || [];
          return this.updateProjectLogos(data);
        }),
        catchError((err) => {
          // Log the error and return an empty array
          console.error('Error occurred while fetching data:', err);
          return of([]); // Fallback to an empty array
        })
      );
  }
  

  // Build Payload for API
  private buildPayload(payloadData) {
    let params = {
      page: 1,
      mode: 'filter_project'
    }
    if(payloadData?.category){
      params['category'] = payloadData?.category
    }
    if(payloadData?.verified){
      params['verified'] = payloadData?.verified
    }
    return params;
  }

  // Update Project Logos and Additional Fields
  private updateProjectLogos(data: any[]) {
    return data.map((item) => {
      const logos = this.parseProjectLogo(item.project_logo);
      item.project_logo = logos;

      item.route = this.buildRoute(item.company_name);
      item.linking = this.buildLinking(item.company_name);

      item.locationUpdated = this.parseProjectRegion(item.project_region);
      item.flag = this.getFlag(item.locationUpdated.at(-1) || '');

      return item;
    });
  }

  // Parse Project Logo
  private parseProjectLogo(projectLogo: string) {
    let logos = [];
    try {
      const parsed = typeof projectLogo === 'string' ? JSON.parse(projectLogo) : projectLogo;

      if (Array.isArray(parsed)) {
        logos = parsed;
      } else if (typeof parsed === 'object') {
        logos = Object.values(parsed)
          .flatMap((value) => {
            try {
              if (typeof value === 'string') { // Check type explicitly
                const nested = JSON.parse(value);
                return nested.imageurls || [];
              }
              return [];
            } catch {
              return [];
            }
          })
          .filter(Boolean);
      } else if (typeof parsed === 'string') {
        logos.push(parsed);
      }
    } catch {
      // Extract URLs using regex as a fallback
      const regex = /https?:\/\/[^\s"]+/g;
      logos = (projectLogo.match(regex) || []).map((url) => url.replace(/\\+$/, '').trim());
    }
    return Array.from(new Set(logos)); // Remove duplicates
  }

  // Build Route
  private buildRoute(companyName: string) {
    return companyName.replace(/ /g, '');
  }

  // Build Linking
  private buildLinking(companyName: string) {
    return companyName
      .replace(/[\s&.]/g, '-')
      .replace(/-{2,}/g, '-')
      .toLowerCase();
  }

  // Parse Project Region
  private parseProjectRegion(projectRegion: string) {
    if (typeof projectRegion === 'string') {
      return projectRegion.split(',').map((part) => part.trim());
    }
    console.warn('Invalid project_region:', projectRegion);
    return [];
  }

  // Get Flag URL
  private getFlag(country: string) {
    const countryMapping = {
      'United States of America': 'United States',
      Chennai: 'India',
      'Leipzig Germany': 'Germany',
      Malaysian: 'Malaysia',
    };

    const normalizedCountry = countryMapping[country] || country;
    return findFlagUrlByCountryName(normalizedCountry) || '';
  }
}
