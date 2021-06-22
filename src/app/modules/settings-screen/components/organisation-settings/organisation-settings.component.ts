import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organisation-settings',
  templateUrl: './organisation-settings.component.html',
  styleUrls: ['./organisation-settings.component.scss']
})
export class OrganisationSettingsComponent implements OnInit {

  organisationDetailsFormState = {
    expanded: false,
    submitting: false,
    success: false,
    message: '',
  };
  billingDetailsFormState = {
    expanded: false,
    submitting: false,
    success: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  handleOpenedOrganisationDetailsForm = () => {
    this.organisationDetailsFormState.expanded = true;
    if (!this.organisationDetailsFormState.submitting) {
      this.organisationDetailsFormState = {...this.organisationDetailsFormState, success: false, message: ''};
    }
  }

  handleSubmitOrganisationDetailsForm = () => {
    this.organisationDetailsFormState = {...this.organisationDetailsFormState, submitting: true, success: false, expanded: true};
    setTimeout(() => {
      
      this.organisationDetailsFormState = {...this.organisationDetailsFormState, submitting: false, success: true, message: 'DONE'};
    }, 2000);
    setTimeout(() => {
      this.organisationDetailsFormState = {...this.organisationDetailsFormState, success: false, message: ''};
    }, 4000);
  }

}
