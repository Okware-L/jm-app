"use client"

import React from "react"
//import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
//import { ConnectWallet } from '@thirdweb-dev/react';
import { ThirdwebProvider, magicLink, metamaskWallet  } from "@thirdweb-dev/react";

export default function Template({ children }: { children: React.ReactNode }) {

    const activeChain = "goerli"

    return (
    <ThirdwebProvider activeChain={activeChain}
    clientId="dd2c97d0c572e2b8a570ec077c6b75c7"
    supportedWallets={[
      metamaskWallet(),
      magicLink({
        apiKey: "pk_live_D57210D37D3C30CC",
        oauthOptions: {
          providers: [
            "google",
            "facebook",
            "twitter",
            "apple",
          ],
        },
      }),
    ]}>
    <div>{children}</div>
    </ThirdwebProvider>
    )
  }