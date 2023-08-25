"use client"

import React from "react";
//import Invest from '../../../components/Invest'
import { ChainId, ThirdwebProvider, magicLink, metamaskWallet  } from "@thirdweb-dev/react";
import { Goerli, Ethereum, Polygon, Mumbai  } from "@thirdweb-dev/chains";


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  const activeChain = ChainId.Goerli;

  return (
    <div>    
    <ThirdwebProvider 
    activeChain={activeChain}

    supportedChains={[Ethereum, Polygon, Mumbai]}
    
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
        ]}
    >
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </section>
    </ThirdwebProvider>
    </div>
  )
}