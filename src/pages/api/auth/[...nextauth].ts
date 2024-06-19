import { getGraphqlClient } from '@/graphql/client';
import { createReferralCode } from '@/graphql/requests';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const authConfig = await NextAuth(req, res, {
    providers: [
      TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID ?? '',
        clientSecret: process.env.TWITTER_CLIENT_SECRET ?? '',
        version: '2.0',
      }),
    ],
    callbacks: {
      async signIn({ profile }: any) {
        const client = getGraphqlClient(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
          req,
          res,
        });
        try {
          // profile: { data: { id: string, profile_image_url: string, name: string, username: string } }
          if (!profile.data.username)
            throw new Error('No twitter username found');

          const { data } = await client.mutate({
            mutation: createReferralCode,
            variables: {
              input: {
                twitterUserName: profile.data.username,
              },
            },
          });

          if (!data?.createReferralCode.referralCode) {
            return false; // TODO: 에러 처리
          }
        } catch (error) {
          console.error(error);
          return false; // TODO: 에러 처리
        }
        return true;
      },
    },
  });
  return authConfig;
};
