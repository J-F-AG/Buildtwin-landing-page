import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaTopVendorsComponent } from './top-vendors.component';

// import { TopVendorsComponent } from './top-vendors.component';

describe('SteelDetailingUsaTopVendorsComponent', () => {
  let component: SteelDetailingUsaTopVendorsComponent;
  let fixture: ComponentFixture<SteelDetailingUsaTopVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaTopVendorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaTopVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
