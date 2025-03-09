import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorRoadwaysComponent } from './sector.component';

describe('SectorRoadwaysComponent', () => {
  let component: SectorRoadwaysComponent;
  let fixture: ComponentFixture<SectorRoadwaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorRoadwaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorRoadwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
