import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaTrustByNewComponent } from './trust-by.component';

// import { TrustByComponent } from './trust-by.component';

describe('BimUsaTrustByNewComponent', () => {
  let component: BimUsaTrustByNewComponent;
  let fixture: ComponentFixture<BimUsaTrustByNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaTrustByNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaTrustByNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
