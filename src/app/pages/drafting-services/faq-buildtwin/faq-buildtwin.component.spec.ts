import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingFaqBuildtwinComponent } from './faq-buildtwin.component';

// import { FaqBuildtwinComponent } from './faq-buildtwin.component';

describe('DraftingFaqBuildtwinComponent', () => {
  let component: DraftingFaqBuildtwinComponent;
  let fixture: ComponentFixture<DraftingFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
