import { Accordion } from "@/shared/components/ui/accordion";
import Steps from "./steps/Steps";

export default function Builder() {
  return (
    <Accordion
      type="single"
      defaultValue="step-1"
      className="overflow-hidden lg:rounded-[10px]"
    >
      <h1 className="mb-4 text-center text-[32px] leading-[1.1] font-bold tracking-[-0.06px] text-neutral-900 lg:hidden">
        Let’s get started!
      </h1>
      <Steps />
    </Accordion>
  );
}
