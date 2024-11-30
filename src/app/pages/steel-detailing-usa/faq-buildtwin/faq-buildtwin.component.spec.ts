import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaFaqBuildtwinComponent } from './faq-buildtwin.component';

// import { FaqBuildtwinComponent } from './faq-buildtwin.component';

describe('SteelDetailingUsaFaqBuildtwinComponent', () => {
  let component: SteelDetailingUsaFaqBuildtwinComponent;
  let fixture: ComponentFixture<SteelDetailingUsaFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
