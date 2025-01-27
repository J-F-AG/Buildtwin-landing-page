import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { findFlagUrlByCountryName } from 'country-flags-svg';
import { catchError, map, Observable, of } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
  constructor(private _http: HttpClient, private _languageService: LanguageService) {}

  // Fetch Project Data
  getProjectData(payloadData: { category?: string; verified?: boolean }): Observable<any[]> {
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
    const params = new HttpParams()
      .set('page', '1')
      .set('mode', 'filter_project')
      .set('category', payloadData?.category || '')
      .set('verified', payloadData?.verified || '');
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
