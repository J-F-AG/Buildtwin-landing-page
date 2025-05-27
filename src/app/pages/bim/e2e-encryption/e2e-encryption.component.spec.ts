import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimE2eEncryptionComponent } from './e2e-encryption.component';

// import { E2eEncryptionComponent } from './e2e-encryption.component';

describe('BimE2eEncryptionComponent', () => {
  let component: BimE2eEncryptionComponent;
  let fixture: ComponentFixture<BimE2eEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimE2eEncryptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimE2eEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
