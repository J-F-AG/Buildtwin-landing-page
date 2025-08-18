import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2eEncryptionComponent } from './e2e-encryption.component';

describe('E2eEncryptionComponent', () => {
  let component: E2eEncryptionComponent;
  let fixture: ComponentFixture<E2eEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E2eEncryptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(E2eEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
