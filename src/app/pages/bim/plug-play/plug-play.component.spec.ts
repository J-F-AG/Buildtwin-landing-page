import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimPlugPlayNewComponent } from './plug-play.component';

// import { PlugPlayComponent } from './plug-play.component';

describe('BimPlugPlayNewComponent', () => {
  let component: BimPlugPlayNewComponent;
  let fixture: ComponentFixture<BimPlugPlayNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimPlugPlayNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimPlugPlayNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
