import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentCountryComponent } from './different-country.component';

describe('DifferentCountryComponent', () => {
  let component: DifferentCountryComponent;
  let fixture: ComponentFixture<DifferentCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferentCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DifferentCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
