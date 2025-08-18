import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingCodeBSComponent } from './sector.component';

describe('BuildingCodeBSComponent', () => {
  let component: BuildingCodeBSComponent;
  let fixture: ComponentFixture<BuildingCodeBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingCodeBSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingCodeBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
