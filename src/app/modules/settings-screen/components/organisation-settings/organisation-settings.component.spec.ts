import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationSettingsComponent } from './organisation-settings.component';

describe('OrganisationSettingsComponent', () => {
  let component: OrganisationSettingsComponent;
  let fixture: ComponentFixture<OrganisationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
