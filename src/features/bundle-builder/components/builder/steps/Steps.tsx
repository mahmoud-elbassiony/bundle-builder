import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { useAccordion } from "@/shared/components/ui/accordion/context";
import { useBundle } from "@/features/bundle-builder/hooks/useBundle";
import StepHeader from "./StepHeader";
import StepNavigationButton from "./StepNavigationButton";
import { steps } from "./steps.config";

export default function Steps() {
  const { value: activeValues, toggleItem } = useAccordion();
  const { state, data } = useBundle();

  return (
    <>
      {steps.map((step, i) => {
        const stepKey = `step-${i + 1}`;
        const isOpen = activeValues.includes(stepKey);
        const selectedCount = step.getSelectedCount(state);

        return (
          <AccordionItem
            key={i}
            value={stepKey}
            className={`${isOpen ? "bg-primary-glance" : "border-b border-neutral-900"} overflow-hidden`}
          >
            <AccordionTrigger>
              <StepHeader
                icon={step.icon}
                selectedCount={selectedCount}
                stepNumber={i + 1}
                stepsCount={steps.length}
                title={step.title}
                isOpen={isOpen}
              />
            </AccordionTrigger>
            <AccordionContent className="mt-[-5px] px-[15px]">
              <div className="pb-5">
                {step.renderContent(data)}
                {step.buttonText && steps.length - 1 !== i && (
                  <StepNavigationButton
                    buttonText={step.buttonText}
                    toggleItem={() => toggleItem(`step-${i + 2}`)}
                  />
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </>
  );
}
