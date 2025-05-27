import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelHowItWorksNewComponent } from './how-it-works.component';

// import { HowItWorksComponent } from './how-it-works.component';

describe('StructuralSteelHowItWorksNewComponent', () => {
  let component: StructuralSteelHowItWorksNewComponent;
  let fixture: ComponentFixture<StructuralSteelHowItWorksNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelHowItWorksNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelHowItWorksNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
