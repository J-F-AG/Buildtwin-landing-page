import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimDrawingFreelancersComponent } from './drawing-freelancers.component';

// import { DrawingFreelancersComponent } from './drawing-freelancers.component';

describe('BimDrawingFreelancersComponent', () => {
  let component: BimDrawingFreelancersComponent;
  let fixture: ComponentFixture<BimDrawingFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimDrawingFreelancersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimDrawingFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
