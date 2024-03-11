import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowBuildtwinHelpsComponent } from './how-buildtwin-helps.component';

describe('HowBuildtwinHelpsComponent', () => {
  let component: HowBuildtwinHelpsComponent;
  let fixture: ComponentFixture<HowBuildtwinHelpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowBuildtwinHelpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowBuildtwinHelpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
