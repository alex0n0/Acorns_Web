import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardScreenComponent } from './modules/dashboard-screen/dashboard-screen.component';
import { CardsScreenComponent } from './modules/cards-screen/cards-screen.component';
import { CreateCardScreenComponent } from './modules/create-card-screen/create-card-screen.component';
import { RewardProfilesScreenComponent } from './modules/reward-profiles-screen/reward-profiles-screen.component';
import { SettingsScreenComponent } from './modules/settings-screen/settings-screen.component';
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
  },
  {
    path: 'create-card',
    component: CreateCardScreenComponent,
  },
  {
    path: 'reward-profiles',
    component: RewardProfilesScreenComponent,
  },
  {
    path: 'settings',
    component: SettingsScreenComponent,
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
