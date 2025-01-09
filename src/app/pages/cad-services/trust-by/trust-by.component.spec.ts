import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadTrustByNewComponent } from './trust-by.component';

// import { TrustByComponent } from './trust-by.component';

describe('CadTrustByNewComponent', () => {
  let component: CadTrustByNewComponent;
  let fixture: ComponentFixture<CadTrustByNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadTrustByNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadTrustByNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
