import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorIndustrialBuildingComponent } from './sector.component';

describe('SectorIndustrialBuildingComponent', () => {
  let component: SectorIndustrialBuildingComponent;
  let fixture: ComponentFixture<SectorIndustrialBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorIndustrialBuildingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorIndustrialBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
