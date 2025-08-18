import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadE2eEncryptionComponent } from './e2e-encryption.component';

// import { E2eEncryptionComponent } from './e2e-encryption.component';

describe('CadE2eEncryptionComponent', () => {
  let component: CadE2eEncryptionComponent;
  let fixture: ComponentFixture<CadE2eEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadE2eEncryptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadE2eEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
