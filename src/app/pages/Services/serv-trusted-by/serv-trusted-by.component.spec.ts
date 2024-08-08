import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServTrustedByComponent } from './serv-trusted-by.component';

describe('ServTrustedByComponent', () => {
  let component: ServTrustedByComponent;
  let fixture: ComponentFixture<ServTrustedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServTrustedByComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServTrustedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
