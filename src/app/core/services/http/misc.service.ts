import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { HttpHeaders } from "@angular/common/http";

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MiscService {
  constructor(private httpClient: HttpClient) {}

  getUsers = (): Observable<any> => {
    if (environment.production) return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    return this.httpClient.get(environment.base_api_url + 'cards');
  };

  getAccountCredentials = (): Observable<any> => {
    // if (environment.production) 
    return of({
      CreditCardAdded: false,
      // CreditCardAdded: true,
    });
  }

  getCards = (): Observable<any> => {
    // if (environment.production) 
    return of({
      active: [
        {
          Id: uuid(),
          IsActive: true,
          Nickname: 'First Card',
          RewardProfile: null,
          CreatedDate: new Date(),
          CardImage:
            'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg',
        },
      ],
      inactive: [
        {
          Id: uuid(),
          IsActive: false,
          Nickname: 'Test card',
          RewardProfile: {
            Name: 'test profile',
            Id: uuid(),
          },
          CreatedDate: new Date(),
        },
        {
          Id: uuid(),
          IsActive: false,
          Nickname: 'dummy design',
          RewardProfile: {
            Name: 'VIP rewards',
            Id: uuid(),
          },
          CreatedDate: new Date(),
        },
        {
          Id: uuid(),
          IsActive: false,
          Nickname: '2019 Card',
          RewardProfile: {
            Name: 'free points',
            Id: uuid(),
          },
          CreatedDate: new Date(),
        },
        {
          Id: uuid(),
          IsActive: false,
          Nickname: 'Old',
          RewardProfile: {
            Name: 'free muffins',
            Id: uuid(),
          },
          CreatedDate: new Date(),
        },
      ],
    });
  };

  getCard = (id: string) => {
    // if (environment.production) 
    return of({
      Id: uuid(),
      IsActive: true,
      Nickname: 'First Card',
      RewardProfile: null,
      CreatedDate: new Date(),
      BackgroundImage:
        'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg',
    });
  };

  getRewardProfiles = () => {
    if (environment.production) return of([]);
    return of([
      {
        Name: 'free muffins',
        Id: uuid(),
      },
      {
        Name: 'free points',
        Id: uuid(),
      },
      {
        Name: 'VIP rewards',
        Id: uuid(),
      },
      {
        Name: 'test profile',
        Id: uuid(),
      },
    ]);
  };
}
