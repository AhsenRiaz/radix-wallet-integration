import { createContext } from "react";

export const RdtContext = createContext(null);

export const RdtProvider = ({ value, children }) => (
  <RdtContext.Provider value={value}>{children}</RdtContext.Provider>
);
