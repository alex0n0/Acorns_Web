import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardProfilesScreenComponent } from './reward-profiles-screen.component';

describe('RewardProfilesScreenComponent', () => {
  let component: RewardProfilesScreenComponent;
  let fixture: ComponentFixture<RewardProfilesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardProfilesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardProfilesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
