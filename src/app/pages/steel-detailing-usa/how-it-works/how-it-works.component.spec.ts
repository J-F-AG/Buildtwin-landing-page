import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaHowItWorksNewComponent } from './how-it-works.component';

// import { HowItWorksComponent } from './how-it-works.component';

describe('SteelDetailingUsaHowItWorksNewComponent', () => {
  let component: SteelDetailingUsaHowItWorksNewComponent;
  let fixture: ComponentFixture<SteelDetailingUsaHowItWorksNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaHowItWorksNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaHowItWorksNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
