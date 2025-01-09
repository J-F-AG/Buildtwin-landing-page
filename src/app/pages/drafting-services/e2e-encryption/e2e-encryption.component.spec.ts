import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingE2eEncryptionComponent } from './e2e-encryption.component';

// import { E2eEncryptionComponent } from './e2e-encryption.component';

describe('DraftingE2eEncryptionComponent', () => {
  let component: DraftingE2eEncryptionComponent;
  let fixture: ComponentFixture<DraftingE2eEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingE2eEncryptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingE2eEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
