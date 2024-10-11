import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarE2eEncryptionComponent } from './e2e-encryption.component';

// import { E2eEncryptionComponent } from './e2e-encryption.component';

describe('RebarE2eEncryptionComponent', () => {
  let component: RebarE2eEncryptionComponent;
  let fixture: ComponentFixture<RebarE2eEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarE2eEncryptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarE2eEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
