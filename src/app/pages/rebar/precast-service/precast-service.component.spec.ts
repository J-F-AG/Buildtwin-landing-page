import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarPrecastServiceComponent } from './precast-service.component';

// import { PrecastServiceComponent } from './precast-service.component';

describe('RebarPrecastServiceComponent', () => {
  let component: RebarPrecastServiceComponent;
  let fixture: ComponentFixture<RebarPrecastServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarPrecastServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarPrecastServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
