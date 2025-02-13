import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
    notAllow: boolean = true;
    // title = 'Contact Us - Buildtwin';
    queryForList: any = [
      {
        text: 'Getting new projects',
        value: 'buyer'
      },
      {
        text: 'Finding new vendors',
        value: 'seller'
      },
      {
        text: 'Getting access to AI Tools',
        value: 'regular'
      }
    ]
    queryForSelected: string = '';
    portfolioForm = this.fb.group({
        Message: ['', []],
        Name: ['', []],
        Telephone: ['', [Validators.pattern('^[0-9]*$')]],
        queryFor: ['', [Validators.required]],
        'E-mail': ['', [Validators.required, Validators.email]],
      })
      URL = 'https://aunjlali04.execute-api.eu-central-1.amazonaws.com/dev/';
    constructor(
        private fb: UntypedFormBuilder,
        private http: HttpClient,
        private message: NzMessageService,
        public _languageService:LanguageService
    ) { }

    ngOnInit() {
        // this.titleService.setTitle(this.title);
        // const script = document.createElement('script');
        // script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
        // script.async = true;
        // script.charset = 'utf-8';

        // // Append script to the document body
        // document.body.appendChild(script);

        // // Initialize HubSpot form after the script is loaded
        // script.onload = () => {
        // };
        // this.initHubSpotForm();
    }
    // private initHubSpotForm() {
    //     // Create the HubSpot form
    //     window.hbspt.forms.create({
    //         region: "eu1",
    //         portalId: "144368007",
    //         formId: "adb3eb4c-50b0-49c0-978a-c4edc4959805",
    //         target: '#hubspotFormContainer21'
    //     });

    // }
    onSubmit(): any {
      this.notAllow = false;
      if (this.portfolioForm.invalid) {
        Object.keys(this.portfolioForm.controls).forEach(key => {
          if (this.portfolioForm.controls[key].errors) {
            this.portfolioForm.controls[key].markAsTouched();
          }
        });
        this.notAllow = true;
      } else {
        this.portfolioForm.value.queryFor = this.queryForSelected;
        const data = {
          'toEmail': ['hello@buildtwin.com'],
          'from': 'no-reply@buildtwin.com',
          'subject': 'Customer Query Regarding BuildTwin Services',
          'formField': this.portfolioForm.value
        };
    
        return this.http.post<any>(`${this.URL}sendmail`, data, { 
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
        }).pipe(
          map((res: any) => {
            if (res.statusCode === 200) {
              this.portfolioForm.reset();
              this.queryForSelected = '';
              this.message.create('success', `Form submitted successfully!`);
              this.notAllow = true;
            }
          })
        ).subscribe();
      }
    }


      onChange(e: any, value:any) {
        this.queryForSelected = value;
      }
}