import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingCodeEuroComponent } from './sector.component';

describe('BuildingCodeEuroComponent', () => {
  let component: BuildingCodeEuroComponent;
  let fixture: ComponentFixture<BuildingCodeEuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingCodeEuroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingCodeEuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
