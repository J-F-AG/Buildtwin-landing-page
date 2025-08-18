import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelsFaqBuildtwinComponent } from './faq-buildtwin.component';

describe('TunnelsFaqBuildtwinComponent', () => {
  let component: TunnelsFaqBuildtwinComponent;
  let fixture: ComponentFixture<TunnelsFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TunnelsFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TunnelsFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
