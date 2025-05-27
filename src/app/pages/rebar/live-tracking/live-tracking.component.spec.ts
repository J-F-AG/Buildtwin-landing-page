import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarLiveTrackingNewComponent } from './live-tracking.component';

// import { LiveTrackingComponent } from './live-tracking.component';

describe('RebarLiveTrackingNewComponent', () => {
  let component: RebarLiveTrackingNewComponent;
  let fixture: ComponentFixture<RebarLiveTrackingNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarLiveTrackingNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarLiveTrackingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
