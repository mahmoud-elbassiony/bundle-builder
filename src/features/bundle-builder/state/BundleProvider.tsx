import { useReducer } from "react";
import { bundleReducer, getInitialState } from "./bundleReducer";
import { BundleContext } from "./BundleContext";
import type { Bundle } from "../types";

export function BundleProvider({
  children,
  bundleData,
}: {
  children: React.ReactNode;
  bundleData: Bundle;
}) {
  const [state, dispatch] = useReducer(bundleReducer, undefined, () =>
    getInitialState(bundleData),
  );

  return (
    <BundleContext.Provider value={{ state, dispatch, data: bundleData }}>
      {children}
    </BundleContext.Provider>
  );
}
