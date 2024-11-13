import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaLiveTrackingNewComponent } from './live-tracking.component';

// import { LiveTrackingComponent } from './live-tracking.component';

describe('BimUsaLiveTrackingNewComponent', () => {
  let component: BimUsaLiveTrackingNewComponent;
  let fixture: ComponentFixture<BimUsaLiveTrackingNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaLiveTrackingNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaLiveTrackingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
