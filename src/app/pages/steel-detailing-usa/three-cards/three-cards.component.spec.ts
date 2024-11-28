import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaThreeCardsComponent } from './three-cards.component';

// import { ThreeCardsComponent } from './three-cards.component';

describe('SteelDetailingUsaThreeCardsComponent', () => {
  let component: SteelDetailingUsaThreeCardsComponent;
  let fixture: ComponentFixture<SteelDetailingUsaThreeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaThreeCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaThreeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
