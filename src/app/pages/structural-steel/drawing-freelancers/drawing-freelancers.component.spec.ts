import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelDrawingFreelancersComponent } from './drawing-freelancers.component';

// import { DrawingFreelancersComponent } from './drawing-freelancers.component';

describe('StructuralSteelDrawingFreelancersComponent', () => {
  let component: StructuralSteelDrawingFreelancersComponent;
  let fixture: ComponentFixture<StructuralSteelDrawingFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelDrawingFreelancersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelDrawingFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
