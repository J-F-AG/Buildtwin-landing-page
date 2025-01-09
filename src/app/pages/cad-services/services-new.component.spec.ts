import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadServicesNewComponent } from './services-new.component';

// import { CadServicesNewComponent } from './services-new.component';

describe('CadServicesNewComponent', () => {
  let component: CadServicesNewComponent;
  let fixture: ComponentFixture<CadServicesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadServicesNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadServicesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
