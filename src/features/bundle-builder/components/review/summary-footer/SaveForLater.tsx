import { useSaveBundle } from "@/features/bundle-builder/hooks/useSaveBundle";

export function SaveForLater() {
  const { save } = useSaveBundle();
  return (
    <button
      onClick={save}
      className="mt-1 text-xs leading-[1.2] text-neutral-700 italic underline"
    >
      Save my system for later
    </button>
  );
}
