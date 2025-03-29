import { useCallback, version } from "react";
import { useRdt } from "./use-rdt";
import { useGatewayApi } from "./use-gateway-api";

export const useSendTransaction = () => {
  const rdt = useRdt();
  const gatewayApi = useGatewayApi();

  const sendTransaction = useCallback(
    async (transactionManifest, message, setLoading) => {
      console.log(transactionManifest);
      const result = await rdt.walletApi.sendTransaction({
        transactionManifest,
      });
      console.log("result", result);

      if (result.isErr()) throw result.error;

      // Get the details of the transaction committed to the ledger
      const receipt = await gatewayApi.transaction.getCommittedDetails(
        result.value.transactionIntentHash
      );
      return { result: result.value, receipt };
    },
    [gatewayApi, rdt]
  );

  return sendTransaction;
};
