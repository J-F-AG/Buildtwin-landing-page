import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelThreeCardsComponent } from './three-cards.component';

// import { ThreeCardsComponent } from './three-cards.component';

describe('StructuralSteelThreeCardsComponent', () => {
  let component: StructuralSteelThreeCardsComponent;
  let fixture: ComponentFixture<StructuralSteelThreeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelThreeCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelThreeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
