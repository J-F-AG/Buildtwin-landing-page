import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingCodeASComponent } from './sector.component';

describe('BuildingCodeASComponent', () => {
  let component: BuildingCodeASComponent;
  let fixture: ComponentFixture<BuildingCodeASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingCodeASComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingCodeASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
