import { useEffect, useState } from "react";
import { GatewayApiClient } from "@radixdlt/babylon-gateway-api-sdk";
import { RadixDappToolkit, RadixNetwork } from "@radixdlt/radix-dapp-toolkit";
import { GatewayApiProvider } from "@/context/gateway-api";
import { RdtProvider } from "@/context/rdt";
import { AccountProvider } from "@/context/account";
import { dAppDefinitionAddress } from "@/constants";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [rdt, setRdt] = useState(null);
  const [gatewayApi, setGatewayApi] = useState(null);

  useEffect(() => {
    const rdtInstance = RadixDappToolkit({
      networkId: RadixNetwork.Stokenet,
      applicationVersion: "1.0.0",
      applicationName: "Gumball",
      applicationDappDefinitionAddress: dAppDefinitionAddress,
    });
    console.log("dApp Toolkit: ", rdtInstance);
    setRdt(rdtInstance);

    const gatewayApiInstance = GatewayApiClient.initialize(
      rdtInstance.gatewayApi.clientConfig
    );
    console.log("gatewayApi: ", gatewayApiInstance);
    setGatewayApi(gatewayApiInstance);
  }, []);

  if (!rdt || !gatewayApi) {
    return <div>Loading...</div>;
  }

  return (
    <RdtProvider value={rdt}>
      <GatewayApiProvider value={gatewayApi}>
        <AccountProvider>
          <Component {...pageProps} />
        </AccountProvider>
      </GatewayApiProvider>
    </RdtProvider>
  );
}

export default MyApp;
