import { Component, OnInit ,  OnChanges, SimpleChanges} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ServiceMappingService } from 'src/app/services/service-mapping.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';
import { marked } from 'marked';

@Component({
  selector: 'app-service-dynamic',
  templateUrl: './services-new.component.html',
  styleUrl: './services-new.component.scss'
})
export class ServiceDynamicComponent implements OnInit {
  toggleSidebarStatus = false;
  serviceData: any = {};
  headerObject: any = {};
  companiesInfo: any = [];
  subServicesInfo: any = [];
  precastArray: any = [];
  drawingsInfo: any = [];
  isLoading = false;
  errorMessage = '';
  serviceId: string | null = null;
  
  constructor(
    private _http: HttpClient,
    private route: ActivatedRoute,
    public serviceMappingService: ServiceMappingService,
    private sanitizer: DomSanitizer
  ) {}
  
  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.serviceData)
    }, 5000);
    console.log('Services component initialized');
  
    // Get the parameter from route
    this.route.paramMap.subscribe(params => {
      let pageUrl = params.get('id'); // The route parameter is named 'id' but contains page_url
      pageUrl = 'services/' + pageUrl;
      console.log('Page URL from route:', pageUrl);
      
      if (!pageUrl) {
        console.error('No page URL provided in route');
        return;
      }
      
      this.isLoading = true;
      
      // Use the new method to get the complete service data directly
      this.serviceMappingService.getServicePageDataByUrl(pageUrl).subscribe(
        data => {
          if (data) {
            this.serviceData = data;
            // console.log('Service data retrieved directly:', this.serviceData);
            this.processServiceData();
          } else {
            console.error('Service data not found for page URL:', pageUrl);
            this.errorMessage = 'Service not found';
          }
          this.isLoading = false;
        },
        error => {
          console.error('Error getting service data:', error);
          this.errorMessage = 'Error fetching service data';
          this.isLoading = false;
        }
      );
    });
  }




  
  toggleSidebar() {
    this.toggleSidebarStatus = !this.toggleSidebarStatus;
  }
  
  // Process the service data that we got directly from the mapping service
  processServiceData(): void {
    if (!this.serviceData || !this.serviceData.data || this.serviceData.data.length === 0) {
      console.error('No service data available to process');
      return;
    }
    
    console.log('Processing service data:', this.serviceData.data);
    
    this.headerObject = {
      bannerHeading: this.serviceData.data[0].banner_section_heading,
      bannerSubHeading: this.serviceData.data[0].banner_section_sub_heading
    }

    this.companiesInfo = [];
    for(const c of this.serviceData.data[0].companies){
      let obj = {
        id : c.id,
        width : 70,
        height : 33,
        icon : c.company_logo,
        name : c.company_name,
        company_page_url: c.company_page_url
      }
      this.companiesInfo.push(obj);
    }

    this.drawingsInfo = [];
    for(const d of this.serviceData.data[0].drawings){
      let obj = {
        serviceCompany: d.company_name,
        img: d.drawing_image_url,
        serviceCompanyIcon: d.company_logo,
        serviceDescription: d.company_description,
        company_page_url: d.company_page_url,
        height: 44,
        width: 84
      }
      // console.log("while pushing obj into drawingsInfo: ", obj);
      this.drawingsInfo.push(obj);
    }

    this.subServicesInfo = this.serviceData.data[0].sub_services;
    for(const item of this.subServicesInfo){
      item.industryStandardSectionHeading = this.serviceData.data[0].industry_standard_section_heading;
      item.industryStandardSectionSubHeading = this.serviceData.data[0].industry_standard_section_sub_heading;
      item.standardCodes = [];
      for(const i of this.serviceData.data[0].standard_codes){
        item.standardCodes.push(i.code_name);
      }
    }
    
    this.precastArray = [];
    for(let item of this.subServicesInfo){
      
      this.precastArray.push({
        name: item.sub_service_name,
        icon_url: item.icon_url,
        details: [
          {
            mainContent: item.sub_service_description,
            header: item.industryStandardSectionHeading,
            subContent: item.industryStandardSectionSubHeading,
            items: item.standardCodes,
          }
        ]
      })
    };

    //project section heading
            let textWithBreaks = this.serviceData.data[0].project_section_heading.replace(/\n/g, '<br>');
            let html = marked(textWithBreaks);
      
           // Create temporary DOM element
           let tempDiv = document.createElement('div');
           tempDiv.innerHTML = html;
         
           // Check if we have a p tag as first child
           if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
             // Properly cast to Element to access innerHTML
             const pElement = tempDiv.firstChild as Element;
             html = pElement.innerHTML;
           }
      
    this.serviceData.data[0].project_section_heading = this.sanitizer.bypassSecurityTrustHtml(html);

    //project section sub-heading
            textWithBreaks = this.serviceData.data[0].project_section_sub_heading.replace(/\n/g, '<br>');
            html = marked(textWithBreaks);
      
           // Create temporary DOM element
           tempDiv = document.createElement('div');
           tempDiv.innerHTML = html;
         
           // Check if we have a p tag as first child
           if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
             // Properly cast to Element to access innerHTML
             const pElement = tempDiv.firstChild as Element;
             html = pElement.innerHTML;
           }
      
           this.serviceData.data[0].project_section_sub_heading = this.sanitizer.bypassSecurityTrustHtml(html);


    //sector section heading 
           textWithBreaks = this.serviceData.data[0].sector_section_heading.replace(/\n/g, '<br>');
            html = marked(textWithBreaks);
      
           // Create temporary DOM element
           tempDiv = document.createElement('div');
           tempDiv.innerHTML = html;
         
           // Check if we have a p tag as first child
           if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
             // Properly cast to Element to access innerHTML
             const pElement = tempDiv.firstChild as Element;
             html = pElement.innerHTML;
           }
      
           this.serviceData.data[0].sector_section_heading = this.sanitizer.bypassSecurityTrustHtml(html);

  //sector section sub-heading
      textWithBreaks = this.serviceData.data[0].sector_section_sub_heading.replace(/\n/g, '<br>');
      html = marked(textWithBreaks);

     // Create temporary DOM element
     tempDiv = document.createElement('div');
     tempDiv.innerHTML = html;
   
     // Check if we have a p tag as first child
     if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
       // Properly cast to Element to access innerHTML
       const pElement = tempDiv.firstChild as Element;
       html = pElement.innerHTML;
     }

     this.serviceData.data[0].sector_section_sub_heading = this.sanitizer.bypassSecurityTrustHtml(html);


