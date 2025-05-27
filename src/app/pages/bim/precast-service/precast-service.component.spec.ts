import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimPrecastServiceComponent } from './precast-service.component';

// import { PrecastServiceComponent } from './precast-service.component';

describe('BimPrecastServiceComponent', () => {
  let component: BimPrecastServiceComponent;
  let fixture: ComponentFixture<BimPrecastServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimPrecastServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimPrecastServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
