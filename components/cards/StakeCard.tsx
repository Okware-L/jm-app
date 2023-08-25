"use client"
import React from 'react';
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { REWARD_TOKEN_ADDRESS, STAKE_TOKEN_ADDRESS } from "../../constants/addresses";
import Stake from '../Stake';


//import { ConnectWallet } from '@thirdweb-dev/react';

interface StakingPool {
  rewardToken: string
  stakingToken: string
  startDate: string;
  endDate: string;
  apr: string;
  earned: string;
  id: string;
}

interface StakeCardProps {
  pools: StakingPool[];
}

function StakeCard({ pools }: StakeCardProps) {

  const address = useAddress();

  const { contract: stakeTokenContract, isLoading: loadingStakeToken } = useContract(STAKE_TOKEN_ADDRESS);

  const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address);

  const { contract: rewardTokenContract, isLoading: loadingarewardToken } = useContract(REWARD_TOKEN_ADDRESS);

  const { data: rewardTokenBalance, isLoading: loadingrewardTokenBalance } = useTokenBalance(rewardTokenContract, address);

  if(!address){
    return(
      <div className="text-white my-5">
        <p>Connect wallet to view Investments</p>
      </div>
    )
  }


  return (
    <div className="grid grid-cols-2 gap-2">
      {pools.map((pool, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
          <div className="bg-blue-500 text-gray-800 text-center p-4">
            <h1 className="text-xl font-semibold">Stake</h1>
          </div>

          <div className="p-4 text-gray-800">
            {/* Staking Pool Details */}
            <h1 className="text-gray-800 text-lg font-semibold"><span className="">Staking Pool: </span>{pool.id}</h1>
            
              <span className='text-lg font-semibold'>Staking Token:  </span>
              <div className="text-lg font-semibold flex justify-between py-3">
              <p>${tokenBalance?.symbol}</p>
              <p>Balance: {tokenBalance?.displayValue}</p>
             
            </div>
              <span>Reward Token:  </span>
            <div className="text-lg font-semibold py-3 flex justify-between">
              <p>${rewardTokenBalance?.symbol}</p>
              <p>Balance: {rewardTokenBalance?.displayValue}</p>
            </div>
            
            {/* Staking Period */}
            <p className="text-gray-800">Staking Period:</p>
            <p className="text-lg">Start: {pool.startDate}</p>
            <p className="text-lg">End: {pool.endDate}</p>

            {/* APR and Earned Tokens */}
            <div className="flex justify-between">
              <div>
                <p className="text-gray-800">APR:</p>
                <p className="text-lg font-semibold text-green-500">{pool.apr}</p>
              </div>
              <div>
                <p className="text-gray-800">Earned:</p>
                <p className="text-lg font-semibold">{pool.earned}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <Stake/>
          </div>

          <div className="bg-gray-100 p-4 text-center">
            <p className="text-sm text-gray-600">Stake JMS to earn rewards!</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StakeCard;
