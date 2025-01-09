import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadServiceComponent } from './cad-service.component';

// import { PrecastServiceComponent } from './precast-service.component';

describe('CadServiceComponent', () => {
  let component: CadServiceComponent;
  let fixture: ComponentFixture<CadServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
