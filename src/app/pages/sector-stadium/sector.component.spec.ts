import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorStadiumComponent } from './sector.component';

describe('SectorStadiumComponent', () => {
  let component: SectorStadiumComponent;
  let fixture: ComponentFixture<SectorStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorStadiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
