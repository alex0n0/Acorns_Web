import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

export interface Card {
  Id: string;
  Name: string;
  CardImage?: string;
  IsActive: boolean;
  RewardProfile:
    | undefined
    | null
    | {
        Id: string;
        Name: string;
      };
  CreatedDate: Date;
}

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  userDetails = {
    UserId: uuid(),
    FirstName: 'John',
    LastName: 'Citizen',
    UserName: 'john@gmail.com',
    Role: 'admin',
  };

  orgDetails = {
    OrgId: uuid(),
    Tier: 'paid',
    CreditCardAdded: true,
  };

  businessUserAccounts = [];

  customerUserAccounts = [
    {
      Id: uuid(),
      FirstName: 'Adam',
      LastName: 'A',
      UserName: 'adama@gmail.com',
    },
    {
      Id: uuid(),
      FirstName: 'Brian',
      LastName: 'B',
      UserName: 'adama@gmail.com',
    },
    {
      Id: uuid(),
      FirstName: 'Chris',
      LastName: 'C',
      UserName: 'adama@gmail.com',
    },
  ];

  customerTransactions = [
    {
      DateTime: new Date('2021-01-17T00:00:00'),
      Transactions: [
        {
          CustomerId: this.customerUserAccounts[0].Id,
          DateTime: new Date('2021-01-17T10:24:00'),
          PointsEarned: 5,
          PointsUsed: 10,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T11:24:00'),
          PointsEarned: 5,
          PointsUsed: 0,
        },
        {
          CustomerId: this.customerUserAccounts[1].Id,
          DateTime: new Date('2021-01-17T14:24:00'),
          PointsEarned: 10,
          PointsUsed: 2,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsUsed: 20,
        },
      ],
    },
    {
      DateTime: new Date('2021-01-18'),
      Transactions: [
        {
          CustomerId: this.customerUserAccounts[0].Id,
          DateTime: new Date('2021-01-18T10:24:00'),
          PointsEarned: 5,
          PointsUsed: 0,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-18T11:24:00'),
          PointsEarned: 4,
          PointsUsed: 0,
        },
        {
          CustomerId: this.customerUserAccounts[1].Id,
          DateTime: new Date('2021-01-18T14:24:00'),
          PointsEarned: 2,
          PointsUsed: 0,
        },
      ],
    },
    {
      DateTime: new Date('2021-01-19T00:00:00'),
      Transactions: [
        {
          CustomerId: this.customerUserAccounts[0].Id,
          DateTime: new Date('2021-01-17T10:24:00'),
          PointsEarned: 5,
          PointsUsed: 10,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T11:24:00'),
          PointsEarned: 5,
          PointsUsed: 0,
        },
        {
          CustomerId: this.customerUserAccounts[1].Id,
          DateTime: new Date('2021-01-17T14:24:00'),
          PointsEarned: 10,
          PointsUsed: 2,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsUsed: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsUsed: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsUsed: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsUsed: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsUsed: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsUsed: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsUsed: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsUsed: 20,
        },
      ],
    },
  ];

  rewardProfileConfigs = [
    { Id: uuid(), Title: 'basic points' },
    { Id: uuid(), Title: 'basic credits' },
    { Id: uuid(), Title: 'basic rewards' },
    { Id: uuid(), Title: 'tiered', IsPremium: true },
  ];

  rewardProfiles = [
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
  ];

  businessCards: Card[] = [
    {
      Id: 'aaa',
      IsActive: true,
      Name: 'First Card',
      RewardProfile: undefined,
      CreatedDate: new Date(),
      CardImage: 'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg',
    },
    {
      Id: 'bbb',
      IsActive: false,
      Name: 'Test card',
      RewardProfile: this.rewardProfiles[3],
      CreatedDate: new Date(),
    },
    {
      Id: 'ccc',
      IsActive: false,
      Name: 'dummy design',
      RewardProfile: this.rewardProfiles[1],
      CreatedDate: new Date(),
    },
    {
      Id: 'ddd',
      IsActive: false,
      Name: '2019 Card',
      RewardProfile: this.rewardProfiles[0],
      CreatedDate: new Date(),
    },
    {
      Id: 'eee',
      IsActive: false,
      Name: 'Old',
      RewardProfile: this.rewardProfiles[2],
      CreatedDate: new Date(),
    },
  ];

  constructor() {}

  getBusinessCards = () => {
    let businessCards = {
      ActiveCards: this.businessCards.filter((card) => card.IsActive),
      InactiveCards: this.businessCards.filter((card) => !card.IsActive),
    };
    return businessCards;
  };
  getData = () => {
    return {
      // ACCOUNT
      getUserDetails: () => {
        return {...this.userDetails};
      },
      // ORG
      getOrgDetails: () => {
        return {...this.orgDetails};
      },
      getBusinessUserAccounts: () => {
        return [...this.businessUserAccounts];
      },
      // CUSTOMERS
      getCustomerUserAccounts: () => {
        return [...this.customerUserAccounts];
      },
      getCustomerTransactions: () => {
        return [...this.customerTransactions];
      },
      // REWARD PROFILES
      getRewardProfileConfigs: () => {
        return [...this.rewardProfileConfigs];
      },
      getRewardProfiles: () => {
        return [...this.rewardProfiles];
      },
      // BUSINESS CARDS
      createBusinessCard: (
        name: string,
        cardImage: string | undefined,
        rewardProfileId: string | undefined
      ) => {
        this.businessCards.push({
          Id: uuid(),
          IsActive: false,
          Name: name,
          CardImage: cardImage,
          RewardProfile: rewardProfileId
            ? this.rewardProfiles.find(
                (profile) => profile.Id == rewardProfileId
              )
            : undefined,
          CreatedDate: new Date(),
        });
        return true;
      },
      getBusinessCards: this.getBusinessCards,
      getBusinessCard: (id: string) => {
        let cards = [...this.businessCards];
        let card = cards.find((card) => {
          return card.Id == id;
        });
        return card;
      },
      patchBusinessCard: (
        id: string,
        name: string,
        cardImage: string | undefined,
        rewardProfileId: string | undefined
      ) => {
        this.businessCards.map((card) => {
          if (card.Id == id) {
            card.Name = name;
            card.CardImage = cardImage;
            card.RewardProfile = rewardProfileId
              ? this.rewardProfiles.find(
                  (profile) => profile.Id == rewardProfileId
                )
              : undefined;
          }
        });
        return true;
      },
      deleteBusinessCard: (id: string) => {
        this.businessCards = this.businessCards.filter((card) => card.Id != id);
        return true;
      },
      swapActiveBusinessCard: (id: string) => {
        // find active card and set inactive
        var activeCard = this.businessCards.find((card) => card.IsActive);
        if (activeCard) activeCard.IsActive = false;
        // find matching card and set active
        for (let i = 0; i < this.businessCards.length; i++) {
          if (this.businessCards[i].Id == id) {
            this.businessCards[i].IsActive = true;
            break;
          }
        }
        return true;
      },
    };
  };
}
