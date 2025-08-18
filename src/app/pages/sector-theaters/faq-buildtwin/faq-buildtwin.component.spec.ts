import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersFaqBuildtwinComponent } from './faq-buildtwin.component';

describe('TheatersFaqBuildtwinComponent', () => {
  let component: TheatersFaqBuildtwinComponent;
  let fixture: ComponentFixture<TheatersFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheatersFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheatersFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
