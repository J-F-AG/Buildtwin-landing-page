import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelTopVendorsComponent } from './top-vendors.component';

// import { TopVendorsComponent } from './top-vendors.component';

describe('StructuralSteelTopVendorsComponent', () => {
  let component: StructuralSteelTopVendorsComponent;
  let fixture: ComponentFixture<StructuralSteelTopVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelTopVendorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelTopVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
