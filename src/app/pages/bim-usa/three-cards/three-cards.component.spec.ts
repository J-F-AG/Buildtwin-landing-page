import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaThreeCardsComponent } from './three-cards.component';

// import { ThreeCardsComponent } from './three-cards.component';

describe('BimUsaThreeCardsComponent', () => {
  let component: BimUsaThreeCardsComponent;
  let fixture: ComponentFixture<BimUsaThreeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaThreeCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaThreeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
