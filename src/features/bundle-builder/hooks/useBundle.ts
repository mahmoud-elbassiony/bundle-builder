import { useContext } from "react";
import { BundleContext } from "../state/BundleContext";

export function useBundle() {
  const context = useContext(BundleContext);

  if (!context) {
    throw new Error("useBundle must be used within BundleProvider");
  }

  return context;
}
