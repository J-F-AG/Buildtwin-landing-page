import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaE2eEncryptionComponent } from './e2e-encryption.component';

// import { E2eEncryptionComponent } from './e2e-encryption.component';

describe('SteelDetailingUsaE2eEncryptionComponent', () => {
  let component: SteelDetailingUsaE2eEncryptionComponent;
  let fixture: ComponentFixture<SteelDetailingUsaE2eEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaE2eEncryptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaE2eEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
