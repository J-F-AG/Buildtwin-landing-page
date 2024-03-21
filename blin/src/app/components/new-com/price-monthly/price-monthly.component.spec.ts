import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceMonthlyComponent } from './price-monthly.component';

describe('PriceMonthlyComponent', () => {
  let component: PriceMonthlyComponent;
  let fixture: ComponentFixture<PriceMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceMonthlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
