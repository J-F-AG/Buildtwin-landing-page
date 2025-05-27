import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelFaqBuildtwinComponent } from './faq-buildtwin.component';

// import { FaqBuildtwinComponent } from './faq-buildtwin.component';

describe('StructuralSteelFaqBuildtwinComponent', () => {
  let component: StructuralSteelFaqBuildtwinComponent;
  let fixture: ComponentFixture<StructuralSteelFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
