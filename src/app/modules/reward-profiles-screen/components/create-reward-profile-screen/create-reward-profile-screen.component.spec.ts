import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRewardProfileScreenComponent } from './create-reward-profile-screen.component';

describe('CreateRewardProfileScreenComponent', () => {
  let component: CreateRewardProfileScreenComponent;
  let fixture: ComponentFixture<CreateRewardProfileScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRewardProfileScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRewardProfileScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
