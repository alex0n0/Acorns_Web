// modules
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeModule } from 'angularx-qrcode';
import { ChartsModule } from 'ng2-charts';
// angular material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

// pages
import { DashboardScreenComponent } from './modules/dashboard-screen/dashboard-screen.component';
import { CardsScreenComponent } from './modules/cards-screen/cards-screen.component';
import { CreateCardScreenComponent } from './modules/cards-screen/components/create-card-screen/create-card-screen.component';
import { EditCardScreenComponent } from './modules/cards-screen/components/edit-card-screen/edit-card-screen.component';
import { RewardProfilesScreenComponent } from './modules/reward-profiles-screen/reward-profiles-screen.component';
import { CreateRewardProfileScreenComponent } from './modules/reward-profiles-screen/create-reward-profile-screen/create-reward-profile-screen.component';
import { EditRewardProfileScreenComponent } from './modules/reward-profiles-screen/edit-reward-profile-screen/edit-reward-profile-screen.component';
import { SettingsScreenComponent } from './modules/settings-screen/settings-screen.component';
import { SitemapScreenComponent } from './modules/sitemap-screen/sitemap-screen.component';
import { StubScreenComponent } from './modules/stub-screen/stub-screen.component';
import { PageNotFoundScreenComponent } from './modules/page-not-found-screen/page-not-found-screen.component';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { CardComponent } from './shared/components/card/card.component';
import { ContinueCardCreateAlertComponent } from './modules/cards-screen/components/continue-card-create-alert/continue-card-create-alert.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { CardDetailsFormComponent } from './modules/cards-screen/components/card-details-form/card-details-form.component';
import { OrganisationSettingsComponent } from './modules/settings-screen/components/organisation-settings/organisation-settings.component';
import { AccountSettingsComponent } from './modules/settings-screen/components/account-settings/account-settings.component';
import { UserSettingsComponent } from './modules/settings-screen/components/user-settings/user-settings.component';


@NgModule({
  declarations: [
    // pages
    DashboardScreenComponent,
    CardsScreenComponent,
    CreateCardScreenComponent,
    EditCardScreenComponent,
    RewardProfilesScreenComponent,
    SettingsScreenComponent,
    SitemapScreenComponent,
    StubScreenComponent,
    PageNotFoundScreenComponent,
    // components
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    BreadcrumbsComponent,
    ContinueCardCreateAlertComponent,
    CardComponent,
    CardDetailsFormComponent,
    OrganisationSettingsComponent,
    AccountSettingsComponent,
    UserSettingsComponent,
    CreateRewardProfileScreenComponent,
    EditRewardProfileScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // NoopAnimationsModule, // prevents ripples
    QRCodeModule,
    ChartsModule,
    // angular material components
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
