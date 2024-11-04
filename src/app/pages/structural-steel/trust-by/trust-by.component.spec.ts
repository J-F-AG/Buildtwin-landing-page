import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelTrustByNewComponent } from './trust-by.component';

// import { TrustByComponent } from './trust-by.component';

describe('StructuralSteelTrustByNewComponent', () => {
  let component: StructuralSteelTrustByNewComponent;
  let fixture: ComponentFixture<StructuralSteelTrustByNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelTrustByNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelTrustByNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
