import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorDefenseComponent } from './sector.component';

describe('SectorDefenseComponent', () => {
  let component: SectorDefenseComponent;
  let fixture: ComponentFixture<SectorDefenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorDefenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
