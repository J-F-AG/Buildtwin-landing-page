import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sectorDirectBookingComponent } from './direct-booking.component';

describe('sectorDirectBookingComponent', () => {
  let component: sectorDirectBookingComponent;
  let fixture: ComponentFixture<sectorDirectBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [sectorDirectBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(sectorDirectBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
