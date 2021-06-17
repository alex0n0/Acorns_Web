import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardScreenComponent } from './modules/dashboard-screen/dashboard-screen.component';
import { CardsScreenComponent } from './modules/cards-screen/cards-screen.component';
import { CreateCardScreenComponent } from './modules/cards-screen/components/create-card-screen/create-card-screen.component';
import { EditCardScreenComponent } from './modules/cards-screen/components/edit-card-screen/edit-card-screen.component';
import { RewardProfilesScreenComponent } from './modules/reward-profiles-screen/reward-profiles-screen.component';
import { CreateRewardProfileScreenComponent } from './modules/reward-profiles-screen/components/create-reward-profile-screen/create-reward-profile-screen.component';
import { EditRewardProfileScreenComponent } from './modules/reward-profiles-screen/components/edit-reward-profile-screen/edit-reward-profile-screen.component';
import { SettingsScreenComponent } from './modules/settings-screen/settings-screen.component';
import { StubScreenComponent } from './modules/stub-screen/stub-screen.component';
import { SitemapScreenComponent } from './modules/sitemap-screen/sitemap-screen.component';
import { PageNotFoundScreenComponent } from './modules/page-not-found-screen/page-not-found-screen.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardScreenComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    redirectTo: ''
  },
  {
    path: 'cards',
    component: CardsScreenComponent,
    pathMatch: 'full'
  },
  {
    path: 'cards/create-card',
    component: CreateCardScreenComponent,
  },
  {
    path: 'cards/edit-card/:id',
    component: EditCardScreenComponent,
  },
  {
    path: 'reward-profiles',
    component: RewardProfilesScreenComponent,
    pathMatch: 'full'
  },
  {
    path: 'reward-profiles/create-reward-profile',
    component: CreateRewardProfileScreenComponent,
  },
  {
    path: 'reward-profiles/edit-reward-profile/:id',
    component: EditRewardProfileScreenComponent,
  },
  {
    path: 'settings',
    component: SettingsScreenComponent,
    pathMatch: 'full'
  },
  {
    path: 'settings/billing-details',
    component: StubScreenComponent,
  },
  {
    path: 'sitemap',
    component: SitemapScreenComponent,
  },
  {
    path: '**',
    component: PageNotFoundScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
