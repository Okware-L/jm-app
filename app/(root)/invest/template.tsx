"use client"

//require("dotenv").config();
import React from "react";
//import Invest from '../../../components/Invest'
import { ThirdwebProvider, metamaskWallet, trustWallet ,rainbowWallet , walletConnect} from "@thirdweb-dev/react";
import { Goerli, Ethereum, Polygon, Mumbai  } from "@thirdweb-dev/chains";


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {

  const activeChain = Goerli;

  return (
    <div>    
    <ThirdwebProvider 
    activeChain={activeChain}

    supportedChains={[Ethereum, Polygon, Mumbai, Goerli]}
    
        clientId="dd2c97d0c572e2b8a570ec077c6b75c7"
        supportedWallets={[
          metamaskWallet(),
          trustWallet(),
          rainbowWallet(),
          walletConnect()
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