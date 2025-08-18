import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustByComponent } from './trust-by.component';

describe('TrustByComponent', () => {
  let component: TrustByComponent;
  let fixture: ComponentFixture<TrustByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustByComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrustByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
