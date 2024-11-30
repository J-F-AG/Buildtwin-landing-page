import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaServicesOfferedComponent } from './services-offered.component';

// import { ServicesOfferedComponent } from './services-offered.component';

describe('SteelDetailingUsaServicesOfferedComponent', () => {
  let component: SteelDetailingUsaServicesOfferedComponent;
  let fixture: ComponentFixture<SteelDetailingUsaServicesOfferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaServicesOfferedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaServicesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
