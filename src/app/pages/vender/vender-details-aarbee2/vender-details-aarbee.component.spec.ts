import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDetailsAarbeeComponent } from './vender-details-aarbee.component';

describe('VenderDetailsAarbeeComponent', () => {
  let component: VenderDetailsAarbeeComponent;
  let fixture: ComponentFixture<VenderDetailsAarbeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenderDetailsAarbeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenderDetailsAarbeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
