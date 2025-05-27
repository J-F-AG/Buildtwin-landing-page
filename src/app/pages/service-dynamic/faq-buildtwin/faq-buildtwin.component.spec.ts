import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarFaqBuildtwinComponent } from './faq-buildtwin.component';

// import { FaqBuildtwinComponent } from './faq-buildtwin.component';

describe('RebarFaqBuildtwinComponent', () => {
  let component: RebarFaqBuildtwinComponent;
  let fixture: ComponentFixture<RebarFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
