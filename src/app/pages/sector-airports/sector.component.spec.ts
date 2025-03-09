import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorAirportsComponent } from './sector.component';

describe('SectorAirportsComponent', () => {
  let component: SectorAirportsComponent;
  let fixture: ComponentFixture<SectorAirportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorAirportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorAirportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
