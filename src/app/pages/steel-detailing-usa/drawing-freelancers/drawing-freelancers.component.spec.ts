import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaDrawingFreelancersComponent } from './drawing-freelancers.component';

// import { DrawingFreelancersComponent } from './drawing-freelancers.component';

describe('SteelDetailingUsaDrawingFreelancersComponent', () => {
  let component: SteelDetailingUsaDrawingFreelancersComponent;
  let fixture: ComponentFixture<SteelDetailingUsaDrawingFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaDrawingFreelancersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaDrawingFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
