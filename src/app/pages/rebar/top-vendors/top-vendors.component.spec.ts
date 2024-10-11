import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarTopVendorsComponent } from './top-vendors.component';

// import { TopVendorsComponent } from './top-vendors.component';

describe('RebarTopVendorsComponent', () => {
  let component: RebarTopVendorsComponent;
  let fixture: ComponentFixture<RebarTopVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarTopVendorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarTopVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
