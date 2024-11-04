import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimHowItWorksNewComponent } from './how-it-works.component';

// import { HowItWorksComponent } from './how-it-works.component';

describe('BimHowItWorksNewComponent', () => {
  let component: BimHowItWorksNewComponent;
  let fixture: ComponentFixture<BimHowItWorksNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimHowItWorksNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimHowItWorksNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
