import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorChemicalPlantComponent } from './sector.component';

describe('SectorChemicalPlantComponent', () => {
  let component: SectorChemicalPlantComponent;
  let fixture: ComponentFixture<SectorChemicalPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorChemicalPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorChemicalPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
