// modules
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeModule } from 'angularx-qrcode';
// angular material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';

// pages
import { DashboardScreenComponent } from './modules/dashboard-screen/dashboard-screen.component';
import { CardsScreenComponent } from './modules/cards-screen/cards-screen.component';
import { CreateCardScreenComponent } from './modules/create-card-screen/create-card-screen.component';
import { EditCardScreenComponent } from './modules/edit-card-screen/edit-card-screen.component';
import { RewardProfilesScreenComponent } from './modules/reward-profiles-screen/reward-profiles-screen.component';
import { SettingsScreenComponent } from './modules/settings-screen/settings-screen.component';
import { PageNotFoundScreenComponent } from './modules/page-not-found-screen/page-not-found-screen.component';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { CreateCardFormComponent } from './modules/create-card-screen/components/create-card-form/create-card-form.component';
import { CardComponent } from './shared/components/card/card.component';
import { ContinueCardCreateAlertComponent } from './modules/cards-screen/components/continue-card-create-alert/continue-card-create-alert.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    // pages
    DashboardScreenComponent,
    CardsScreenComponent,
    CreateCardScreenComponent,
    EditCardScreenComponent,
    RewardProfilesScreenComponent,
    SettingsScreenComponent,
    PageNotFoundScreenComponent,
    // components
    AppComponent,
    HeaderComponent,
    CardComponent,
    CreateCardFormComponent,
    ContinueCardCreateAlertComponent,
    BreadcrumbsComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // NoopAnimationsModule, // prevents ripples
    QRCodeModule,
    // angular material components
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
