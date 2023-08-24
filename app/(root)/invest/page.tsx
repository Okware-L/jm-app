import React from 'react'
import StakeCard from '../../../components/cards/StakeCard';


const page : React.FC= () => {
  return (
    <div>
        <h1  className='text-white'>Staking options</h1>
     <div className="">
     <StakeCard
  pools={[
    {
      name: 'CAKE/BNB LP',
      startDate: '2023-08-01',
      endDate: '2023-09-01',
      apr: '45.5%',
      earned: '1000 CAKE',
    },
    {
      name: 'ETH/BNB LP',
      startDate: '2023-08-15',
      endDate: '2023-09-15',
      apr: '30.0%',
      earned: '500 ETH',
    },
    {
        name: 'ETH/BNB LP',
        startDate: '2023-08-15',
        endDate: '2023-09-15',
        apr: '30.0%',
        earned: '500 ETH',
      },
      {
        name: 'ETH/BNB LP',
        startDate: '2023-08-15',
        endDate: '2023-09-15',
        apr: '30.0%',
        earned: '500 ETH',
      },
         {
      name: 'ETH/BNB LP',
      startDate: '2023-08-15',
      endDate: '2023-09-15',
      apr: '30.0%',
      earned: '500 ETH',
    },
    {
        name: 'ETH/BNB LP',
        startDate: '2023-08-15',
        endDate: '2023-09-15',
        apr: '30.0%',
        earned: '500 ETH',
      },
      {
        name: 'ETH/BNB LP',
        startDate: '2023-08-15',
        endDate: '2023-09-15',
        apr: '30.0%',
        earned: '500 ETH',
      },
      {
        name: 'ETH/BNB LP',
        startDate: '2023-08-15',
        endDate: '2023-09-15',
        apr: '30.0%',
        earned: '500 ETH',
      },
    // Add more pools as needed
  ]}
/>
    </div>
    </div>
  )
}

export default page