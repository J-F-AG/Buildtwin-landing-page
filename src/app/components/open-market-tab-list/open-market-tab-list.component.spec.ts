import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMarketTabListComponent } from './open-market-tab-list.component';

describe('OpenMarketTabListComponent', () => {
  let component: OpenMarketTabListComponent;
  let fixture: ComponentFixture<OpenMarketTabListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenMarketTabListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenMarketTabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
