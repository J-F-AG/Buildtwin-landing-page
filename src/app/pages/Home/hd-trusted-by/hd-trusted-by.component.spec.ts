import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdTrustedByComponent } from './hd-trusted-by.component';

describe('HdTrustedByComponent', () => {
  let component: HdTrustedByComponent;
  let fixture: ComponentFixture<HdTrustedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdTrustedByComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdTrustedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
