import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCoPilotComponent } from './price-co-pilot.component';

describe('PriceCoPilotComponent', () => {
  let component: PriceCoPilotComponent;
  let fixture: ComponentFixture<PriceCoPilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceCoPilotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceCoPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
