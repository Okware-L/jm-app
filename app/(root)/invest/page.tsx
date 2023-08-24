import React from 'react'
import StakeCard from '../../../components/cards/StakeCard';


const page : React.FC= () => {
  return (
    <div className='container p-2'>
        <h1  className='text-white my-3'>Staking options</h1>
      <div className='lg:grid lg:grid-cols-2 lg:gap-2'>
        <div className="my-2 ">
     <StakeCard
  pools={[
    {
      id: 'HEALTH',
      name: 'JMS/ETH LP',
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
      name: 'JMS/ETH LP',
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
      name: 'JMS/ETH LP',
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
      name: 'JMS/ETH LP',
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
      name: 'JMS/ETH LP',
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
      name: 'JMS/ETH LP',
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
      name: 'JMS/ETH LP',
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
      name: 'JMS/ETH LP',
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