import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarPlugPlayNewComponent } from './plug-play.component';

// import { PlugPlayComponent } from './plug-play.component';

describe('RebarPlugPlayNewComponent', () => {
  let component: RebarPlugPlayNewComponent;
  let fixture: ComponentFixture<RebarPlugPlayNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarPlugPlayNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarPlugPlayNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
