import { useContext } from "react";
import { RdtContext } from "@/context/rdt";

export const useRdt = () => useContext(RdtContext);
