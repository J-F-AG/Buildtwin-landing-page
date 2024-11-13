import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaFaqBuildtwinComponent } from './faq-buildtwin.component';

// import { FaqBuildtwinComponent } from './faq-buildtwin.component';

describe('BimUsaFaqBuildtwinComponent', () => {
  let component: BimUsaFaqBuildtwinComponent;
  let fixture: ComponentFixture<BimUsaFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
