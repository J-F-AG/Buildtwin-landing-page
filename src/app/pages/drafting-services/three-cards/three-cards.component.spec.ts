import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingThreeCardsComponent } from './three-cards.component';

// import { ThreeCardsComponent } from './three-cards.component';

describe('DraftingThreeCardsComponent', () => {
  let component: DraftingThreeCardsComponent;
  let fixture: ComponentFixture<DraftingThreeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingThreeCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingThreeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
