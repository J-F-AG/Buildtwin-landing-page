import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarThreeCardsComponent } from './three-cards.component';

// import { ThreeCardsComponent } from './three-cards.component';

describe('RebarThreeCardsComponent', () => {
  let component: RebarThreeCardsComponent;
  let fixture: ComponentFixture<RebarThreeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarThreeCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarThreeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
