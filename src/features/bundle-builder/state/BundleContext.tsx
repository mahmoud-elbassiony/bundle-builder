import { createContext } from "react";
import type { BundleAction, BundleState } from "./bundleReducer";
import type { Bundle } from "../types";

interface BundleContextValue {
  state: BundleState;
  dispatch: React.Dispatch<BundleAction>;
  data: Bundle;
}

export const BundleContext = createContext<BundleContextValue | null>(null);
