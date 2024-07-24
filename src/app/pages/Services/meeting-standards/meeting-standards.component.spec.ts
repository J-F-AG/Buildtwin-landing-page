import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingStandardsComponent } from './meeting-standards.component';

describe('MeetingStandardsComponent', () => {
  let component: MeetingStandardsComponent;
  let fixture: ComponentFixture<MeetingStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingStandardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
