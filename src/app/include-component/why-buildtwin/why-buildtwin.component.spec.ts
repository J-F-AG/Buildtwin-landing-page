import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBuildtwinComponent } from './why-buildtwin.component';

describe('WhyBuildtwinComponent', () => {
  let component: WhyBuildtwinComponent;
  let fixture: ComponentFixture<WhyBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyBuildtwinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
