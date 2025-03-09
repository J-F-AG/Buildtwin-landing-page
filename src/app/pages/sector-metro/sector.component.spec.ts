import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorMetroComponent } from './sector.component';

describe('SectorMetroComponent', () => {
  let component: SectorMetroComponent;
  let fixture: ComponentFixture<SectorMetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorMetroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
