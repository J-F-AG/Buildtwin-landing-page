import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimTopVendorsComponent } from './top-vendors.component';

// import { TopVendorsComponent } from './top-vendors.component';

describe('BimTopVendorsComponent', () => {
  let component: BimTopVendorsComponent;
  let fixture: ComponentFixture<BimTopVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimTopVendorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimTopVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
