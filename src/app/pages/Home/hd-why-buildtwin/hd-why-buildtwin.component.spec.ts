import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdWhyBuildtwinComponent } from './hd-why-buildtwin.component';

describe('HdWhyBuildtwinComponent', () => {
  let component: HdWhyBuildtwinComponent;
  let fixture: ComponentFixture<HdWhyBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdWhyBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdWhyBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
