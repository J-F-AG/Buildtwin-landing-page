import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarServicesOfferedComponent } from './services-offered.component';

// import { ServicesOfferedComponent } from './services-offered.component';

describe('RebarServicesOfferedComponent', () => {
  let component: RebarServicesOfferedComponent;
  let fixture: ComponentFixture<RebarServicesOfferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarServicesOfferedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarServicesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
