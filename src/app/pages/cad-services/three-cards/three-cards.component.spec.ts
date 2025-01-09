import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadThreeCardsComponent } from './three-cards.component';

// import { ThreeCardsComponent } from './three-cards.component';

describe('CadThreeCardsComponent', () => {
  let component: CadThreeCardsComponent;
  let fixture: ComponentFixture<CadThreeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadThreeCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadThreeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
