import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingTrustByNewComponent } from './trust-by.component';

// import { TrustByComponent } from './trust-by.component';

describe('DraftingTrustByNewComponent', () => {
  let component: DraftingTrustByNewComponent;
  let fixture: ComponentFixture<DraftingTrustByNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingTrustByNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingTrustByNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
