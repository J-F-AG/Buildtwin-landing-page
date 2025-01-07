import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPlantSpecialProjectComponent } from './special-project.component';

describe('PowerPlantSpecialProjectComponent', () => {
  let component: PowerPlantSpecialProjectComponent;
  let fixture: ComponentFixture<PowerPlantSpecialProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerPlantSpecialProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerPlantSpecialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
