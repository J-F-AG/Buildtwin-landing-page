import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaDrawingFreelancersComponent } from './drawing-freelancers.component';

// import { DrawingFreelancersComponent } from './drawing-freelancers.component';

describe('BimUsaDrawingFreelancersComponent', () => {
  let component: BimUsaDrawingFreelancersComponent;
  let fixture: ComponentFixture<BimUsaDrawingFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaDrawingFreelancersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaDrawingFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
