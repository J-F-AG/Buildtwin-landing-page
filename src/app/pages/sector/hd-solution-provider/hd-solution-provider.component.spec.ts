import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sectorSolutionProviderComponent } from './hd-solution-provider.component';

describe('sectorSolutionProviderComponent', () => {
  let component: sectorSolutionProviderComponent;
  let fixture: ComponentFixture<sectorSolutionProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [sectorSolutionProviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(sectorSolutionProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
