import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRewardProfileScreenComponent } from './edit-reward-profile-screen.component';

describe('EditRewardProfileScreenComponent', () => {
  let component: EditRewardProfileScreenComponent;
  let fixture: ComponentFixture<EditRewardProfileScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRewardProfileScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRewardProfileScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
