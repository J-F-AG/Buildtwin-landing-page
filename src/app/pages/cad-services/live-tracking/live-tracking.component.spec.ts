import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadLiveTrackingNewComponent } from './live-tracking.component';

// import { LiveTrackingComponent } from './live-tracking.component';

describe('CadLiveTrackingNewComponent', () => {
  let component: CadLiveTrackingNewComponent;
  let fixture: ComponentFixture<CadLiveTrackingNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadLiveTrackingNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadLiveTrackingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
