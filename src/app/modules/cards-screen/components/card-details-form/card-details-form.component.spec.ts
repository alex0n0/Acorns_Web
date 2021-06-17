import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsFormComponent } from './card-details-form.component';

describe('CardDetailsFormComponent', () => {
  let component: CardDetailsFormComponent;
  let fixture: ComponentFixture<CardDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
