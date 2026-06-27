import React from "react";
import { useAccordion, AccordionItemContext } from "./context";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

export function AccordionItem({
  value,
  children,
  className = "",
  ...props
}: AccordionItemProps) {
  const { value: activeValues } = useAccordion();
  const isOpen = activeValues.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={className} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}
