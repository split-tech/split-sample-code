import {
  ReferralInfo,
  UserReferralInfo,
} from '@/graphql/requests/__generated__/graphql';
import { EventType, EventValidationType } from './enum';
import { EventResponse, ReferralsResponse } from '@/graphql/types';

export const mapReferralCount = (
  referrals:
    | (ReferralInfo & {
        userReferrals?: UserReferralInfo[] | null | undefined;
      })[]
    | null
    | undefined
): {
  refereeCount: number;
  activeRefereeCount: number;
  referrerCount: number;
} => {
  if (!referrals) {
    return {
      refereeCount: 0,
      activeRefereeCount: 0,
      referrerCount: 0,
    };
  }

  const uniqueReferees = new Set<string>();
  const activeReferees = new Set<string>();
  const uniqueReferrers = new Set<string>();

  referrals.forEach((referral) => {
    const isReferralUpdated = referral.updated;

    referral.userReferrals?.forEach((userReferral) => {
      const { userAddress } = userReferral;
      if (userReferral.userReferralType === 'REFERRER') {
        uniqueReferrers.add(userAddress);
      } else if (userReferral.userReferralType === 'REFEREE') {
        uniqueReferees.add(userAddress);

        if (isReferralUpdated) {
          activeReferees.add(userAddress);
        }
      }
    });
  });

  return {
    refereeCount: uniqueReferees.size,
    activeRefereeCount: activeReferees.size,
    referrerCount: uniqueReferrers.size,
  };
};

// NOTE: Check sync with LeaderboardDataType in ~/client-partner/src/layouts/dashboard/Leaderboard/Leaderboard.tsx
export type LeaderboardDataType = {
  id: string; // Rank of the user
  userName: string;
  address: string;
  claimableReward: string;
  refereesNumber: string;
  activeRefereesNumber: string;
  eventName: string;
  startTimeStamp: number;
};

export type LeaderboardDataInternalType = {
  userName: string;
  address: string;
  claimableReward: number;
  refereesNumber: number;
  activeRefereesNumber: number;
  eventName: string;
  startTimeStamp: number;
};

export const mapLeaderboard = (
  event?: EventResponse,
  referralData?: ReferralsResponse
) => {
  if (!event || !referralData || referralData.length === 0) {
    const formattedLeaderboard: LeaderboardDataType[] = [];
    return formattedLeaderboard;
  }

  const {
    id: eventId,
    incentiveToken: { referrerAmountPerEvent },
  } = event;
  const leaderboardMap: Record<string, LeaderboardDataInternalType> = {};

  // NOTE: Leaderboard는 Referrer 활동만으로 claimableReward를 계산.
  referralData.forEach((referral) => {
    const referrerData = referral.userReferrals[0];
    const { userAddress } = referrerData;

    if (
      referral.referralVerifiedEvents?.some(
        (verifiedEvent) => verifiedEvent.verifiedEventId === eventId
      )
    ) {
      const userData = leaderboardMap[userAddress];
      if (!userData) {
        leaderboardMap[userAddress] = {
          userName: referrerData.user?.twitterUserName || '',
          address: userAddress,
          claimableReward: referrerAmountPerEvent,
          refereesNumber: 1,
          activeRefereesNumber: 1,
          eventName: event.name,
          startTimeStamp: event.startTimeStamp,
        };
      } else {
        userData.claimableReward += referrerAmountPerEvent;
        userData.refereesNumber += 1;
        userData.activeRefereesNumber += 1;
      }
    } else {
      const userData = leaderboardMap[userAddress];
      if (!userData) {
        leaderboardMap[userAddress] = {
          userName: referrerData.user?.twitterUserName || '',
          address: userAddress,
          claimableReward: 0,
          refereesNumber: 1,
          activeRefereesNumber: 0,
          eventName: event.name,
          startTimeStamp: event.startTimeStamp,
        };
      } else {
        userData.refereesNumber += 1;
      }
    }
  });

  const sortedLeaderboard = Object.values(leaderboardMap).sort(
    (a, b) => b.claimableReward - a.claimableReward
  );

  const formattedLeaderboard: LeaderboardDataType[] = sortedLeaderboard.map(
    (item, index) => ({
      id: (index + 1).toString(),
      userName: item.userName,
      address: item.address,
      claimableReward: item.claimableReward.toFixed(2),
      refereesNumber: item.refereesNumber.toString(),
      activeRefereesNumber: item.activeRefereesNumber.toString(),
      eventName: item.eventName,
      startTimeStamp: event.startTimeStamp,
    })
  );

  return formattedLeaderboard;
};

