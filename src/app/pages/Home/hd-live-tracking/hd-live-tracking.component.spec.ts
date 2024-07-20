import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdLiveTrackingComponent } from './hd-live-tracking.component';

describe('HdLiveTrackingComponent', () => {
  let component: HdLiveTrackingComponent;
  let fixture: ComponentFixture<HdLiveTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdLiveTrackingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdLiveTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
