import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaTopVendorsComponent } from './top-vendors.component';

// import { TopVendorsComponent } from './top-vendors.component';

describe('BimUsaTopVendorsComponent', () => {
  let component: BimUsaTopVendorsComponent;
  let fixture: ComponentFixture<BimUsaTopVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaTopVendorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaTopVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
