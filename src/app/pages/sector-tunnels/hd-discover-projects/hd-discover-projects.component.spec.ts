import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelsHdDiscoverProjectsComponent } from './hd-discover-projects.component';

describe('TunnelsHdDiscoverProjectsComponent', () => {
  let component: TunnelsHdDiscoverProjectsComponent;
  let fixture: ComponentFixture<TunnelsHdDiscoverProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TunnelsHdDiscoverProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TunnelsHdDiscoverProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
