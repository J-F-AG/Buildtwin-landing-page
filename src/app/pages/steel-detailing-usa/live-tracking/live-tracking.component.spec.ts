import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaLiveTrackingNewComponent } from './live-tracking.component';

// import { LiveTrackingComponent } from './live-tracking.component';

describe('SteelDetailingUsaLiveTrackingNewComponent', () => {
  let component: SteelDetailingUsaLiveTrackingNewComponent;
  let fixture: ComponentFixture<SteelDetailingUsaLiveTrackingNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaLiveTrackingNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaLiveTrackingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
