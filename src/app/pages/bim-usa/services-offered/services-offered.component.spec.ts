import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaServicesOfferedComponent } from './services-offered.component';

// import { ServicesOfferedComponent } from './services-offered.component';

describe('BimUsaServicesOfferedComponent', () => {
  let component: BimUsaServicesOfferedComponent;
  let fixture: ComponentFixture<BimUsaServicesOfferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaServicesOfferedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaServicesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
