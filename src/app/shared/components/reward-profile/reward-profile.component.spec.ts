import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardProfileComponent } from './reward-profile.component';

describe('RewardProfileComponent', () => {
  let component: RewardProfileComponent;
  let fixture: ComponentFixture<RewardProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
