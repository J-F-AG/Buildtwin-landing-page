import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sectorMeetingStandardsComponent } from './meeting-standards.component';

describe('sectorMeetingStandardsComponent', () => {
  let component: sectorMeetingStandardsComponent;
  let fixture: ComponentFixture<sectorMeetingStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [sectorMeetingStandardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(sectorMeetingStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
