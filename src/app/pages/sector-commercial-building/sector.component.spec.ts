import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorCommercialBuildingComponent } from './sector.component';

describe('SectorCommercialBuildingComponent', () => {
  let component: SectorCommercialBuildingComponent;
  let fixture: ComponentFixture<SectorCommercialBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorCommercialBuildingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorCommercialBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
