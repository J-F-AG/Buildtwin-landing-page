import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingDrawingFreelancersComponent } from './drawing-freelancers.component';

// import { DrawingFreelancersComponent } from './drawing-freelancers.component';

describe('DraftingDrawingFreelancersComponent', () => {
  let component: DraftingDrawingFreelancersComponent;
  let fixture: ComponentFixture<DraftingDrawingFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingDrawingFreelancersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingDrawingFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
