import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadFaqBuildtwinComponent } from './faq-buildtwin.component';

// import { FaqBuildtwinComponent } from './faq-buildtwin.component';

describe('CadFaqBuildtwinComponent', () => {
  let component: CadFaqBuildtwinComponent;
  let fixture: ComponentFixture<CadFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
