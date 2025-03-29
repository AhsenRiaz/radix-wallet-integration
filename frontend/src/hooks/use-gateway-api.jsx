import { useContext } from "react";
import { GatewayApiContext } from "@/context/gateway-api";

export const useGatewayApi = () => useContext(GatewayApiContext);
