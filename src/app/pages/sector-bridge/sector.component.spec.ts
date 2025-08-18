import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorBridgeComponent } from './sector.component';

describe('SectorBridgeComponent', () => {
  let component: SectorBridgeComponent;
  let fixture: ComponentFixture<SectorBridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorBridgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