export const mapIntegratedLeaderBoard = (
  events?: EventResponse[] | null,
  referralData?: ReferralsResponse | null
) => {
  if (
    !events ||
    events.length === 0 ||
    !referralData ||
    referralData.length === 0
  ) {
    return [];
  }
  const parsedEvent = events.map((event) => {
    return {
      id: event.id,
      referrerAmountPerEvent: event.incentiveToken.referrerAmountPerEvent,
      name: event.name,
      startTimeStamp: event.startTimeStamp,
    };
  });
  const leaderboardMap: Record<string, LeaderboardDataInternalType> = {};

  // NOTE: Leaderboard는 Referrer 활동만으로 claimableReward를 계산.
  referralData.forEach((referral) => {
    const referrerData = referral.userReferrals[0];
    const { userAddress } = referrerData;

    let activeReferrer = false;
    parsedEvent.forEach((event) => {
      if (
        referral.referralVerifiedEvents?.some(
          (verifiedEvent) => verifiedEvent.verifiedEventId === event.id
        )
      ) {
        const userData = leaderboardMap[userAddress];
        if (!userData) {
          leaderboardMap[userAddress] = {
            userName: referrerData.user?.twitterUserName || '',
            address: userAddress,
            claimableReward: event.referrerAmountPerEvent,
            refereesNumber: 1,
            activeRefereesNumber: 1,
            eventName: event.name,
            startTimeStamp: event.startTimeStamp,
          };
        } else {
          userData.claimableReward += event.referrerAmountPerEvent;
          userData.refereesNumber += 1;
          userData.activeRefereesNumber += 1;
        }
        activeReferrer = true;
      }
    });

    if (!activeReferrer) {
      const userData = leaderboardMap[userAddress];
      if (!userData) {
        leaderboardMap[userAddress] = {
          userName: referrerData.user?.twitterUserName || '',
          address: userAddress,
          claimableReward: 0,
          refereesNumber: 1,
          activeRefereesNumber: 0,
          eventName: '',
          startTimeStamp: 0,
        };
      } else {
        userData.refereesNumber += 1;
      }
    }
  });

  const sortedLeaderboard = Object.values(leaderboardMap).sort(
    (a, b) => b.claimableReward - a.claimableReward
  );

  const formattedLeaderboard: LeaderboardDataType[] = sortedLeaderboard.map(
    (item, index) => ({
      id: (index + 1).toString(),
      userName: item.userName,
      address: item.address,
      claimableReward: item.claimableReward.toFixed(2),
      refereesNumber: item.refereesNumber.toString(),
      activeRefereesNumber: item.activeRefereesNumber.toString(),
      eventName: item.eventName,
      startTimeStamp: item.startTimeStamp,
    })
  );

  return formattedLeaderboard;
};

export const mapEventType = (type: EventType) => {
  const types = {
    [EventType.NON_TRANSACTION]: 'Non-transaction',
    [EventType.TRANSACTION]: 'Transaction',
  };

  return types[type];
};

export const mapVerificationMethod = (method: EventValidationType) => {
  const methods = {
    [EventValidationType.EVENT_LOG]: 'Event Log',
    [EventValidationType.TOKEN]: 'Token',
    [EventValidationType.TRANSACTION]: 'Transaction',
  };

  return methods[method];
};

enum Role {
  USER = 'USER',
  REFERRER = 'REFERRER',
  PARTNER = 'PARTNER',
  ADMIN = 'ADMIN',
  TEST = 'TEST',
}

export const mapUserRole = (role: Role) => {
  const roles = {
    [Role.ADMIN]: 'Admin',
    [Role.REFERRER]: 'Referrer',
    [Role.PARTNER]: 'Partner',
    [Role.USER]: 'User',
    [Role.TEST]: 'Test',
  };

  return roles[role];
};
