import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalPopupService {
  private html: BehaviorSubject<any>;

  constructor() {
    this.html = new BehaviorSubject<any>('');
  }

  modal(): Observable<any> {
    return this.html.asObservable();
  }

  openModal(html: any, type): void {
    this.html.next({html, type});
  }

  closeModal() {
    this.html.next('');
  }
}
