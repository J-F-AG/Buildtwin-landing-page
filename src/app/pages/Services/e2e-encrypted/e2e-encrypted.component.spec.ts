import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2eEncryptedComponent } from './e2e-encrypted.component';

describe('E2eEncryptedComponent', () => {
  let component: E2eEncryptedComponent;
  let fixture: ComponentFixture<E2eEncryptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E2eEncryptedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(E2eEncryptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