//   //faq section heading
     textWithBreaks = this.serviceData.data[0].faq_section_heading.replace(/\n/g, '<br>');
     html = marked(textWithBreaks);

    // Create temporary DOM element
    tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
  
    // Check if we have a p tag as first child
    if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
      // Properly cast to Element to access innerHTML
      const pElement = tempDiv.firstChild as Element;
      html = pElement.innerHTML;
    }

    this.serviceData.data[0].faq_section_heading = this.sanitizer.bypassSecurityTrustHtml(html);

// //faq section sub-heading
    textWithBreaks = this.serviceData.data[0].faq_section_sub_heading.replace(/\n/g, '<br>');
     html = marked(textWithBreaks);

    // Create temporary DOM element
    tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
  
    // Check if we have a p tag as first child
    if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
      // Properly cast to Element to access innerHTML
      const pElement = tempDiv.firstChild as Element;
      html = pElement.innerHTML;
    }

    this.serviceData.data[0].faq_section_sub_heading = this.sanitizer.bypassSecurityTrustHtml(html);



  //for faq answers
  for(let item of this.serviceData.data[0].faqs){
    //for sub-service description
          // let textWithBreaks = item.answer.replace(/\n/g, '<br>');
            let html = marked(item.answer);
      
           // Create temporary DOM element
          //  let tempDiv = document.createElement('div');
          //  tempDiv.innerHTML = html;
         
          //  // Check if we have a p tag as first child
          //  if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
          //    // Properly cast to Element to access innerHTML
          //    const pElement = tempDiv.firstChild as Element;
          //    html = pElement.innerHTML;
          //  }
      
            item.answer = this.sanitizer.bypassSecurityTrustHtml(html);
  }

  }
  
  // Keep this method as a fallback, but it's no longer needed for the main flow
  getServiceDataApi(): Observable<any> {
    // Create headers with authorization token
    const headers = new HttpHeaders({
      'Authorization': 'eyJraWQiOiIrZ0pRaFc5VjdFaHhlcXF4WWpoa1wvN0E2VE1PVXJrQldrbitkY1pEamZ1TT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMzI0YjhjMi01MGIxLTcwNmUtODllOC03NjFlMWZiMTBjZjkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOmNvbXBhbnlfbmFtZSI6ImRldmVsb3BtZW50Y29ja3BpdC5idWlsZHR3aW4uY29tIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfOVVmTm1nNnRZIiwiY29nbml0bzp1c2VybmFtZSI6ImRoYXJtZW5kcmE5OEB5b3BtYWlsLmNvbSIsImN1c3RvbTpjb21wYW55X2lkIjoiMDY3NjEzYzktODc4OC00MTNkLTk1Y2UtYjVmNmMxN2E2NTAxIiwiY3VzdG9tOnBJZCI6ImV1LWNlbnRyYWwtMV85VWZObWc2dFkiLCJvcmlnaW5fanRpIjoiMWQ2ZWRkNmMtM2RkMC00OWNhLTgwY2EtYTZlMTdkMGZlYzllIiwiY3VzdG9tOnVzZXJUeXBlIjoiY3VzdG9tZXIiLCJhdWQiOiIxdTF1bG5ibjAwZGxqYXE3ZTR2bzdzbXJmNyIsImV2ZW50X2lkIjoiNmY0YjMzYmQtYTMyMi00ZjMwLTk1NDEtYzUxNmE4ZmRhMmJhIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206Y29tcGFuaWVzQWxsb3dlZCI6IntcImRlbW9cIjpcImUzODY1MTUzLTliZjAtNDQ4MS05NmI1LTQ5OTZiMmY4ODU1ZVwifSIsImF1dGhfdGltZSI6MTc0MDU0ODY3MCwiY3VzdG9tOmNJZCI6IjF1MXVsbmJuMDBkbGphcTdlNHZvN3NtcmY3IiwibmFtZSI6ImRoYXJtZW5kcmEiLCJleHAiOjE3NDE3NzY1ODksImlhdCI6MTc0MTY5MDE4OSwianRpIjoiZTRjYTE3NTAtN2U4Yi00YzI0LWIwYjYtNjRmOTI1YmY3YTkyIiwiZW1haWwiOiJkaGFybWVuZHJhOThAeW9wbWFpbC5jb20ifQ.QWcQWQ0Nx0JiCmVyZOzdFqCcEEb7YRR41fptDxWkDx_S6Px2rdxapNdlJzDhnYSBW9oo2amskA79_XKBzeg6kJP2JvpBu4T29ycMwF0H2YeQyp8D4sL3PVBZMxPM8zRe1yDtgJ4T8zQWKyzWmy8XQjwKnrwqa8q3lftSNp2sc4dvV3LlB7N3aT1SgUwqh4s3bbhp7JVVDZKaf5mBBJzc4POOMy4iOt4J0XqYim61a1tj1Q2Dpha_S2I7tN5Pndxc7eXsOS2pauCstKdiZ31VXFVMcCIgKsRfukdgyXxq7Kxb_pgACjjYJzcouNTFhXwQG7Uz1t5r7_a6hKLTbQM7Kg'
    });

    // API URL
    const baseUrl = 'https://u2xmt1kxvi.execute-api.eu-central-1.amazonaws.com/development/get-service-pages-data';
    
    // Add the service ID as a query parameter if available
    const apiUrl = this.serviceId ? `${baseUrl}?id=${this.serviceId}` : baseUrl;
    
    // Make the HTTP GET request with headers
    return this._http.get(apiUrl, { headers }).pipe(
      catchError(error => {
        console.error('API error:', error);
        return of([]); // Return empty array in case of error
      })
    );
  }
}