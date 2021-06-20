import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { HttpHeaders } from "@angular/common/http";

import { RepositoryService } from '../data/repository.service';
import { environment } from '../../../../environments/environment';

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient, private repo: RepositoryService) {}

  getCustomerUserAccounts = (): Observable<any> => {
    if (environment.production) return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    // return this.httpClient.get(environment.base_api_url + 'users');
    return of(this.repo.getData().getCustomerUserAccounts());
  };

  getCustomerTransactions = () => {
    return of(this.repo.getData().getCustomerTransactions());
  }


  getRewardProfileConfigs = () => {
    if (environment.production) return of([]);
    return of(this.repo.getData().getRewardProfileConfigs());
    
  };
  getRewardProfiles = () => {
    if (environment.production) return of([]);
    return of(this.repo.getData().getRewardProfiles());
  };


  createBusinessCard = (name: string, cardImage: string | undefined, rewardProfileId: string | undefined) => {
    return of(this.repo.getData().createBusinessCard(name, cardImage, rewardProfileId));
  }

  getBusinessCards = (): Observable<any> => {
    if (environment.production) return of([]);
    return of(this.repo.getData().getBusinessCards());
  };

  getBusinessCard = (id: string) => {
    if (environment.production) return of([]);
    return of(this.repo.getData().getBusinessCard(id) || {});
  };

  patchBusinessCard = (id: string, name: string, cardImage: string | undefined, rewardProfileId: string | undefined) => {
    return of(this.repo.getData().patchBusinessCard(id, name, cardImage, rewardProfileId));
  }
  
  deleteBusinessCard = (id: string) => {
    return of(this.repo.getData().deleteBusinessCard(id));
  }

  swapActiveBusinessCard = (id: string) => {
    return of(this.repo.getData().swapActiveBusinessCard(id));
  }
}
