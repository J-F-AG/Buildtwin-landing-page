import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaE2eEncryptionComponent } from './e2e-encryption.component';

// import { E2eEncryptionComponent } from './e2e-encryption.component';

describe('BimUsaE2eEncryptionComponent', () => {
  let component: BimUsaE2eEncryptionComponent;
  let fixture: ComponentFixture<BimUsaE2eEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaE2eEncryptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaE2eEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
