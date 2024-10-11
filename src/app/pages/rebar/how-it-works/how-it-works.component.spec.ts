import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarHowItWorksNewComponent } from './how-it-works.component';

// import { HowItWorksComponent } from './how-it-works.component';

describe('RebarHowItWorksNewComponent', () => {
  let component: RebarHowItWorksNewComponent;
  let fixture: ComponentFixture<RebarHowItWorksNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarHowItWorksNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarHowItWorksNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
