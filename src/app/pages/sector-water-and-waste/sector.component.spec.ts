import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorWaterAndWasteComponent } from './sector.component';

describe('SectorWaterAndWasteComponent', () => {
  let component: SectorWaterAndWasteComponent;
  let fixture: ComponentFixture<SectorWaterAndWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorWaterAndWasteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorWaterAndWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
