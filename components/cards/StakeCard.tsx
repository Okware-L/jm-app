"use client"
import React from 'react';
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
//import { STAKE_TOKEN_ADDRESS } from "../../constants/addresses";
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
            <p className="text-gray-800 text-lg font-semibold"><span className="">Staking Pool: </span>{pool.id}</p>
            <p className="text-lg font-semibold"><span>Staking Token:  </span>{pool.stakingToken}</p>
            <p className="text-lg font-semibold"><span>Reward Token:  </span>{pool.rewardToken}</p>
            
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
            <div className="p-4 flex justify-center space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-gray-800 font-semibold py-2 px-4 rounded-full border-solid border-2 border-sky-500">
                Stake
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full">
                Unstake
              </button>
            </div>
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
