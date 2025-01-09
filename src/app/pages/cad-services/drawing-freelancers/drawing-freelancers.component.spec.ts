import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadDrawingFreelancersComponent } from './drawing-freelancers.component';

// import { DrawingFreelancersComponent } from './drawing-freelancers.component';

describe('CadDrawingFreelancersComponent', () => {
  let component: CadDrawingFreelancersComponent;
  let fixture: ComponentFixture<CadDrawingFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadDrawingFreelancersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadDrawingFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
