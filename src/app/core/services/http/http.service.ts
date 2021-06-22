import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { HttpHeaders } from '@angular/common/http';

import { MockRepositoryService } from '../data/mockRepository.service';
import { environment } from '../../../../environments/environment';

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private httpClient: HttpClient,
    private repo: MockRepositoryService
  ) {}

  getCustomerUserAccounts = (): Observable<any> => {
    // if (environment.production) return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    // return this.httpClient.get(environment.base_api_url + 'users');
    return of(this.repo.getData().getCustomerUserAccounts());
  };

  getCustomerTransactions = () => {
    return of(this.repo.getData().getCustomerTransactions());
  };

  getRewardConfigs = () => {
    // if (environment.production) return of([]);
    return of(this.repo.getData().getRewardConfigs());
  };

  createRewardProfile = (name: string, rewardConfigId: string | undefined) => {
    return of(this.repo.getData().createRewardProfile(name, rewardConfigId));
  };

  getRewardProfiles = () => {
    // if (environment.production) return of([]);
    return of(this.repo.getData().getRewardProfiles());
  };

  getRewardProfile = (id: string) => {
    // if (environment.production) return of([]);
    return of(this.repo.getData().getRewardProfile(id));
  };
  
  updateRewardProfile = (id: string | undefined, name: string, rewardConfigId: string | undefined) => {
    return of(
      this.repo.getData().updateRewardProfile(id, name, rewardConfigId)
    );
  };

  deleteRewardProfile = (id: string) => {
    return of(this.repo.getData().deleteRewardProfile(id));
  };

  createBusinessCard = (
    name: string,
    cardImage: string | undefined,
    rewardProfileId: string | undefined
  ) => {
    return of(
      this.repo.getData().createBusinessCard(name, cardImage, rewardProfileId)
    );
  };

  getBusinessCards = (): Observable<any> => {
    // if (environment.production) return of([]);
    return of(this.repo.getData().getBusinessCards());
  };

  getBusinessCard = (id: string) => {
    // if (environment.production) return of([]);
    return of(this.repo.getData().getBusinessCard(id) || {});
  };

  updateBusinessCard = (
    id: string,
    name: string,
    cardImage: string | undefined,
    rewardProfileId: string | undefined
  ) => {
    return of(
      this.repo
        .getData()
        .updateBusinessCard(id, name, cardImage, rewardProfileId)
    );
  };

  deleteBusinessCard = (id: string) => {
    return of(this.repo.getData().deleteBusinessCard(id));
  };

  swapActiveBusinessCard = (id: string) => {
    return of(this.repo.getData().swapActiveBusinessCard(id));
  };
}
