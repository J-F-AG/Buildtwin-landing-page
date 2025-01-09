import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadPlugPlayNewComponent } from './plug-play.component';

// import { PlugPlayComponent } from './plug-play.component';

describe('CadPlugPlayNewComponent', () => {
  let component: CadPlugPlayNewComponent;
  let fixture: ComponentFixture<CadPlugPlayNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadPlugPlayNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadPlugPlayNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
