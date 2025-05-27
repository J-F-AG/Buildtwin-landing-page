import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalPlantFaqBuildtwinComponent } from './faq-buildtwin.component';

describe('ChemicalPlantFaqBuildtwinComponent', () => {
  let component: ChemicalPlantFaqBuildtwinComponent;
  let fixture: ComponentFixture<ChemicalPlantFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemicalPlantFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChemicalPlantFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
