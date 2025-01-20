import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, of } from 'rxjs';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
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
  constructor( @Inject(PLATFORM_ID) private platformId: Object, private _http: HttpClient) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.fetchData()
    this.getProjectData()
  }
ngOnInit(): void {

  this.sliderInit()
}

sliderInit() {
  this.factorySlider = {
    nav: true,
    margin: 32,  // Adjust as needed
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
        items: 5  // 2 items for medium screens
      },
      940: {
        items: 4  // 2 full items and a half item for larger screens
      }
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
      })
  }


  getProjectData() {
    let payload = { 
      page: "1", 
      mode:'filter_project' 
    }
    if(this.selectedCategory) {
      payload['category'] = this.selectedCategory
    }
    if(this.verifiedStatus) {
      payload['verified'] = this.verifiedStatus
    }
    forkJoin([
      this._http.get(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/featured-projects`, {
        params: payload // Add query parameters properly
      })
    ])
      .pipe(
        catchError((err) => {
          console.error("Error occurred while fetching data:", err);
          // Return an observable with empty data or an appropriate fallback
          return of([]);
        })
      )
      .subscribe({
        next: (res) => {
          console.log("Response received:", res);
          this.projectList = []
          const normalizedData = this.updateProjectLogos(res[0]?.data || []);
          console.log("Normalized Data:", normalizedData);
          // res[0]['data'].filter(res=>{
          //   // console.log(res['project_logo'])
          //   // res['project_logo'] = res['project_logo'].replace('"{');
          //   // res['project_logo'] = res['project_logo'].replace('}"');
          //   res['project_logo_updated'] = this.processImageData(res['project_logo'])
          //   this.projectList.push(res)
          // })
          // console.log(this.projectList)
          // Process the response as needed
          setTimeout(() => {
            
            console.log(this.projectList)
          }, 5000);
        },
        error: (err) => {
          console.error("Error in subscription:", err);
        }
      });
  }


  
  updateProjectLogos(data: any) {
    data.forEach(item => {
        let logos = [];
        try {
            // Attempt to parse the project_logo field as JSON
            const parsed = JSON.parse(item.project_logo);

            if (Array.isArray(parsed)) {
                // If parsed is an array, add all items to logos
                logos.push(...parsed);
            } else if (typeof parsed === "object") {
                // If parsed is an object, extract imageurls or process nested objects
                for (const key in parsed) {
                    try {
                        const nestedValue = JSON.parse(parsed[key]); // Parse nested JSON
                        if (nestedValue.imageurls) {
                            logos.push(...nestedValue.imageurls);
                        }
                    } catch (innerError) {
                        console.error("Error parsing nested JSON:", innerError);
                    }
                }
            } else if (typeof parsed === "string") {
                logos.push(parsed);
            }
        } catch (error) {
            // If parsing fails, treat project_logo as a string and extract URLs
            const regex = /https?:\/\/[^\s"]+/g;
            const matches = item.project_logo.match(regex);
            if (matches) {
                logos.push(...matches);
            }
        }

        // Clean up URLs: Remove backslashes, trailing slashes, and duplicates
        logos = [...new Set(logos.map(url => url.replace(/\\+$/, "").trim()))];

        // Update project_logo in the item
        item.project_logo = logos;

        // Push the updated item to projectList
        this.projectList.push(item);
    });

    console.log("Updated Data:", data);
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
  
}
