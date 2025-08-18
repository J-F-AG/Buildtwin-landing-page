import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelLiveTrackingNewComponent } from './live-tracking.component';

// import { LiveTrackingComponent } from './live-tracking.component';

describe('StructuralSteelLiveTrackingNewComponent', () => {
  let component: StructuralSteelLiveTrackingNewComponent;
  let fixture: ComponentFixture<StructuralSteelLiveTrackingNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelLiveTrackingNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelLiveTrackingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
