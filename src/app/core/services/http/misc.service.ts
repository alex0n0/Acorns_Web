import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class MiscService {
  constructor(private httpClient: HttpClient) {}

  getUsers = (): Observable<any> => {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  };

  getAccountCredentials = (): Observable<any> => {
    return of({
      CreditCardAdded: false,
      // CreditCardAdded: true,
    });
  }

  getCards = (): Observable<any> => {
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

  getContinueEditingCard = (id: string) => {};

  getCard = (id: string) => {
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
    // return of([]);
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
