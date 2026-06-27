import { createContext, useContext } from "react";

// --- Accordion Root Context ---
export type AccordionType = "single" | "multiple";

interface AccordionContextType {
  value: string[];
  toggleItem: (itemValue: string) => void;
}

export const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error(
      "Accordion components must be used within an <Accordion />",
    );
  return context;
}

// --- Accordion Item Context ---
interface AccordionItemContextType {
  value: string;
  isOpen: boolean;
}

export const AccordionItemContext = createContext<
  AccordionItemContextType | undefined
>(undefined);

export function useAccordionItem() {
  const context = useContext(AccordionItemContext);
  if (!context)
    throw new Error(
      "AccordionItem sub-components must be used within an <AccordionItem />",
    );
  return context;
}
