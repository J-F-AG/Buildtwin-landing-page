import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingFreelancersComponent } from './drawing-freelancers.component';

describe('DrawingFreelancersComponent', () => {
  let component: DrawingFreelancersComponent;
  let fixture: ComponentFixture<DrawingFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawingFreelancersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawingFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
