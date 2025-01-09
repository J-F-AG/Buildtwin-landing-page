import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProjectBuildingCodeEuroComponent } from './special-project.component';

describe('SpecialProjectBuildingCodeEuroComponent', () => {
  let component: SpecialProjectBuildingCodeEuroComponent;
  let fixture: ComponentFixture<SpecialProjectBuildingCodeEuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialProjectBuildingCodeEuroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialProjectBuildingCodeEuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
