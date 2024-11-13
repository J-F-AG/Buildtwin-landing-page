import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaServicesNewComponent } from './services-new.component';

// import { BimUsaServicesNewComponent } from './services-new.component';

describe('BimUsaServicesNewComponent', () => {
  let component: BimUsaServicesNewComponent;
  let fixture: ComponentFixture<BimUsaServicesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaServicesNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaServicesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
