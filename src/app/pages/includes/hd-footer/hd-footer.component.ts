import { Component, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { FooterService } from './footer.service';
import { LanguageService } from 'src/app/services/language.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ServiceMappingService } from 'src/app/services/service-mapping.service';

@Component({
  selector: 'app-hd-footer',
  templateUrl: './hd-footer.component.html',
  styleUrls: ['./hd-footer.component.scss']
})
export class HdFooterComponent implements OnInit {
  @Input() isclaimed: any = false;

  serviceData: any = [];
  serviceInfoOnFooter: any = []
  isLoading = false;
  errorMessage = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2, public _footerService: FooterService, public _languageService:LanguageService, private _http: HttpClient, public serviceMappingService: ServiceMappingService) { 


  }
  showPopup=false;
  ngOnInit(): void {
    // this.loadScript();
    // this.getServiceData();
    this.serviceMappingService.getServiceInfo().subscribe(data => {
      this.serviceData = data;
      console.log("serviceData: ", this.serviceData);
      this.serviceInfoOnFooter = [];
      if (this.serviceData) {
        for (const item of this.serviceData) {
          this.serviceInfoOnFooter.push({
            id: item.id,
            serviceName: item.service_name,
            page_url: item.page_url
          });
        }
      }
      console.log("serviceInfoOnFooter: ", this.serviceInfoOnFooter);
    });
    // this.serviceInfoOnFooter = this.serviceData
  }
  // loadScript() {
  //   // Create script element
  //   const script = this.renderer.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

  //   // Append script element to the body
  //   this.renderer.appendChild(this.elRef.nativeElement, script);
  // }
  call(){
    this.showPopup =true
    }
    closePopupStatus($event) {
      this.showPopup = false;
    }


    getServiceData(): void {
      this.isLoading = true;
      this.getServiceDataApi().subscribe({
        next: (data: any) => {
          this.serviceData = data;
          this.isLoading = false;
          console.log('Service Data in footer:', this.serviceData.data);
          
          this.serviceInfoOnFooter = [];
          for(const item of this.serviceData.data){
            this.serviceInfoOnFooter.push({
              id: item.id,
              serviceName: item.service_name,
              page_url: item.page_url
            });
          }
          
          // Update the service mapping
          this.serviceMappingService.setServiceInfo(this.serviceInfoOnFooter);
          console.log("Services Info Array:", this.serviceInfoOnFooter);
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = 'Error fetching service data';
          console.error('Error fetching service data:', err);
        }
      });
    }
    
    getServiceDataApi(): Observable<any> {
      // Create headers with authorization token
      const headers = new HttpHeaders({
        'Authorization': 'eyJraWQiOiIrZ0pRaFc5VjdFaHhlcXF4WWpoa1wvN0E2VE1PVXJrQldrbitkY1pEamZ1TT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMzI0YjhjMi01MGIxLTcwNmUtODllOC03NjFlMWZiMTBjZjkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOmNvbXBhbnlfbmFtZSI6ImRldmVsb3BtZW50Y29ja3BpdC5idWlsZHR3aW4uY29tIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfOVVmTm1nNnRZIiwiY29nbml0bzp1c2VybmFtZSI6ImRoYXJtZW5kcmE5OEB5b3BtYWlsLmNvbSIsImN1c3RvbTpjb21wYW55X2lkIjoiMDY3NjEzYzktODc4OC00MTNkLTk1Y2UtYjVmNmMxN2E2NTAxIiwiY3VzdG9tOnBJZCI6ImV1LWNlbnRyYWwtMV85VWZObWc2dFkiLCJvcmlnaW5fanRpIjoiMWQ2ZWRkNmMtM2RkMC00OWNhLTgwY2EtYTZlMTdkMGZlYzllIiwiY3VzdG9tOnVzZXJUeXBlIjoiY3VzdG9tZXIiLCJhdWQiOiIxdTF1bG5ibjAwZGxqYXE3ZTR2bzdzbXJmNyIsImV2ZW50X2lkIjoiNmY0YjMzYmQtYTMyMi00ZjMwLTk1NDEtYzUxNmE4ZmRhMmJhIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206Y29tcGFuaWVzQWxsb3dlZCI6IntcImRlbW9cIjpcImUzODY1MTUzLTliZjAtNDQ4MS05NmI1LTQ5OTZiMmY4ODU1ZVwifSIsImF1dGhfdGltZSI6MTc0MDU0ODY3MCwiY3VzdG9tOmNJZCI6IjF1MXVsbmJuMDBkbGphcTdlNHZvN3NtcmY3IiwibmFtZSI6ImRoYXJtZW5kcmEiLCJleHAiOjE3NDE3NzY1ODksImlhdCI6MTc0MTY5MDE4OSwianRpIjoiZTRjYTE3NTAtN2U4Yi00YzI0LWIwYjYtNjRmOTI1YmY3YTkyIiwiZW1haWwiOiJkaGFybWVuZHJhOThAeW9wbWFpbC5jb20ifQ.QWcQWQ0Nx0JiCmVyZOzdFqCcEEb7YRR41fptDxWkDx_S6Px2rdxapNdlJzDhnYSBW9oo2amskA79_XKBzeg6kJP2JvpBu4T29ycMwF0H2YeQyp8D4sL3PVBZMxPM8zRe1yDtgJ4T8zQWKyzWmy8XQjwKnrwqa8q3lftSNp2sc4dvV3LlB7N3aT1SgUwqh4s3bbhp7JVVDZKaf5mBBJzc4POOMy4iOt4J0XqYim61a1tj1Q2Dpha_S2I7tN5Pndxc7eXsOS2pauCstKdiZ31VXFVMcCIgKsRfukdgyXxq7Kxb_pgACjjYJzcouNTFhXwQG7Uz1t5r7_a6hKLTbQM7Kg'
      });
  
      // API URL
      const apiUrl = 'https://u2xmt1kxvi.execute-api.eu-central-1.amazonaws.com/development/get-service-pages-data';
      
      // Make the HTTP GET request with headers
      return this._http.get(apiUrl, { headers }).pipe(
        catchError(error => {
          console.error('API error:', error);
          return of([]); // Return empty array in case of error
        })
      );
    }
    
    // Process data if needed, following the pattern from referenced file
    processServiceData(data: any): any[] {
      // Add your data processing logic here similar to updateProjectLogos in the reference file
      // For example, you might need to format or transform the API response
      return data;
    }



   
}


