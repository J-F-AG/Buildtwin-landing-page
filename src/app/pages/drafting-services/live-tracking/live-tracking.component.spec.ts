import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingLiveTrackingNewComponent } from './live-tracking.component';

// import { LiveTrackingComponent } from './live-tracking.component';

describe('DraftingLiveTrackingNewComponent', () => {
  let component: DraftingLiveTrackingNewComponent;
  let fixture: ComponentFixture<DraftingLiveTrackingNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingLiveTrackingNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingLiveTrackingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
