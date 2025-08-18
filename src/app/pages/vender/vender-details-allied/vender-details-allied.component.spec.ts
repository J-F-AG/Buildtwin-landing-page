import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDetailsAlliedComponent } from './vender-details-allied.component';

describe('VenderDetailsAlliedComponent', () => {
  let component: VenderDetailsAlliedComponent;
  let fixture: ComponentFixture<VenderDetailsAlliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenderDetailsAlliedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenderDetailsAlliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
