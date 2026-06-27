import { useBundle } from "./useBundle";

export function useSaveBundle() {
  const { state } = useBundle();

  function save() {
    localStorage.setItem("bundle", JSON.stringify(state));
    alert("Bundle Saved Successfully!");
  }

  return { save };
}
