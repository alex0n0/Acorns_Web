import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueCardCreateAlertComponent } from './continue-card-create-alert.component';

describe('ContinueCardCreateAlertComponent', () => {
  let component: ContinueCardCreateAlertComponent;
  let fixture: ComponentFixture<ContinueCardCreateAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueCardCreateAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueCardCreateAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
