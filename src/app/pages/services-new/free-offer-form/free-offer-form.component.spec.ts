import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeOfferFormComponent } from './free-offer-form.component';

describe('FreeOfferFormComponent', () => {
  let component: FreeOfferFormComponent;
  let fixture: ComponentFixture<FreeOfferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeOfferFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeOfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
