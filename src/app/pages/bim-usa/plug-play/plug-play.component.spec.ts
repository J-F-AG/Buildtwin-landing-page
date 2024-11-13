import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaPlugPlayNewComponent } from './plug-play.component';

// import { PlugPlayComponent } from './plug-play.component';

describe('BimUsaPlugPlayNewComponent', () => {
  let component: BimUsaPlugPlayNewComponent;
  let fixture: ComponentFixture<BimUsaPlugPlayNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaPlugPlayNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaPlugPlayNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
