import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

export interface Card {
  Id: string;
  Name: string;
  IsActive: boolean;
  CardImage?: string | undefined;
  RewardProfile?:
    | undefined
    | null
    | {
        Id: string;
        Name: string;
      };
  CreatedDate: Date;
}

export interface CreateCard {}

export interface UpdateCard {}

export interface RewardConfigSimple {
  Id: string;
  Title: string;
}

export interface RewardConfig {
  Id: string;
  Title: string;
  IsPremium?: boolean;
}

export interface RewardProfileSimple {
  Id: string;
  Name: string;
}

export interface RewardProfile {
  Id: string;
  Name: string;
  RewardConfig?: RewardConfig;
}

export interface CreateRewardProfile {
  name: string;
  rewardConfigId: string | undefined;
}
export interface UpdateRewardProfile {
  id?: string | undefined;
  name: string;
  rewardConfigId: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class MockRepositoryService {
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
          PointsSpent: 10,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T11:24:00'),
          PointsEarned: 5,
          PointsSpent: 0,
        },
        {
          CustomerId: this.customerUserAccounts[1].Id,
          DateTime: new Date('2021-01-17T14:24:00'),
          PointsEarned: 10,
          PointsSpent: 2,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsSpent: 20,
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
          PointsSpent: 0,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-18T11:24:00'),
          PointsEarned: 4,
          PointsSpent: 0,
        },
        {
          CustomerId: this.customerUserAccounts[1].Id,
          DateTime: new Date('2021-01-18T14:24:00'),
          PointsEarned: 2,
          PointsSpent: 0,
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
          PointsSpent: 10,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T11:24:00'),
          PointsEarned: 5,
          PointsSpent: 0,
        },
        {
          CustomerId: this.customerUserAccounts[1].Id,
          DateTime: new Date('2021-01-17T14:24:00'),
          PointsEarned: 10,
          PointsSpent: 2,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsSpent: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsSpent: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsSpent: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsSpent: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsSpent: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsSpent: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsSpent: 20,
        },
        {
          CustomerId: this.customerUserAccounts[2].Id,
          DateTime: new Date('2021-01-17T16:24:00'),
          PointsEarned: 0,
          PointsSpent: 20,
        },
      ],
    },
  ];

  rewardConfigs = [
    { Id: uuid(), Title: 'basic points' },
    { Id: uuid(), Title: 'basic credits' },
    { Id: uuid(), Title: 'basic rewards' },
    { Id: uuid(), Title: 'tiered', IsPremium: true },
  ];

  rewardProfiles: RewardProfile[] = [
    {
      Name: 'free muffins',
      Id: uuid(),
      RewardConfig: {
        Id: this.rewardConfigs[0].Id,
        Title: this.rewardConfigs[0].Title,
      },
    },
    {
      Name: 'free points',
      Id: uuid(),
      RewardConfig: {
        Id: this.rewardConfigs[3].Id,
        Title: this.rewardConfigs[3].Title,
      },
    },
    {
      Name: 'VIP rewards',
      Id: uuid(),
      RewardConfig: {
        Id: this.rewardConfigs[2].Id,
        Title: this.rewardConfigs[2].Title,
      },
    },
    {
      Name: 'test profile',
      Id: uuid(),
      RewardConfig: {
        Id: this.rewardConfigs[1].Id,
        Title: this.rewardConfigs[1].Title,
      },
    },
  ];

  businessCards: Card[] = [
    {
      Id: 'aaa',
      IsActive: false,
      Name: 'First Card',
      RewardProfile: undefined,
      CreatedDate: new Date(),
      CardImage: 'https://i.colnect.net/f/3379/433/Hoyts-Rewards-Black.jpg',
    },
    {
      Id: 'bbb',
      IsActive: false,
      Name: 'Test card',
      RewardProfile: {
        Id: this.rewardProfiles[3].Id,
        Name: this.rewardProfiles[3].Name,
      },
      CreatedDate: new Date(),
    },
    {
      Id: 'ccc',
      IsActive: false,
      Name: 'dummy design',
      RewardProfile: {
        Id: this.rewardProfiles[1].Id,
        Name: this.rewardProfiles[1].Name,
      },
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
      RewardProfile: {
        Id: this.rewardProfiles[2].Id,
        Name: this.rewardProfiles[2].Name,
      },
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
        return { ...this.userDetails };
      },
      // ORG
      getOrgDetails: () => {
        return { ...this.orgDetails };
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
      getRewardConfigs: () => {
        return [...this.rewardConfigs];
      },
      createRewardProfile: (
        name: string,
        rewardConfigId: string | undefined
      ) => {
        let rewardConfig;
        if (rewardConfigId) {
          rewardConfig = this.rewardConfigs.find(
            (config) => config.Id == rewardConfigId
          );
        }
        if (rewardConfig) {
          rewardConfig = {
            Id: rewardConfig.Id,
            Title: rewardConfig.Title,
          };
        }
        let rewardProfile = {
          Id: uuid(),
          Name: name,
          RewardConfig: rewardConfig,
        };
        this.rewardProfiles.push(rewardProfile);
        return true;
      },
      getRewardProfiles: () => {
        return [...this.rewardProfiles];
      },
      getRewardProfile: (id: string) => {
        return [...this.rewardProfiles].find((profile) => {
          return profile.Id == id;
        });
      },
      updateRewardProfile: (
        id: string | undefined,
        name: string,
        rewardConfigId: string | undefined
      ) => {
        let rewardConfig: RewardConfigSimple | undefined;
        rewardConfig = this.rewardConfigs.find(
          (config) => config.Id == rewardConfigId
        );
        this.rewardProfiles.find((profile) => {
          if (profile.Id == id) {
            profile.Name = name;
            profile.RewardConfig = rewardConfig;
          }
        });
        return true;
      },
      deleteRewardProfile: (id: string) => {
        this.rewardProfiles = this.rewardProfiles.filter(
          (profile) => profile.Id != id
        );
        return true;
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
        return [...this.businessCards].find((card) => {
          return card.Id == id;
        });
      },
      updateBusinessCard: (
        id: string,
        name: string,
        cardImage: string | undefined,
        rewardProfileId: string | undefined
      ) => {
        let rewardProfile: RewardProfileSimple | undefined;
        rewardProfile = this.rewardProfiles.find(
          (profile) => profile.Id == rewardProfileId
        );
        if (rewardProfile) {
          rewardProfile = { Id: rewardProfile.Id, Name: rewardProfile.Name };
        }

        this.businessCards.map((card) => {
          if (card.Id == id) {
            card.Name = name;
            card.CardImage = cardImage;
            card.RewardProfile = rewardProfile;
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
