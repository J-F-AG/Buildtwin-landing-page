import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorResidentialBuildingComponent } from './sector.component';

describe('SectorResidentialBuildingComponent', () => {
  let component: SectorResidentialBuildingComponent;
  let fixture: ComponentFixture<SectorResidentialBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorResidentialBuildingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorResidentialBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
