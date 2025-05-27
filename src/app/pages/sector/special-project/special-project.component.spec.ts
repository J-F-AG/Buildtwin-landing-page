import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProjectComponent } from './special-project.component';

describe('SpecialProjectComponent', () => {
  let component: SpecialProjectComponent;
  let fixture: ComponentFixture<SpecialProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
