import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingCodeISOComponent } from './sector.component';

describe('BuildingCodeISOComponent', () => {
  let component: BuildingCodeISOComponent;
  let fixture: ComponentFixture<BuildingCodeISOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingCodeISOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingCodeISOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
