import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private baseUrl = 'http://35.158.244.95/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) {}

  // Get all blogs
  getAllBlogs(): Observable<any> {
    const url = `${this.baseUrl}?orderby=date&order=desc`;
    return this.http.get<any>(url);
  }

  // Get blogs by category
  getBlogsByCategory(category: number): Observable<any> {
    const url = `${this.baseUrl}?categories=${category}`;
    return this.http.get<any>(url);
  }
}
