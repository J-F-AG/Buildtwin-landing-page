import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterFaqBuildtwinComponent } from './faq-buildtwin.component';

describe('DataCenterFaqBuildtwinComponent', () => {
  let component: DataCenterFaqBuildtwinComponent;
  let fixture: ComponentFixture<DataCenterFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCenterFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataCenterFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
