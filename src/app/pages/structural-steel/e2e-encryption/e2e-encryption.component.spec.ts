import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelE2eEncryptionComponent } from './e2e-encryption.component';

// import { E2eEncryptionComponent } from './e2e-encryption.component';

describe('StructuralSteelE2eEncryptionComponent', () => {
  let component: StructuralSteelE2eEncryptionComponent;
  let fixture: ComponentFixture<StructuralSteelE2eEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelE2eEncryptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelE2eEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
