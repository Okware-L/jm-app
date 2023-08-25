import {
    Web3Button,
    useAddress,
    useContract,
    useContractRead,
    useTokenBalance,
  } from "@thirdweb-dev/react";
  import {
    REWARD_TOKEN_ADDRESS,
    STAKE_CONTRACT_ADDRESS,
    STAKE_TOKEN_ADDRESS,
  } from "../constants/addresses";

  import React, { useEffect, useState } from "react";

  import { Input } from "@/components/ui/input"

  import { ethers } from "ethers";
  import { useToast } from "@/components/ui/use-toast"

  

export default function Stake() {

    const address = useAddress();

  const { contract: stakeTokenContract } = useContract(
    STAKE_TOKEN_ADDRESS,
    "token"
  );
  const { contract: rewardTokenContract } = useContract(
    REWARD_TOKEN_ADDRESS,
    "token"
  );
  const { contract: stakeContract } = useContract(
    STAKE_CONTRACT_ADDRESS,
    "custom"
  );

  const {
    data: stakeInfo,
    refetch: refetchStakeInfo,
    isLoading: loadingStakeInfo,
  } = useContractRead(stakeContract, "getStakeInfo", [address]);

  const { data: stakeTokenBalance, isLoading: loadingStakeTokenBalance } =
    useTokenBalance(stakeTokenContract, address);

  const { data: rewardTokenBalance, isLoading: loadingRewardTokenBalance } =
    useTokenBalance(rewardTokenContract, address);

  useEffect(() => {
    setInterval(() => {
      refetchStakeInfo();
    }, 10000);
  }, []);

  const [stakeAmount, setStakeAmount] = useState<string>("0");
  const [unstakeAmount, setUnstakeAmount] = useState<string>("0");

  function resetValue() {
    setStakeAmount("0");
    setUnstakeAmount("0");
  }

  const { toast } = useToast()


  return (
    <div>
        <p >available staking tokens</p>
        <div className="my-4 ">
            <div className="p-2">
              {stakeInfo && stakeInfo[0] ? (
                <p>
                  {ethers.utils.formatEther(stakeInfo[0])}
                  {" $" + stakeTokenBalance?.symbol}
                </p>
              ) : (
                <p>0</p>
              )}
            </div>

              {/** STAKE */}
            <div>
            <Input
                type="number"
                max={stakeTokenBalance?.displayValue}
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
              />
                <Web3Button
                contractAddress={STAKE_CONTRACT_ADDRESS}
                action={async (contract) => {
                  await stakeTokenContract?.erc20.setAllowance(
                    STAKE_CONTRACT_ADDRESS,
                    stakeAmount
                  );

                  await contract.call("stake", [
                    ethers.utils.parseEther(stakeAmount),
                  ]);
                  resetValue();
                }}
                onSuccess={() =>
                  toast({
                    title: "Stake Successful",
                    description: "success",
                    duration: 5000,
                  })
                }
              >STAKE</Web3Button>
            </div>



            <div>
            <Input
                type="number"
                value={unstakeAmount}
                onChange={(e) => setUnstakeAmount(e.target.value)}
              />
                <Web3Button
                contractAddress={STAKE_CONTRACT_ADDRESS}
                action={async (contract) => {
                  await stakeTokenContract?.erc20.setAllowance(
                    STAKE_CONTRACT_ADDRESS,
                    stakeAmount
                  );

                  await contract.call("withdraw", [
                    ethers.utils.parseEther(unstakeAmount),
                  ]);
                  resetValue();
                }}
                onSuccess={() =>
                  toast({
                    title: "unstake Successful",
                    description: "success",
                    duration: 5000,
                  })
                }
              >UNSTAKE</Web3Button>
            </div>



            <div>
                <h1>Reward Token</h1>
                {stakeInfo && stakeInfo[0] ? (
                <p>
                  {ethers.utils.formatEther(stakeInfo[1])}
                  {" $" + rewardTokenBalance?.symbol}
                </p>
              ) : (
                <p>0</p>
              )}

            <Web3Button
              contractAddress={STAKE_CONTRACT_ADDRESS}
              action={async (contract) => {
                await contract.call("claimRewards");
                resetValue();
              }}
              onSuccess={() =>
                toast({
                  title: "Rewards Claimed",
                  description: "success",
                  duration: 5000,
                })
              }
            >CLAIM</Web3Button>
            </div>
            </div>
    </div>
  )
}
