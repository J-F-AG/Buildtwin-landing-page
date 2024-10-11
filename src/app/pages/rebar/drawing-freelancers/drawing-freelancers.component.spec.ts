import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarDrawingFreelancersComponent } from './drawing-freelancers.component';

// import { DrawingFreelancersComponent } from './drawing-freelancers.component';

describe('RebarDrawingFreelancersComponent', () => {
  let component: RebarDrawingFreelancersComponent;
  let fixture: ComponentFixture<RebarDrawingFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarDrawingFreelancersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarDrawingFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
