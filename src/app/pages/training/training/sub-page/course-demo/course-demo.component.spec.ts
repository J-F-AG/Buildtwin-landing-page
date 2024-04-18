import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDemoComponent } from './course-demo.component';

describe('CourseDemoComponent', () => {
  let component: CourseDemoComponent;
  let fixture: ComponentFixture<CourseDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
