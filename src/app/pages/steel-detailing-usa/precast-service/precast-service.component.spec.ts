import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaPrecastServiceComponent } from './precast-service.component';

// import { PrecastServiceComponent } from './precast-service.component';

describe('SteelDetailingUsaPrecastServiceComponent', () => {
  let component: SteelDetailingUsaPrecastServiceComponent;
  let fixture: ComponentFixture<SteelDetailingUsaPrecastServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaPrecastServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaPrecastServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
