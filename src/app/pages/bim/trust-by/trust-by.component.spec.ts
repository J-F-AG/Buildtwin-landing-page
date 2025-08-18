import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimTrustByNewComponent } from './trust-by.component';

// import { TrustByComponent } from './trust-by.component';

describe('BimTrustByNewComponent', () => {
  let component: BimTrustByNewComponent;
  let fixture: ComponentFixture<BimTrustByNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimTrustByNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimTrustByNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
