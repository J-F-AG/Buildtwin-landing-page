import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBasicComponent } from './price-basic.component';

describe('PriceBasicComponent', () => {
  let component: PriceBasicComponent;
  let fixture: ComponentFixture<PriceBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
