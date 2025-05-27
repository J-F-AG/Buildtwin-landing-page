import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaPlugPlayNewComponent } from './plug-play.component';

// import { PlugPlayComponent } from './plug-play.component';

describe('SteelDetailingUsaPlugPlayNewComponent', () => {
  let component: SteelDetailingUsaPlugPlayNewComponent;
  let fixture: ComponentFixture<SteelDetailingUsaPlugPlayNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaPlugPlayNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaPlugPlayNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
