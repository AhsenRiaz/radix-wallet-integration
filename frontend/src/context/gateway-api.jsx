import { createContext } from "react";

export const GatewayApiContext = createContext(null);

export const GatewayApiProvider = ({ value, children }) => (
  <GatewayApiContext.Provider value={value}>
    {children}
  </GatewayApiContext.Provider>
);
