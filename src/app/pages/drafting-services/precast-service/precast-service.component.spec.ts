import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingPrecastServiceComponent } from './precast-service.component';

// import { PrecastServiceComponent } from './precast-service.component';

describe('DraftingPrecastServiceComponent', () => {
  let component: DraftingPrecastServiceComponent;
  let fixture: ComponentFixture<DraftingPrecastServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingPrecastServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingPrecastServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
