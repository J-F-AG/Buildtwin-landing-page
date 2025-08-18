import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorTheatersComponent } from './sector.component';

describe('SectorTheatersComponent', () => {
  let component: SectorTheatersComponent;
  let fixture: ComponentFixture<SectorTheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorTheatersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
