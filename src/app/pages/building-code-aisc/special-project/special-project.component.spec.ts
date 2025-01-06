import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProjectBuildingCodeAiscComponent } from './special-project.component';

describe('SpecialProjectBuildingCodeAiscComponent', () => {
  let component: SpecialProjectBuildingCodeAiscComponent;
  let fixture: ComponentFixture<SpecialProjectBuildingCodeAiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialProjectBuildingCodeAiscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialProjectBuildingCodeAiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
