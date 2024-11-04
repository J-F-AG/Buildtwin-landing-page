import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimServicesOfferedComponent } from './services-offered.component';

// import { ServicesOfferedComponent } from './services-offered.component';

describe('BimServicesOfferedComponent', () => {
  let component: BimServicesOfferedComponent;
  let fixture: ComponentFixture<BimServicesOfferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimServicesOfferedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimServicesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
