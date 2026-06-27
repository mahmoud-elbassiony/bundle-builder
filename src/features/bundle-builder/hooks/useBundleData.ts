import { useEffect, useState } from "react";
import { getBundle } from "../api/getBundle";
import type { Bundle } from "../types";

export function useBundleData() {
  const [data, setData] = useState<Bundle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getBundle()
      .then((res) => setData(res))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
