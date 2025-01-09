import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadServicesOfferedComponent } from './services-offered.component';

// import { ServicesOfferedComponent } from './services-offered.component';

describe('CadServicesOfferedComponent', () => {
  let component: CadServicesOfferedComponent;
  let fixture: ComponentFixture<CadServicesOfferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadServicesOfferedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadServicesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
