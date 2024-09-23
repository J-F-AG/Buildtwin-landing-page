import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, forkJoin } from 'rxjs';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-free-offer-form',
  // standalone: true,
  // imports: [],
  templateUrl: './free-offer-form.component.html',
  styleUrl: './free-offer-form.component.scss'
})
export class FreeOfferFormComponent {

  showdropDown: boolean = true;

  // enquiryPayload = {
  //   "buildingCodeId": 13, //static
  //   "preQualified": false,
  //   "type": "get_quote", //static
  //   "serviceId": 0,
  //   "subServiceId": 0,
  //   "user_email": "",
  //   "project_description": "",
  //   "project_name": ""
  // }

  buildingCodeArray = [];
  serviceArray = [];
  sectorArray = [];
  buildingCodeObj = {};
  serviceObj = {};
  sectorObj = {};
  payload: any = {
    "preQualified": false,
    "type": "get_quote", //static
  }
  myForm: FormGroup;
  isTenderWork = {};
  uploadedMessage = '';
  disableButton: boolean = false;
  constructor(private _http: HttpClient, private route: ActivatedRoute, private fb: FormBuilder, private message: NzMessageService) {
    this.fetchData()
  }
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
    // Get the current URL
    const url = new URL(window.location.href);
    // Extract the 'service' parameter
    const serviceId = url.searchParams.get('service');
    if (serviceId) {
      this.myForm.get('serviceId')?.setValue(serviceId);
    }
  }
  selectSector(selectedOption: any) {
    this.myForm.get('selectedPrecastServices')?.setValue(selectedOption); // Update the form control with the selected value
  }
  selectService(selectedOption: any) {
    this.myForm.get('serviceId')?.setValue(selectedOption); // Update the form control with the selected value
  }
  selectBuildingCode(selectedOption: any) {
    this.myForm.get('buildingCodeId')?.setValue(selectedOption); // Update the form control with the selected value
  }

  fetchData() {
    forkJoin([
      this._http.patch(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/marketplaceBookService
`, { "mode": "building_code" }),
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
        let localbuildingCodeArray = res[0]['data'];
        let localserviceArray = res[1]['data'][0]['services'];
        let localsectorArray = res[1]['data'][0]['sectors'];
        localbuildingCodeArray.filter(e => {
          this.buildingCodeObj[e.id] = e;
          let obj = {
            label: e['building_code'],
            value: e['id']
          };
          this.buildingCodeArray.push(obj);
        });
        localserviceArray.filter(e => {
          this.serviceObj[e.id] = e;
          let obj = {
            label: e['service_name'],
            value: e['id']
          };
          this.serviceArray.push(obj)
        });
        localsectorArray.filter(e => {
          this.sectorObj[e.id] = e;
          let obj = {
            label: e['service_name'],
            value: e['id']
          };
          this.sectorArray.push(obj);
        });
      })
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

    // Get the current URL
    const url = new URL(window.location.href);
    // Extract the 'service' parameter
    const serviceId = url.searchParams.get('service');
    if (serviceId) {
      this.myForm.get('serviceId')?.setValue(serviceId);
    }
    setInterval(() => {
      this.showdropDown = true;
    }, 10);
  }
}
