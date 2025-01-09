import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadHowItWorksNewComponent } from './how-it-works.component';

// import { HowItWorksComponent } from './how-it-works.component';

describe('CadHowItWorksNewComponent', () => {
  let component: CadHowItWorksNewComponent;
  let fixture: ComponentFixture<CadHowItWorksNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadHowItWorksNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadHowItWorksNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
