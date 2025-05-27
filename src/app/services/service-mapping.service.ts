import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap, take, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceMappingService {
  private pageUrlToIdMap: Map<string, string> = new Map();
  private idToServiceMap: Map<string, any> = new Map();
  private dataLoaded$ = new BehaviorSubject<boolean>(false);
  servicesData: any = [];
  private readonly CACHE_KEY = 'services_cache_data';
  private readonly CACHE_TIMESTAMP_KEY = 'services_cache_timestamp';
  // private readonly CACHE_EXPIRY_TIME = 12000; //  
  private readonly CACHE_EXPIRY_TIME = 3600000; // 1 hour in milliseconds
  
  constructor(private http: HttpClient) {
    console.log('ServiceMappingService initialized');
    
    // Try to load data from localStorage first
    this.loadFromCache();
    
    // If not loaded from cache, fetch from API
    if (!this.dataLoaded$.value) {
      this.fetchServiceData().subscribe(
        data => console.log('Initial data loaded successfully, count:', data.length),
        err => console.error('Failed to load initial data:', err)
      );
    }
  }

  private loadFromCache(): void {
    try {
      const cachedTimestamp = localStorage.getItem(this.CACHE_TIMESTAMP_KEY);
      const now = new Date().getTime();
      
      // Check if cache exists and is not expired
      if (cachedTimestamp && (now - parseInt(cachedTimestamp)) < this.CACHE_EXPIRY_TIME) {
        const cachedData = localStorage.getItem(this.CACHE_KEY);
        
        if (cachedData) {
          console.log('Loading data from cache');
          this.servicesData = JSON.parse(cachedData);
          
          // Create mapping objects from cached data
          if (this.servicesData && Array.isArray(this.servicesData)) {
            const services = [];
            for (const item of this.servicesData) {
              services.push({
                id: item.id,
                serviceName: item.service_name,
                page_url: item.page_url
              });
            }
            this.setServiceInfo(services);
          }
          
          return;
        }
      } else if (cachedTimestamp) {
        console.log('Cache expired, will fetch fresh data');
      }
    } catch (error) {
      console.error('Error loading from cache:', error);
    }
  }

  private saveToCache(data: any): void {
    try {
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(this.CACHE_TIMESTAMP_KEY, new Date().getTime().toString());
      console.log('Data saved to cache');
    } catch (error) {
      console.error('Error saving to cache:', error);
    }
  }

  setServiceInfo(services: any[]): void {
    console.log('Setting service info with', services.length, 'services');
    
    // Clear existing maps
    this.pageUrlToIdMap.clear();
    this.idToServiceMap.clear();
    
    services.forEach(service => {
      this.pageUrlToIdMap.set(service.page_url, service.id);
      this.idToServiceMap.set(service.id, service);
    });
    
    // Log all mappings for debugging
    console.log('All page URL mappings:');
    this.pageUrlToIdMap.forEach((id, url) => {
      console.log(`${url} -> ${id}`);
    });
    
    this.dataLoaded$.next(true);
  }

  getServiceInfo(): Observable<any> {
    // If data is already loaded, return it immediately
    if (this.dataLoaded$.value) {
      return of(this.servicesData);
    }
    
    // Otherwise, fetch the data first and then return it
    return this.fetchServiceData().pipe(
      map(() => this.servicesData)
    );
  }

//   getServiceByPageUrl(pageUrl: string): Observable<any> {
//     console.log(`Looking up service for page URL: ${pageUrl}`);
    
//     // If data isn't loaded yet, force a fetch
//     if (!this.dataLoaded$.value) {
//       console.log('Data not loaded yet, fetching first');
//       return this.fetchServiceData().pipe(
//         switchMap(() => {
//           return this.lookupService(pageUrl);
//         })
//       );
//     }
    
//     return this.lookupService(pageUrl);
//   }
  
  // Get complete service page data by page URL
  getServicePageDataByUrl(pageUrl: string): Observable<any> {
    console.log(`Looking up complete service page data for URL: ${pageUrl}`);
    
    // If data isn't loaded yet, fetch it first
    if (!this.dataLoaded$.value) {
      console.log('Data not loaded yet, fetching first');
      return this.fetchServiceData().pipe(
        switchMap(() => {
          return this.lookupCompleteServiceData(pageUrl);
        })
      );
    }
    
    return this.lookupCompleteServiceData(pageUrl);
  }
  
  // Helper method to find the complete service data object
  private lookupCompleteServiceData(pageUrl: string): Observable<any> {
    const normalizedPageUrl = this.normalizeUrl(pageUrl);
    // console.log(`Looking up complete data for normalized URL: ${normalizedPageUrl}`);
    
    // Find the service ID first
    let id = this.pageUrlToIdMap.get(normalizedPageUrl);
    
    // Try case-insensitive match if needed
    if (!id) {
      for (const [url, serviceId] of this.pageUrlToIdMap.entries()) {
        if (url.toLowerCase() === normalizedPageUrl.toLowerCase()) {
          id = serviceId;
          break;
        }
      }
    }
    
    // If we found the ID, look for the matching object in servicesData
    if (id) {
      // Find the complete service data object in the original data array
      const serviceData = this.servicesData.find((item: any) => item.id === id);
      
      if (serviceData) {
        console.log(`Found complete service data for ID ${id}`);
        // Return the data in the format expected by the component
        return of({ data: [serviceData] });
      }
    }
    
    console.error(`No service data found for page URL: ${normalizedPageUrl}`);
    return of(null);
  }
  
//   private lookupService(pageUrl: string): Observable<any> {
//     // Handle URL path normalization - in case there are trailing slashes or other inconsistencies
//     const normalizedPageUrl = this.normalizeUrl(pageUrl);
//     console.log(`Looking up normalized URL: ${normalizedPageUrl}`);
    
//     // Check for exact match
//     let id = this.pageUrlToIdMap.get(normalizedPageUrl);
    
//     // If no exact match, try case-insensitive match or partial match
//     if (!id) {
//       console.log('No exact match found, trying case-insensitive match');
//       // Try case-insensitive match
//       for (const [url, serviceId] of this.pageUrlToIdMap.entries()) {
//         if (url.toLowerCase() === normalizedPageUrl.toLowerCase()) {
//           console.log(`Found case-insensitive match: ${url}`);
//           id = serviceId;
//           break;
//         }
//       }
//     }
    
//     const service = id ? this.idToServiceMap.get(id) : null;
    
//     if (!service) {
//       console.error(`No service found for page URL: ${normalizedPageUrl}`);
//       console.log('Available URLs:', Array.from(this.pageUrlToIdMap.keys()));
//       return of(null);
//     }
    
//     console.log(`Found service with ID ${service.id} for URL ${normalizedPageUrl}`);
//     return of(service);
//   }
  
  // Normalize URLs to handle common issues
  private normalizeUrl(url: string): string {
    // Remove trailing slashes
    let normalized = url.trim();
    
    // Remove any potential language prefix (common issue)
    // const languagePrefixes = ['en/', 'fr/', 'de/', 'es/'];
    // for (const prefix of languagePrefixes) {
    //   if (normalized.startsWith(prefix)) {
    //     normalized = normalized.substring(prefix.length);
    //     break;
    //   }
    // }
    
    // Remove leading/trailing slashes
    normalized = normalized.replace(/^\/+|\/+$/g, '');
    
    // console.log(`Normalized URL from ${url} to ${normalized}`);
    return normalized;
  }

  fetchServiceData(): Observable<any[]> {
    console.log('Fetching service data from API');
    
    // If data is already loaded, no need to fetch again
    if (this.dataLoaded$.value) {
      console.log('Data already loaded, using cached data');
      return of(Array.from(this.idToServiceMap.values()));
    }
    
    const headers = new HttpHeaders({
      'Authorization': 'eyJraWQiOiIrZ0pRaFc5VjdFaHhlcXF4WWpoa1wvN0E2VE1PVXJrQldrbitkY1pEamZ1TT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMzI0YjhjMi01MGIxLTcwNmUtODllOC03NjFlMWZiMTBjZjkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiY3VzdG9tOmNvbXBhbnlfbmFtZSI6ImRldmVsb3BtZW50Y29ja3BpdC5idWlsZHR3aW4uY29tIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfOVVmTm1nNnRZIiwiY29nbml0bzp1c2VybmFtZSI6ImRoYXJtZW5kcmE5OEB5b3BtYWlsLmNvbSIsImN1c3RvbTpjb21wYW55X2lkIjoiMDY3NjEzYzktODc4OC00MTNkLTk1Y2UtYjVmNmMxN2E2NTAxIiwiY3VzdG9tOnBJZCI6ImV1LWNlbnRyYWwtMV85VWZObWc2dFkiLCJvcmlnaW5fanRpIjoiMWQ2ZWRkNmMtM2RkMC00OWNhLTgwY2EtYTZlMTdkMGZlYzllIiwiY3VzdG9tOnVzZXJUeXBlIjoiY3VzdG9tZXIiLCJhdWQiOiIxdTF1bG5ibjAwZGxqYXE3ZTR2bzdzbXJmNyIsImV2ZW50X2lkIjoiNmY0YjMzYmQtYTMyMi00ZjMwLTk1NDEtYzUxNmE4ZmRhMmJhIiwidG9rZW5fdXNlIjoiaWQiLCJjdXN0b206Y29tcGFuaWVzQWxsb3dlZCI6IntcImRlbW9cIjpcImUzODY1MTUzLTliZjAtNDQ4MS05NmI1LTQ5OTZiMmY4ODU1ZVwifSIsImF1dGhfdGltZSI6MTc0MDU0ODY3MCwiY3VzdG9tOmNJZCI6IjF1MXVsbmJuMDBkbGphcTdlNHZvN3NtcmY3IiwibmFtZSI6ImRoYXJtZW5kcmEiLCJleHAiOjE3NDE3NzY1ODksImlhdCI6MTc0MTY5MDE4OSwianRpIjoiZTRjYTE3NTAtN2U4Yi00YzI0LWIwYjYtNjRmOTI1YmY3YTkyIiwiZW1haWwiOiJkaGFybWVuZHJhOThAeW9wbWFpbC5jb20ifQ.QWcQWQ0Nx0JiCmVyZOzdFqCcEEb7YRR41fptDxWkDx_S6Px2rdxapNdlJzDhnYSBW9oo2amskA79_XKBzeg6kJP2JvpBu4T29ycMwF0H2YeQyp8D4sL3PVBZMxPM8zRe1yDtgJ4T8zQWKyzWmy8XQjwKnrwqa8q3lftSNp2sc4dvV3LlB7N3aT1SgUwqh4s3bbhp7JVVDZKaf5mBBJzc4POOMy4iOt4J0XqYim61a1tj1Q2Dpha_S2I7tN5Pndxc7eXsOS2pauCstKdiZ31VXFVMcCIgKsRfukdgyXxq7Kxb_pgACjjYJzcouNTFhXwQG7Uz1t5r7_a6hKLTbQM7Kg'
    });

    const apiUrl = 'https://u2xmt1kxvi.execute-api.eu-central-1.amazonaws.com/development/get-service-pages-data';
    
    return this.http.get(apiUrl, { headers }).pipe(
      tap(response => console.log('Raw API response:', response)),
      map((response: any) => {
        this.servicesData = response.data;
        
        // Save data to cache
        this.saveToCache(response.data);
        
        const services = [];
        if (response && response.data && Array.isArray(response.data)) {
          for (const item of response.data) {
            services.push({
              id: item.id,
              serviceName: item.service_name,
              page_url: item.page_url
            });
          }
          console.log(`Processed ${services.length} services from API response`);
          this.setServiceInfo(services);
        } else {
          console.error('Invalid API response format:', response);
        }
        return services;
      }),
      catchError(error => {
        console.error('API error:', error);
        this.dataLoaded$.next(false);
        return throwError(error);
      })
    );
  }
}