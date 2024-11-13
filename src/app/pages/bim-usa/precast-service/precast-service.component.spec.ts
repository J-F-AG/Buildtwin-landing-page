import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaPrecastServiceComponent } from './precast-service.component';

// import { PrecastServiceComponent } from './precast-service.component';

describe('BimUsaPrecastServiceComponent', () => {
  let component: BimUsaPrecastServiceComponent;
  let fixture: ComponentFixture<BimUsaPrecastServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaPrecastServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaPrecastServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
