import { CheckoutButton } from "./CheckoutButton";
import { SaveForLater } from "./SaveForLater";
import { TotalSummary } from "./TotalSummary";

export function SummaryFooter() {
  return (
    <div className="mt-2.5 flex flex-1 flex-col gap-1 px-[5px]">
      <TotalSummary />
      <CheckoutButton />
      <SaveForLater />
    </div>
  );
}
