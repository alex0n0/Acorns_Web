import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardProfileFormComponent } from './reward-profile-form.component';

describe('RewardProfileFormComponent', () => {
  let component: RewardProfileFormComponent;
  let fixture: ComponentFixture<RewardProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardProfileFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
