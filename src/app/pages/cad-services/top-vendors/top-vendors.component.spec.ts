import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadTopVendorsComponent } from './top-vendors.component';

// import { TopVendorsComponent } from './top-vendors.component';

describe('CadTopVendorsComponent', () => {
  let component: CadTopVendorsComponent;
  let fixture: ComponentFixture<CadTopVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadTopVendorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadTopVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
