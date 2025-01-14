import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorPowerPlantComponent } from './sector.component';

describe('SectorPowerPlantComponent', () => {
  let component: SectorPowerPlantComponent;
  let fixture: ComponentFixture<SectorPowerPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorPowerPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorPowerPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
