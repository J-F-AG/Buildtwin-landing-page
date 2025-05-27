import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingTopVendorsComponent } from './top-vendors.component';

// import { TopVendorsComponent } from './top-vendors.component';

describe('DraftingTopVendorsComponent', () => {
  let component: DraftingTopVendorsComponent;
  let fixture: ComponentFixture<DraftingTopVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingTopVendorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingTopVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
