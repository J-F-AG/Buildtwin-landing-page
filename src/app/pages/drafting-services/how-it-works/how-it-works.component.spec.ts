import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingHowItWorksNewComponent } from './how-it-works.component';

// import { HowItWorksComponent } from './how-it-works.component';

describe('DraftingHowItWorksNewComponent', () => {
  let component: DraftingHowItWorksNewComponent;
  let fixture: ComponentFixture<DraftingHowItWorksNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingHowItWorksNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingHowItWorksNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
