import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-customer-success',
  templateUrl: './customer-success.component.html',
  styleUrl: './customer-success.component.scss'
})
export class CustomerSuccessComponent {
  notAllow: boolean = true;
  subjectList = [
    "Accessing private portfolios",
    "Get competitive quotes",
    "Find new vendors",
    "Get new projects",
    "BuildTwin Pro",
    "AI Features",
  ]
  subjectArray: any = [];

  portfolioForm = this.fb.group({
    Company: ['', [Validators.required]],
    Name: ['', [Validators.required]],
    Telephone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    'E-mail': ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    Term: ['', [Validators.required]]
  })

  URL = 'https://aunjlali04.execute-api.eu-central-1.amazonaws.com/dev/';
  constructor(
    private fb: UntypedFormBuilder,
    private http: HttpClient,
    private message: NzMessageService,
  ){
  }
  onChange(e:any) {
    if(e.target.checked) {
      this.subjectArray.push(e.target.value);
    }else {
      this.subjectArray.pop(e.target.value);
    }
    this.subjectArray.join(',')
  }

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
      this.portfolioForm.value.subject = this.subjectArray;
      const data = {
        'toEmail': ['hello@buildtwin.com'],//['hello@buildtwin.com'],
        'from': 'no-reply@buildtwin.com',
        'subject': 'New Customer Inquiry: Request for Success Stories',
        'ignoreField': ['Term'],
        'formField': this.portfolioForm.value
      };
      return this.http.post<any>(`${this.URL}sendmail`, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(
        map((res: any) => {
          if (res.statusCode === 200) {
            this.portfolioForm.reset(); // Reset form after successful submission
            this.subjectArray = [];
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
