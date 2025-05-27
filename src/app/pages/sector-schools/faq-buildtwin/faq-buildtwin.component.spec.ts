import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsFaqBuildtwinComponent } from './faq-buildtwin.component';

describe('SchoolsFaqBuildtwinComponent', () => {
  let component: SchoolsFaqBuildtwinComponent;
  let fixture: ComponentFixture<SchoolsFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolsFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolsFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
