import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimLiveTrackingNewComponent } from './live-tracking.component';

// import { LiveTrackingComponent } from './live-tracking.component';

describe('BimLiveTrackingNewComponent', () => {
  let component: BimLiveTrackingNewComponent;
  let fixture: ComponentFixture<BimLiveTrackingNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimLiveTrackingNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimLiveTrackingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
