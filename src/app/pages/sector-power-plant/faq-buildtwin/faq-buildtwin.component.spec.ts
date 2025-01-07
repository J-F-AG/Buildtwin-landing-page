import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPlantFaqBuildtwinComponent } from './faq-buildtwin.component';

describe('PowerPlantFaqBuildtwinComponent', () => {
  let component: PowerPlantFaqBuildtwinComponent;
  let fixture: ComponentFixture<PowerPlantFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerPlantFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerPlantFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
