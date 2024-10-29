import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelPlugPlayNewComponent } from './plug-play.component';

// import { PlugPlayComponent } from './plug-play.component';

describe('StructuralSteelPlugPlayNewComponent', () => {
  let component: StructuralSteelPlugPlayNewComponent;
  let fixture: ComponentFixture<StructuralSteelPlugPlayNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelPlugPlayNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelPlugPlayNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
