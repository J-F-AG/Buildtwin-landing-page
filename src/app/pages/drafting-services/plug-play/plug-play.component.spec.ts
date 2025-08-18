import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingPlugPlayNewComponent } from './plug-play.component';

// import { PlugPlayComponent } from './plug-play.component';

describe('DraftingPlugPlayNewComponent', () => {
  let component: DraftingPlugPlayNewComponent;
  let fixture: ComponentFixture<DraftingPlugPlayNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingPlugPlayNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingPlugPlayNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
