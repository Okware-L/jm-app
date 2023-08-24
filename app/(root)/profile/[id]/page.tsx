import Image from "next/image";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import StakeCard from '../../../../components/cards/StakeCard';
//import { useAddress, useContract, useTokenBalance, ThirdwebProvider } from "@thirdweb-dev/react";
//import { ConnectWallet } from '@thirdweb-dev/react';



import { profileTabs } from "@/constants";

import ThreadsTab from "@/components/shared/ThreadsTab";

import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { fetchUser } from "@/lib/actions/user.actions";

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(params.id);
  if (!userInfo?.onboarded) redirect("/onboarding");


  return (
  
    <section>
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />

      <div className='mt-9'>
        <Tabs defaultValue='threads' className='w-full'>
          <TabsList className='tab'>
            {profileTabs.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value} className='tab'>
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={24}
                  height={24}
                  className='object-contain'
                />
                <p className='max-sm:hidden'>{tab.label}</p>

                {tab.label === "Threads" && (
                  <p className='ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2'>
                    {userInfo.threads.length}
                  </p>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
       
          
            <TabsContent
              //key={`content-${tab.label}`}
              value='threads'
              className='w-full text-light-1'
            >
              {/* @ts-ignore */}
              <ThreadsTab
                currentUserId={user.id}
                accountId={userInfo.id}
                accountType='User'
              />
            </TabsContent>
        

            <TabsContent
            //key={`content-${tab.label}`}
              value='Invest'
              className='w-full text-light-1'
            >
              {/* @ts-ignore */}
              <p>Current Investments</p>
              <div className="my-2 ">
                <StakeCard
                  pools={[
                    {
                      id: 'HEALTH',
                      stakingToken: '',
                      rewardToken: '',
                      startDate: '2023-08-01',
                      endDate: '2023-09-01',
                      apr: '30%',
                      earned: '0.0 JMS',
                    },
                  ]}
                />
              </div>
             
            </TabsContent>
       
        </Tabs>
      </div>
    </section>
  );
}
export default Page;
