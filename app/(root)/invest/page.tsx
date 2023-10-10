"use client"

import React from 'react'
import StakeCard from '../../../components/cards/StakeCard';
//import { useContract, useTokenBalance } from "@thirdweb-dev/react";
import { ConnectWallet, ChainId,
  useChainId,
  useAddress } from '@thirdweb-dev/react';



const page : React.FC= () => {
  const address = useAddress();

  if(!address) {
    return(
      <div>
          <ConnectWallet/>
      </div>
    )
  }
  return (
    <div className='container p-2'>
        <h1  className='text-white my-3'>Staking options</h1>
        <ConnectWallet/>
      <div className='lg:grid lg:grid-cols-2 lg:gap-2'>
        <div className="my-2 ">
     <StakeCard
  pools={[
    {
      id: 'HEALTH',
       rewardToken: '',
       stakingToken: '',
      startDate: '2023-08-01',
      endDate: '2023-09-01',
      apr: '30%',
      earned: '0.0 JMS',
    },
  ]}
/>
</div>
<div className='my-2'>
<StakeCard
  pools={[
    {
      id:'EDUCATION',
       rewardToken: '',
      stakingToken: '',
      startDate: '2023-08-01',
      endDate: '2023-09-01',
      apr: '14%',
      earned: '0.0 JMS',
    },
  ]}
/>
</div>

<div className='my-2'>
<StakeCard
  pools={[
    {
      id:'AGRICULTURE',
       rewardToken: '',
  stakingToken: '',
      startDate: '2023-08-01',
      endDate: '2023-09-01',
      apr: '23%',
      earned: '0.0 JMS',
    },
  ]}
/>
</div>

<div className='my-2'>
<StakeCard
  pools={[
    {
      id:'BIOTECH',
       rewardToken: '',
  stakingToken: '',
      startDate: '2023-08-01',
      endDate: '2023-09-01',
      apr: '28%',
      earned: '0.0 JMS',
    },
  ]}
/>
</div>

<div className='my-2'>
<StakeCard
  pools={[
    {
      id:'FINTECH',
       rewardToken: '',
  stakingToken: '',
      startDate: '2023-08-01',
      endDate: '2023-09-01',
      apr: '40%',
      earned: '0.0 JMS',
    },
  ]}
/>
</div>

<div className='my-2'>
<StakeCard
  pools={[
    {
      id:'ARCHITECTURE',
       rewardToken: '',
  stakingToken: '',
      startDate: '2023-08-01',
      endDate: '2023-09-01',
      apr: '30%',
      earned: '0.0 JMS',
    },
  ]}
/>
</div>

<div className='my-2'>
<StakeCard
  pools={[
    {
      id:'PHARMTECH',
       rewardToken: '',
  stakingToken: '',
      startDate: '2023-08-01',
      endDate: '2023-09-01',
      apr: '40%',
      earned: '0.0 JMS',
    },
  ]}
/>
</div>

<div className='my-2'>
<StakeCard
  pools={[
    {
      id:'ART',
       rewardToken: '',
  stakingToken: '',
      startDate: '2023-08-01',
      endDate: '2023-09-01',
      apr: '20%',
      earned: '0.0 JMS',
    },
  ]}
/>
</div>
      </div>
</div>
  )
}

export default page