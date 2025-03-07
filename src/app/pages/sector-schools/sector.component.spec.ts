import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorSchoolsComponent } from './sector.component';

describe('SectorSchoolsComponent', () => {
  let component: SectorSchoolsComponent;
  let fixture: ComponentFixture<SectorSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorSchoolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
