import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorManufacturingPlantComponent } from './sector.component';

describe('SectorManufacturingPlantComponent', () => {
  let component: SectorManufacturingPlantComponent;
  let fixture: ComponentFixture<SectorManufacturingPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorManufacturingPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorManufacturingPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
