import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimFaqBuildtwinComponent } from './faq-buildtwin.component';

// import { FaqBuildtwinComponent } from './faq-buildtwin.component';

describe('BimFaqBuildtwinComponent', () => {
  let component: BimFaqBuildtwinComponent;
  let fixture: ComponentFixture<BimFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
