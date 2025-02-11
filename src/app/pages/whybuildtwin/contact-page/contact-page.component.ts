import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
    notAllow: boolean = true;
    // title = 'Contact Us - Buildtwin';

    portfolioForm = this.fb.group({
        Message: ['', []],
        Name: ['', []],
        Telephone: ['', [Validators.pattern('^[0-9]*$')]],
        'E-mail': ['', [Validators.required, Validators.email]],
      })
      URL = 'https://aunjlali04.execute-api.eu-central-1.amazonaws.com/dev/';
    constructor(
        private fb: UntypedFormBuilder,
        private http: HttpClient,
        private message: NzMessageService,
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
          let key = Object.keys(this.portfolioForm.controls);
          let failData = key.filter(data => {
            if (this.portfolioForm.controls[data].errors != null) {
              this.portfolioForm.controls[data].markAsTouched();
            }
          });
          this.notAllow = true;
        } else {
          const data = {
            'toEmail': ['hello@buildtwin.com'],//['hello@buildtwin.com'],
            'from': 'no-reply@buildtwin.com',
            'subject': 'Customer Query Regarding BuildTwin Services',
            // 'ignoreField': ['Term'],
            'formField': this.portfolioForm.value
          };
          return this.http.post<any>(`${this.URL}sendmail`, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(
            map((res: any) => {
              if (res.statusCode === 200) {
                this.portfolioForm.reset(); // Reset form after successful submission
                this.message.create('success', `Form submitted successfully!`);
                this.notAllow = true;
                // this.router.navigateByUrl(`/${this.pg.responder[this.languageStatus].moduleLink}`)
              } else if (res.statusCode === 401) {
              }
            })
          ).subscribe((data: any) => { });
        }
      }
}