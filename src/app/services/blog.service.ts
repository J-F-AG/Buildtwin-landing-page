import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private baseUrl = 'https://www.buildtwin.com/blog/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) {}

  // Get all blogs
  getAllBlogs(): Observable<any> {
    const url = `${this.baseUrl}?orderby=date&order=desc`;
    return this.http.get<any>(url);
  }

  // Get blogs by category
  getBlogsByCategory(category: number): Observable<any> {
    let url = `${this.baseUrl}`;
    if(category){
       url = `${this.baseUrl}?categories=${category}`;
    }
    return this.http.get<any>(url);
  }
  // Get blogs by category
  getBlogsByFeatured(payload): Observable<any> {
    const queryParams = Object.entries(payload)
    .map(([key, value]:any) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
    const url = `${this.baseUrl}?${queryParams}`;
    return this.http.get<any>(url);
    // const url = `${this.baseUrl}?categories=${category}`;
    // return this.http.get<any>(url);
  }
}
