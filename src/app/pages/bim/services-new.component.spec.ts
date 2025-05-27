import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimServicesNewComponent } from './services-new.component';

// import { BimServicesNewComponent } from './services-new.component';

describe('BimServicesNewComponent', () => {
  let component: BimServicesNewComponent;
  let fixture: ComponentFixture<BimServicesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimServicesNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimServicesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
