import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTeamComponent } from './right-team.component';

describe('RightTeamComponent', () => {
  let component: RightTeamComponent;
  let fixture: ComponentFixture<RightTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
