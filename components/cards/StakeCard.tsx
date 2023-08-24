// components/StakeCard.tsx
import React from 'react';

interface StakingPool {
  name: string;
  startDate: string;
  endDate: string;
  apr: string;
  earned: string;
}

interface StakeCardProps {
  pools: StakingPool[];
}

const StakeCard: React.FC<StakeCardProps> = ({ pools }) => (
  <div className="grid grid-cols-2 gap-2">
    {pools.map((pool, index) => (
      <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
        <div className="bg-blue-500 text-gray-800 text-center p-4">
          <h1 className="text-xl font-semibold">Stake</h1>
          <p className="text-sm">PancakeSwap</p>
        </div>

        <div className="p-4">
          {/* Staking Pool Details */}
          <p className="text-gray-800">Staking Pool:</p>
          <p className="text-lg font-semibold">{pool.name}</p>

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
            <button className="bg-blue-500 hover:bg-blue-600 text-gray-800 font-semibold py-2 px-4 rounded-full border-gray-900">
              Stake
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full">
              Unstake
            </button>
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600">Stake CAKE/BNB LP to earn CAKE</p>
        </div>
      </div>
    ))}
  </div>
);

export default StakeCard;
