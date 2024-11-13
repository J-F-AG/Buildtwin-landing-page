import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaHowItWorksNewComponent } from './how-it-works.component';

// import { HowItWorksComponent } from './how-it-works.component';

describe('BimUsaHowItWorksNewComponent', () => {
  let component: BimUsaHowItWorksNewComponent;
  let fixture: ComponentFixture<BimUsaHowItWorksNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaHowItWorksNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaHowItWorksNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
