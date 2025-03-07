import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorTunnelsComponent } from './sector.component';

describe('SectorTunnelsComponent', () => {
  let component: SectorTunnelsComponent;
  let fixture: ComponentFixture<SectorTunnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorTunnelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorTunnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
