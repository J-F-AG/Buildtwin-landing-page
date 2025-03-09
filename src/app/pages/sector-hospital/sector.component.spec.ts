import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorHospitalComponent } from './sector.component';

describe('SectorHospitalComponent', () => {
  let component: SectorHospitalComponent;
  let fixture: ComponentFixture<SectorHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorHospitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
