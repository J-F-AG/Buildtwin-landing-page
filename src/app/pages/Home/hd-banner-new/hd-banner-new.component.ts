import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { catchError, forkJoin } from 'rxjs';
import { GlobalService } from 'src/app/services/GlobalService';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-hd-banner-new',
  templateUrl: './hd-banner-new.component.html',
  styleUrls: ['./hd-banner-new.component.scss']
})
export class HdBannerNewComponent {
  aboutSlider: OwlOptions = {
    items: 1,
    // nav: true,
    margin: 0,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3100,
    // smartSpeed: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }

  integrationsList: OwlOptions = {
    nav: true,
    loop: true,
    dots: false,
    autoplay: false,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1
      },
      515: {
        items: 3
      },
      768: {
        items: 4
      },
      990: {
        items: 5
      },
      1400: {
        items: 5
      }
    }
  };
  myForm: FormGroup;
  payload: any = {
    "preQualified": false,
    "type": "get_quote", //static
  };
  disableButton: boolean = false;
  isTenderWork = {};
  uploadedMessage = '';
  showdropDown: boolean = true;
  sectorObj = {};
  sectorArray = [];
  buildingCodeObj = {};
  buildingCodeArray = [];


  constructor(private _http: HttpClient, private message: NzMessageService, private fb: FormBuilder, private globalService: GlobalService, public _languageService:LanguageService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email field validation
      projectName: ['', Validators.required], // Project Name validation
      selectedPrecastServices: [null], // Validation for selectedPrecastServices
      buildingCodeId: [null], // Static building code
      serviceId: [null, Validators.required], // New control for service ID
      description: [''], // Description validation
    });
    // this.route.queryParams.subscribe(params => {
    //   const serviceId = params['service'];
    //   if (serviceId) {
    //     this.myForm.get('serviceId')?.setValue(serviceId);
    //   }
    // });
    this.updateServiceId()
  }

  getGlobalValue(): string {
    return this.globalService.getGlobalValue();
  }
  setGlobalValue(newValue: string): void {
    this.globalService.setGlobalValue(newValue);
  }

  updateServiceId(){
    // Get the current URL
    const url = window.location.href;
    if (url.includes('pre-cast-detailing-services')) {
      this.myForm.get('serviceId')?.setValue(this._languageService['serviceId']['pre-cast-detailing-services']);
    }
    else if (url.includes('rebar-detailing-services')) {
      this.myForm.get('serviceId')?.setValue(this._languageService['serviceId']['rebar-detailing-services']);
    }
  }

  selectSector(selectedOption: any) {
    this.myForm.get('selectedPrecastServices')?.setValue(selectedOption); // Update the form control with the selected value
  }

  selectBuildingCode(selectedOption: any) {
    this.myForm.get('buildingCodeId')?.setValue(selectedOption); // Update the form control with the selected value
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.payload = {
        ...this.payload, // Retain existing static properties
        buildingCodeId: this.myForm.get('buildingCodeId')?.value?Number(this.myForm.get('buildingCodeId')?.value):null, // Using form value
        serviceId: this.myForm.get('serviceId')?.value?Number(this.myForm.get('serviceId')?.value):null, // New service ID
        subServiceId: this.myForm.get('selectedPrecastServices')?.value?Number(this.myForm.get('selectedPrecastServices')?.value):null,
        user_email: this.myForm.get('email')?.value,
        project_description: this.myForm.get('description')?.value,
        project_name: this.myForm.get('projectName')?.value
      };
      // Remove keys with null or blank values
      this.payload = Object.fromEntries(
        Object.entries(this.payload)
          .filter(([_, v]) => v !== null && v !== '' && v !== undefined) // Retain only non-null, non-blank, and defined values
      );
      this.disableButton = true;
      forkJoin([
        this._http.post(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/marketplaceBookService/book-service
  `, this.payload)
      ])
        .pipe(
          catchError(err => {
            return err;
          }),
        )
        .subscribe(res => {
          if(res[0]['status'] === 'success'){
            console.log(res);
            console.log('Form submitted with payload:', this.payload);
            this.isTenderWork = res[0]['data'];
            this.uploadedMessage = res[0]['data']['message'];
            this.fileUploadedStatus('')
          }else {
            this.message.create('error', `${res[0]['data']['message']}`);
          }
        })

    } else {
      console.log('Form is invalid');
      this.myForm.markAllAsTouched(); // Mark all fields as touched to show errors
    }
  }

  fileUploadedStatus($event){
    // console.log($event);
    this.disableButton = false;
    this.message.create('success', `${this.uploadedMessage}`);
    this.showdropDown = false;
    // Reset the form after submission
    this.myForm.reset(); // Clears the form fields
    this.myForm.get('selectedPrecastServices')?.setValue(null); // If needed, reset the selected value specifically
    this.myForm.get('buildingCodeId')?.setValue(null); // If needed, reset the selected value specifically
    // this.myForm.get('serviceId')?.setValue(null); // If needed, reset the selected value specifically

    this.updateServiceId()
    setInterval(() => {
      this.showdropDown = true;
    }, 10);
  }
  scrollToSection(sectionId: string) {
    this.globalService.scrollToSection(sectionId);
  }
}
